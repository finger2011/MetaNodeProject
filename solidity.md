
## 以太坊如何确定 EIP-1559 中的 BASEFEE

在以太坊 EIP-1559 协议中，`Base Fee`（基础费用）的确定并不依赖矿工或用户的竞价，而是由**协议本身根据上一区块的网络拥堵程度算法自动调整的**。

这就好比网约车的“动态调价”，但规则是完全透明且写死在代码里的。

以下是 `Base Fee` 计算的核心逻辑、公式和具体场景：

---

### 1. 核心参数定义

要理解计算过程，首先需要知道两个设定值：

*   **Target Block Size (目标区块大小)**：1500 万 Gas。以太坊希望长期来看，每个区块平均消耗的 Gas 量维持在这个水平。
*   **Max Block Size (最大区块大小)**：3000 万 Gas。这是硬上限，是目标值的 2 倍。
*   **Elasticity Multiplier (弹性倍数)**：2 倍（即最大值是目标的2倍）。
*   **Base Fee Max Change Denominator (最大变化分母)**：8。这意味着 Base Fee 每个区块最多只能波动 **12.5%** (1/8)。

### 2. 计算原理：供需调节

系统会查看**上一个区块（Parent Block）**实际使用的 Gas 量，将其与**目标值（15M）**进行比较：

1.  **如果上个区块 Gas 用量 > 15M**：说明网络拥堵，下一个区块的 Base Fee **上涨**。
2.  **如果上个区块 Gas 用量 < 15M**：说明网络空闲，下一个区块的 Base Fee **下跌**。
3.  **如果上个区块 Gas 用量 = 15M**：说明供需平衡，下一个区块的 Base Fee **保持不变**。

### 3. 具体计算公式

下一个区块的 Base Fee 公式如下：

$$
\text{BaseFee}_{\text{new}} = \text{BaseFee}_{\text{old}} \times \left( 1 + \frac{\text{GasUsed} - \text{TargetGas}}{\text{TargetGas}} \times \frac{1}{8} \right)
$$

或者更通俗的分解版：

1.  **计算偏移量**：$\Delta \text{Gas} = \text{GasUsed}_{\text{parent}} - \text{TargetGas}$
2.  **计算调整比例**：$\text{调整比例} = \frac{\Delta \text{Gas}}{\text{TargetGas}} \div 8$
3.  **应用调整**：$\text{BaseFee}_{\text{new}} = \text{BaseFee}_{\text{old}} + (\text{BaseFee}_{\text{old}} \times \text{调整比例})$

*(注：以太坊客户端实际代码中使用整数运算，会忽略小数部分)*

### 4. 极端场景举例

为了让你更直观地理解，我们看两个极端的例子：

#### 场景 A：网络极度拥堵（区块全满）
假设当前 Base Fee 是 100 Gwei。
上一个区块被塞满了，用了 **30M Gas**（是目标 15M 的 200%）。

*   **超出量**：$30M - 15M = 15M$
*   **偏离度**：$15M / 15M = 100\%$
*   **调整幅度**：$100\% / 8 = 12.5\%$
*   **结果**：下一个区块的 Base Fee 将变为 **112.5 Gwei**。

> **结论**：如果区块连续全满，Base Fee 会呈指数级增长（每个区块涨 12.5%），直到用户觉得太贵不再发送交易，Gas 用量回落。

#### 场景 B：网络极度空闲（空区块）
假设当前 Base Fee 是 100 Gwei。
上一个区块是空的，用了 **0 Gas**。

*   **低于量**：$0 - 15M = -15M$
*   **偏离度**：$-15M / 15M = -100\%$
*   **调整幅度**：$-100\% / 8 = -12.5\%$
*   **结果**：下一个区块的 Base Fee 将变为 **87.5 Gwei**。

### 5. 为什么要这样设计？

1.  **可预测性（Predictability）**：
    在 EIP-1559 之前，用户必须猜测当前的 Gas Price。现在，Base Fee 是确定的，用户只需要支付 `Base Fee` + 一个很小的 `Priority Fee`（小费，通常是 1-2 Gwei）即可确保交易被打包。钱包软件可以非常精准地预测下一块的费用。
2.  **平滑波动**：
    由于设定了 1/8 (12.5%) 的最大涨跌幅限制，Gas 费不会像以前那样在单一区块内突然暴涨 10 倍，它给了钱包和用户反应的时间。
