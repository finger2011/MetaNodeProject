# 目标：实现一个基于订单簿的NFT Market

# 需求分析
## 角色
1. Maker：提供流动性的用户 (挂单卖出 / 挂单收购)，核心需求：低Gas或无Gas挂单、能够设定挂单有效期、能够针对整个系列出价
2. Taker：消耗流动性的用户 (直接购买 / 直接出售)，核心需求：能够以最优价格立即成交、支持批量操作
3. Admin：平台运营方，配置费率、管理上架合集、黑/白名单管理

## 核心业务逻辑
1. lists：具体的 NFT 列表，按价格从低到高排序
2. bids：针对 整个系列 (Collection) 或 特定属性 (Item) 的出价，按价格从高到低排序

## 功能列表
### 交易（合约&后端）
1. Listing（Maker 挂单）：用户签名（NFT），后端存储订单并放入 订单簿 的 lists 队列
2. bidding：用户授权 WETH（ERC20），签名出价，后端放入 订单簿 的 bids 队列
3. matching - buy：Taker 选择一个或多个 list，调用合约 matchOrder。合约原子化完成 WETH（ERC20） 转账与 NFT 转移
4. matching - sell：Taker (持有 NFT 者) 选择当前的最高 Bid，调用合约matchOrder。NFT 转给 Bidder，WETH（ERC20） 转给 Taker
5. cancel：软取消：后端API标记失效；硬取消：链上调用 cancelOrder
6. edit：修改订单，调用合约editOrder，后端同步修改相应订单
7. fee：费率系统，如修改手续费等

### 数据与索引 (后端)
####  检索订单簿
1. 订单簿列表：可聚合筛选，如在价格范围内有哪些lists 或者 bids，生成结构化数据供前端渲染
2. 实时同步：当有新订单签名上传或链上成交时，通过 WS 推送给前端，实现动态订单簿。

### 用户界面 (前端)
1. 仪表盘：订单簿，NFT当前价格，历史成交价等
2. 购物车：批量完成交易

## 技术架构
Solidity + Go + 前端

## 业务流程
### Maker 挂出买单 (bid)
1. 用户操作: 存入 WETH -> 选择NFT Collection/Item -> 输入单价 5 ETH -> 输入数量 10 个 -> 点击 "Place Bid"
2. 前端: 弹出钱包授权签名 
3. 后端: 接收签名 -> 验证签名有效性 -> 验证用户 WETH 余额是否充足 -> 存入数据库
4. UI 更新: 订单簿的bids 增加
### Taker 立即出售 (向买单出售)
1. 用户操作: 用户持有NFT -> 查看买盘最高价为 5 ETH -> 点击 立即出售
2. 合约交互: 前端调用合约 matchOrder，传入 Maker 的签名数据和 Taker 的 NFT ID 
3. 链上结算：合约检查 Maker 的 WETH 授权 -> 将 5 ETH (减去手续费) 转给 Taker -> 将 NFT 转给 Maker -> 链上发出 OrderMatched 事件
4. 后端同步: 监听到OrderMatched事件 -> 从数据库移除该 Bid 订单 -> 更新订单簿显示

## 非功能性需求
### 数据一致性：链上数据同步到后端（轮询/webhook）
### 高并发处理：后端api需具备抗压能力
### 安全性
1. 防止重入
2. 权限验证：多签钱包
3. 前端需明确展示授权（Approve）风险
