# NFTMarket项目拆分
基于订单簿的NFT市场

## 业务逻辑拆分

### maker（用户）list：限价买单或者限价卖单

#### 限价买单（买NFT：如基于某个collection/item， 需要存入ETH）
#### 限价卖单（卖NFT，存入NFT）

### taker（用户）bid：限价买单或者限价卖单的对手单

### match：匹配卖单和对手单，生成订单，完成交易

### view：查看相关信息
#### user： 用户信息
#### collection： 相关NFT的collection/item/bid信息
#### order： 订单信息
#### activity：NFT事件信息如mint, transfer, list, buy 等

## 合约拆分

### OrderBook
#### EasySwapOrderBook.sol 订单簿
1. makeOrders： 批量创建订单
2. cancelOrders： 批量取消订单
3. editOrders： 批量修改订单
4. matchOrder： 匹配订单，完成交易
5. matchOrders： 批量匹配订单，通过delegatecall保证某个订单失败不会影响其他订单
6. matchOrderWithoutPayback：用于matchOrders
7. withdrawETH： 提取ETH
#### OrderStorage.sol 订单存储
1. _addOrder： 新增订单
2. _removeOrder： 移除订单
3. getOrders： 获取符合给定条件的订单列表
4. getBestOrder： 获取最匹配的订单

#### OrderValidator.sol 订单验证
1. _validateOrder：订单相关参数是否合法
2. _getFilledAmount：已完成交易数量
3. _updateFilledAmount： 更新订单已完成交易数量
4. _cancelOrder： 取消订单

#### ProtocolManager.sol 手续费相关
1. setProtocolShare：设置份额

### EasySwapVault 订单资产管理
1. balanceOf：订单剩余资产（ETH&NFT）
2. depositETH： 存入ETH - 根据orderKey
3. withdrawETH： 转移ETH 
4. depositNFT： 存入NFT
5. withdrawNFT： 转移NFT


## 后端拆分
### config 系统配只
### src
#### api
##### middleware 中间件
##### router 路由
##### v1 控制层
#### app
#### common：公共方法&工具函数
#### config：配置
#### dao：数据层，数据库服务
#### service：业务逻辑
#### types： 公共数据类型