3.  **燃烧机制（Deflation）**：
    确定出来的 **Base Fee 会被直接销毁（Burn）**，不给矿工/验证者。这给 ETH 带来了通缩压力。

### 总结

以太坊确定 Base Fee 的方式是**基于上一区块 Gas 使用率的负反馈调节机制**。它追求的是让区块利用率稳定在 50% 左右，通过最大 12.5% 的逐块调整幅度来动态寻找市场供需的平衡点。

## **Gas Griefing（Gas 恶作剧/骚扰攻击）** 是一种针对智能合约的攻击手段。

简单来说，攻击者（通常是交易发起者或中继者）通过**精心控制交易提供的 Gas 数量**，使得智能合约中的**内部调用（Sub-call）** 因为 Gas 不足而失败（Out of Gas），但**外部的主交易**却能成功执行并上链。

这种攻击通常不会直接窃取资金，而是为了**造成破坏**、**阻断业务逻辑**、**让受害者白白浪费 Gas**，或者在某些元交易（Meta-transaction）场景下利用失败状态获利。

---

### 1. 核心原理：EIP-150 与 "63/64 规则"

要理解 Gas Griefing，必须理解以太坊虚拟机（EVM）的一个关键规则：**EIP-150**。

当合约 A 调用合约 B（例如使用 `CALL` 指令）时，EVM 规定：
*   调用者（合约 A）不能把当前剩余的**所有** Gas 都传给被调用者（合约 B）。
*   调用者必须保留至少 **1/64** 的剩余 Gas 供自己使用。
*   被调用者（合约 B）最多只能获得当前剩余 Gas 的 **63/64**。

**攻击手法：**
攻击者发送一笔交易，设置一个“刚刚好”的 Gas Limit。
1.  交易执行到内部调用（Sub-call）时，剩余 Gas 的 63/64 传给了子调用。
2.  这个数量**恰好不足以**完成子调用的逻辑，导致子调用抛出 `Out of Gas` 异常并回滚。
3.  **但是**，外部合约（调用者）手里还保留了 1/64 的 Gas。
4.  这 1/64 的 Gas **足够**让外部合约处理完剩下的逻辑（比如捕获异常、触发 Event、更新 Nonce 等）并成功结束整个交易。

**结果：** 交易成功上链，状态被改变（可能被标记为“执行失败”），但原本的业务逻辑没有真正执行。

---

### 2. 常见攻击场景

#### 场景一：中继器攻击（Relayer Griefing）- 最典型
在元交易（Meta-Transaction）或账户抽象（Account Abstraction）中，用户签名一个消息，由中继器（Relayer）代付 Gas 并提交上链。

*   **正常流程**：Relayer 提交交易 -> 验证签名 -> 执行用户逻辑 -> 给 Relayer 返还 Gas 费。
*   **Griefing 攻击**：恶意的 Relayer 故意在提交交易时设置一个较低的 Gas Limit。
    *   验证签名步骤通过（消耗少）。
    *   **执行用户逻辑步骤失败**（Gas 不足）。
    *   代码逻辑捕获了这次失败，交易并未整体 Revert（为了防止 Relayer 白干活，合约通常会设计成即使内部逻辑失败也给 Relayer 付费）。
    *   **结局**：用户的逻辑没执行（转账失败），但用户签名的 Nonce 被消耗了，或者 Relayer 依然赚取了手续费。

#### 场景二：智能合约回调（Callback）
假设一个合约有一个功能：“向列表中的所有人分发代币”。

```solidity
function distribute(address[] calldata recipients) external {
    for (uint i = 0; i < recipients.length; i++) {
        // 这是一个低级调用，如果失败不会导致整个交易 revert
        (bool success, ) = recipients[i].call{value: 1 ether}(""); 
        if (!success) {
            // 记录失败日志
        }
    }
}
```

*   **Griefing 攻击**：如果攻击者能够控制传入的 Gas，他可以给出一个临界值的 Gas。
*   如果某个接收者是一个合约，且由攻击者控制，该合约的 `receive()` 函数可以故意消耗大量 Gas。
*   或者攻击者限制 Gas，导致正常的接收者因为 Gas 不足而接收失败（`success` 为 false），从而破坏分发过程。

---

### 3. 具体案例演示

假设有一个“受信任的执行器”合约，它接受用户请求并执行：

