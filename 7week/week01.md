# 目标：掌握 Uniswap V4 的 Singleton 架构与 Hook 机制，开发自定义交易逻辑。
# 背景：V4 将所有池子合并在一个合约里（Singleton），并通过 Hooks 在交易生命周期（BeforeSwap, AfterSwap 等）注入逻辑。
# 工具：Foundry + Uniswap V4 Periphery。
# 任务：
## 架构理解：深入阅读 V4 代码库，理解 PoolManager 和 Lock 机制（Flash Accounting）。
## 实战项目：编写一个 "Take-Profit" Hook (止盈挂单)。
## 逻辑：用户在 Swap 时如果价格达到特定点位，Hook 自动执行逻辑。或者实现一个 "KYC Hook"，只有持有特定 NFT 的用户才能交易。
## 测试：在 Foundry 中模拟 V4 环境，测试 Hook 是否能正确拦截或修改交易。
