# Pledge项目拆分
去中心化金融（DeFi）项目，旨在提供固定利率的借贷协议

## 业务逻辑拆分
- **借款人**: 可以抵押加密资产以获得稳定币，用于投资非加密资产。
- **贷款人**: 提供流动性，获得固定回报。
创建池子 -> 贷款人存款 -> 借款人抵押

## 合约拆分

### multiSignature 多签合约
#### multiSignature.sol 多签工具函数
##### library whiteListAddress 白名单函数
1. addWhiteListAddress 添加白名单地址
2. removeWhiteListAddress 地址从白名单移除
3. isEligibleAddress 地址是否在白名单中
##### multiSignature 多签合约
这里的多签和普通的多签略有区别，这里的多签是每个多签用户直接对applicant进行签名，每个applicant的签名数量超过预设的threshold即可认为有权限，区别于普通多签通过线下签名，在交易时将多个签名一起提交并验证
1. transferOwner 多签所有者转移
2. createApplication 创建新的多签对象
3. signApplication 签名
4. revokeSignApplication 移除签名
5. getValidSignature 获取签名数量
6. getApplicationInfo 获取多签对象信息
7. getApplicationCount
8. getApplicationHash 生成唯一hash
#### multiSignatureClient.sol 多签客户端
1. getMultiSignatureAddress 获取多签合约地址
2. checkMultiSignature 权限验证
3. saveValue
4. getValue

### pledge
#### PledgePool.sol 借贷池
1. createPoolInfo 创建借贷池

2. depositLend 存款人存款
3. refundLend 退还过量存款给存款人
4. claimLend 存款人接收 sp_toke
5. withdrawLend 存款人取回本金和利息
6. emergencyLendWithdrawal 紧急提取贷款

7. depositBorrow 借款人质押货币
8. refundBorrow 退还给借款人过量存款
9. claimBorrow 借款人接收 sp_token 和贷款资金
10. withdrawBorrow 借款人提取剩余赎回金额
11. emergencyBorrowWithdrawal 紧急借款提取

12. settle 借贷池结算 
13. finish 完成一个借贷池的操作，包括计算利息、执行交换操作、赎回费用和更新池子状态等步骤
14. checkoutLiquidate 检查清算条件
15. liquidate 借贷池清算
16. redeemFees 费用计算
17. getUnderlyingPriceView 获取最新的预言机价格

#### DebtToken.sol 代币合约，贷款人取回本金利息以及借款人提取剩余金额的凭证
#### BscPledgeOracle.sol 预言机合约
#### AddressPrivileges.sol 对DebtToken的mint,burn权限验证

## 后端拆分
### api
#### common 公共函数&错误代码
#### controllers 控制层
#### middlewares 中间件
#### models 模型层
#### routes 路由
#### services 业务逻辑层
#### static 静态文件
#### validate 验证器

### config 配置
### contract 合约的abi文件&转换后的go代码
### db 数据库&redis
### docs 文档
### log 日志函数
### schedule 定时任务
### utils 工具类