```solidity
contract Executor {
    function execute(address target, bytes calldata data) external {
        // 这是一个典型的 Griefing 漏洞点
        // 没有检查剩余 Gas 是否足够 target 执行
        (bool success, ) = target.call(data); 
        
        if (success) {
            emit Log("Success");
        } else {
            // 攻击者希望走到这里
            emit Log("Failed"); 
        }
    }
}
```

**攻击者行为：**
攻击者调用 `execute`，传入一个复杂的 `target` 逻辑，并精心计算 Gas Limit。
攻击者希望交易上链显示“Failed”，造成业务阻塞，或者如果在某些跨链桥逻辑中，“Failed”可能会触发某种退款或套利逻辑，而攻击者正是利用这一点。

---

### 4. 如何防御 Gas Griefing？

防御的核心思路是：**在进行外部调用前，强制检查剩余 Gas 是否足够。**

#### 方法 1：强制要求最小 Gas (Enforce Minimum Gas)
在合约代码中明确规定，执行某个操作时，剩余 Gas 必须大于某个安全阈值。

```solidity
// 防御代码示例
function safeExecute(address target, bytes calldata data, uint gasLimit) external {
    // 1. 检查当前剩余 Gas 是否足够
    // 这里的 63/64 逻辑是防止因为 EIP-150 导致实际传进去的 gas 比预期的少
    require(gasleft() >= gasLimit * 64 / 63, "Not enough gas");

    // 2. 显式传递 Gas
    (bool success, ) = target.call{gas: gasLimit}(data);
    
    // 或者，如果不需要限制具体的 gas，仅保证外部 gas 充足：
    // require(gasleft() > TARGET_REQUIRED_GAS, "Gas griefing detected");
}
```

#### 方法 2：检查调用后的 Gas 剩余量
如果内部调用失败了，检查是不是因为 Gas 不足导致的。如果是 Gas 不足，则强制整个交易 Revert，不让攻击者得逞（不让交易以“成功但内部失败”的状态上链）。

```solidity
(bool success, bytes memory returnData) = target.call(data);

if (!success) {
    // 如果失败了，但剩余 Gas 却极少，说明可能是 OOG 导致的失败
    // 这种情况下，我们选择让整个交易 Revert，防止 Griefing
    if (gasleft() < MINIMUM_GAS_BUFFER) {
         revert("Gas Griefing Attempt");
    }
    // 处理其他逻辑错误...
}
```

### 总结

**Gas Griefing** 是一种利用以太坊 Gas 分配规则（特别是 63/64 规则）的攻击。
*   **现象**：主交易成功，子调用因缺 Gas 失败。
*   **目的**：DoS 攻击、消耗受害者 Nonce、骗取中继费用或破坏业务状态。
*   **防御**：开发者必须在合约层显式检查 `gasleft()`，确保只有在 Gas 充足的情况下才执行关键的外部调用。

## 函数关键字和修饰符的排列顺序

根据 Solidity 官方风格指南（Style Guide），关于**函数修饰符（Function Modifiers）**的排序，主要涉及两个方面：一是**在函数定义头部的引用顺序**，二是**在合约代码结构中的定义位置**。

以下是详细规则：

### 1. 函数头部中的引用顺序 (Function Header Order)

当你定义一个函数时，关键字和修饰符的排列顺序**非常严格**，必须遵循以下标准流程：

1.  **可见性 (Visibility)**: `public` / `external` / `internal` / `private`
2.  **状态可变性 (Mutability)**: `pure` / `view` / `payable`
3.  **虚拟/重写 (Virtual/Override)**: `virtual` / `override`
4.  **自定义修饰符 (Custom Modifiers)**: `onlyOwner`, `nonReentrant` 等

**标准格式示例：**

```solidity
function myFunction(uint256 a)
    external           // 1. 可见性
    payable            // 2. 状态可变性
    virtual            // 3. 虚拟标识 (如果有)
    override           // 3. 重写标识 (如果有)
    onlyOwner          // 4. 自定义修饰符 A
    nonReentrant       // 4. 自定义修饰符 B
    returns (uint256)
{
    // ...
}
```

#### 为什么要这样排序？
*   **可读性**：开发者首先关心的是“谁能调用它”（可见性），其次是“它是否收钱/读写状态”（可变性），最后才是具体的逻辑限制（自定义修饰符）。
*   **解析一致性**：统一的格式有助于工具（如 Linters）和审计人员快速理解函数属性。

---

### 2. 自定义修饰符之间的逻辑顺序

虽然风格指南对 `public/view` 等关键字有严格要求，但对于**自定义修饰符之间**（例如 `onlyOwner` 和 `nonReentrant` 谁在前），风格指南没有强制规定。

但是，**为了安全和节省 Gas，业界通用的最佳实践**是：

1.  **权限控制类 (Access Control)** 在最前：
    *   例如 `onlyOwner`, `onlyRole`.
    *   **原因**：如果权限不足，应该第一时间 Revert，避免执行后续更昂贵的修饰符逻辑（如重入锁的读写操作）。
2.  **参数检查类 (Validation)** 居中：
    *   例如 `validAddress`.
3.  **安全防护类 (Security hooks)** 在后：
    *   例如 `nonReentrant` (重入锁).
    *   **原因**：重入锁通常涉及状态写入（设置 `_status = ENTERED`），这消耗 Gas 较多，且应包裹整个函数逻辑。

**推荐顺序示例：**
`function ... onlyOwner nonReentrant ...`

---

### 3. 修饰符在合约中的定义位置 (Layout of Contract)

如果你是指在合约代码中，**哪里写 `modifier` 的定义代码**，根据风格指南，它应该位于 **错误定义 (Errors)** 之后，**函数定义 (Functions)** 之前。

**完整的合约结构顺序：**

1.  Type Declarations (struct, enum)
2.  State Variables
3.  Events
4.  Errors
5.  **Modifiers (修饰符定义)**  <-- 在这里
6.  Functions

**代码布局示例：**

```solidity
contract Example {
    // 1. 变量
    address owner;

    // 2. 事件
    event Changed();

    // 3. 错误
    error NotOwner();

    // 4. 修饰符定义 (Modifiers)
    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    modifier nonReentrant() {
        // ...
        _;
    }

    // 5. 函数 (Functions)
    function doWork() external onlyOwner nonReentrant {
        // ...
    }
}
```

### 总结

记住这个核心顺序用于函数头：
**可见性 (Visibility) -> 状态性 (Mutability) -> 继承性 (Virtual/Override) -> 自定义修饰符 (Custom)**


## 会部分退还 Gas 的操作

### 存储退款（Storage Refund）
#### 核心退款机制：SSTORE 清零
将存储槽从非零值设置为零值时，会获得 Gas 退款。
```solidity
contract StorageRefund {
    uint256 public value;  // 初始为0
    
    function setAndClear() external {
        // 设置非零值（消耗Gas）
        value = 100;  // Gas成本: 22,100 (冷存储) 或 100 (热存储)
        
        // 清零获得退款
        value = 0;    // Gas成本: 100 - 4,800退款 = 净退款4,700
    }
    
    function multipleRefunds() external {
        // 设置多个存储槽
        uint256[10] storage values;
        for (uint i = 0; i < 10; i++) {
            values[i] = i + 1;  // 设置非零值
        }
        
        // 批量清零获得大额退款
        for (uint i = 0; i < 10; i++) {
            values[i] = 0;  // 每个退款4,800
        }
        // 总退款: 10 * 4,800 = 48,000 gas
    }
}
```

#### 退款计算规则（EIP-3529后）
```solidity
// EIP-3529（伦敦升级）后的退款规则
refund_rules = {
    "refund_operations": {
        "sstore_clearing": {
            "amount": 4800,           // 将存储槽从非零设为零
            "conditions": "必须是同一交易内发生的清除"
        },
        "selfdestruct": {
            "amount": 0,              // EIP-3529后取消退款
            "before_eip3529": 24000   // 之前是24,000
        }
    },
    "refund_limits": {
        "max_refund": "gas_used / 2", // 最多退还交易消耗Gas的一半
        "calculation": "min(总退款额, gas_used / 2)"
    },
    "gas_tracking": {
        "refund_counter": "跟踪累积退款额",
        "final_adjustment": "交易结束时应用",
        "effective_gas": "gas_used - 实际退款"
    }
}
```

### 自毁合约退款（SELFDESTRUCT）
```solidity
// 注意：EIP-3529后 selfdestruct 不再有退款！
contract OldSelfDestruct {
    // 伦敦升级前（2021年8月前）的代码
    function destroy() external {
        // 自毁合约，余额转移给 msg.sender
        // EIP-3529前：退款24,000 gas
        // EIP-3529后：退款0 gas
        
        // 现代Solidity已弃用selfdestruct
        // 替代方案：使用委托调用代理模式
        payable(msg.sender).transfer(address(this).balance);
        
        // ❌ 不要在新合约中使用：
        // selfdestruct(payable(msg.sender));
    }
}

// EIP-3529 取消退款的原因
selfdestruct_problems = {
    "gas_price_manipulation": {
        "attack": "攻击者在低gas费时创建并销毁合约",
        "profit": "通过退款获利，操纵gas市场",
        "example": "创建1000个合约然后销毁"
    },
    "state_bloat": {
        "issue": "鼓励频繁创建/销毁合约",
        "impact": "增加状态大小，节点负担加重"
    },
    "modern_alternatives": {
        "proxy_patterns": "使用代理合约，逻辑可升级",
        "minimal_proxies": "ERC-1167 最小代理",
        "stateless_design": "无状态设计模式"
    }
}
```

## Solidity 不支持浮点数运算
Solidity（以及底层的以太坊虚拟机 EVM）目前不支持浮点数（如 `float` 或 `double`），主要有三个核心原因：**确定性（Determinism）**、**精度安全（Precision Safety）**以及**复杂性与成本**。

以下是详细的分析：

### 1. 核心原因：确定性 (Determinism) —— 区块链的基石
这是最技术性也最重要的原因。

*   **共识机制的要求**：区块链要求全网成千上万个节点必须对每一笔交易的计算结果达成完全一致（Consensus）。
*   **硬件差异**：浮点数运算标准（IEEE 754）虽然是通用的，但在不同的硬件架构（如 Intel x86 vs ARM）、不同的操作系统、甚至不同的编译器优化级别下，**浮点数的低位精度处理可能存在微小的差异**。
*   **后果**：如果节点 A 算出来是 `1.00000000001`，而节点 B 因为硬件不同算出来是 `1.00000000002`，虽然差别很小，但会导致哈希值（State Root）完全不同。这会导致**分叉（Fork）**，全网无法达成共识，区块链就崩溃了。
*   **解决难度**：为了保证绝对的确定性，EVM 必须在软件层面实现一套不依赖底层硬件的“软浮点”库，但这极其复杂且运行缓慢。

### 2. 金融原因：精度丢失问题
以太坊主要是为金融交易设计的，金融系统极其厌恶“近似值”。

*   **二进制的缺陷**：计算机使用二进制存储数据，无法精确表示某些十进制小数。
    *   经典例子：在大多数编程语言中，`0.1 + 0.2` 的结果不是 `0.3`，而是 `0.30000000000000004`。
*   **后果**：在 DeFi（去中心化金融）中，如果使用浮点数，随着交易次数的累积，这些微小的“舍入误差”会导致**资金凭空消失或凭空产生**。
*   **需求**：银行和区块链系统需要的是**绝对精确**的计算，而不是“够用就好”的近似计算。

### 3. 溢出与 Gas 成本
*   **检查复杂**：浮点数的溢出（Overflow）和下溢（Underflow）检测比整数复杂得多。
*   **Gas 昂贵**：如果在 EVM 层面通过软件模拟来实现确定性的浮点运算，消耗的计算资源（Gas）将非常巨大，这对于用户来说是不经济的。

---

### 目前的解决方案：定点数运算 (Fixed-Point Arithmetic)

既然没有浮点数，Solidity 开发者是如何处理“1.5 个 ETH”或“3.5% 的利息”的呢？

答案是：**全部转化为整数（Scaling）。**

开发者使用“定点数”逻辑，即规定一个**精度（Decimals）**，通常是 18 位。

*   **存储逻辑**：
    *   你想存 `1 ETH`，实际在合约里存的是 `1,000,000,000,000,000,000` (10^18) Wei。
    *   你想存 `1.5 ETH`，实际存的是 `1,500,000,000,000,000,000` Wei。
    *   你想计算 `50%` (0.5)，实际是乘以 `50` 再除以 `100`（或者使用更精细的基数）。

**总结：**
Solidity 放弃浮点数不是因为它“做不到”，而是为了保证**全网共识不分叉**以及**金融账本一分钱都不差**。对于小数需求，通过“扩大倍数存整数”的方式完美解决了。
