# MetaNodeProject

MetaNode Academy Practise

### Q&A

- transferFrom接口如何使用

    - 需要先授权(approve)，再调用

- ERC721中的授权接口跟ERC20有何不同

    - ERC721针对某个tokenId进行approve,ERC20中approve的是代币的amount

- safeTransfer等带safe前缀的接口提供了什么安全措施

    - 判断to的地址是否实现了IERC721Receiver()方法,防止transfer失败后，代币无法被使用

- delegatecall 跟 call 的区别是什么

    - call调用合约的方法，对于状态变量的修改是被被调用的合约上；delegatecall调用合约的方法，执行的逻辑是被调用合约的方法逻辑，但是对于状态变量的修改是在当前合约上

- 可升级合约的执行流程是什么（user -> proxy -> implementation

    - user <调用> proxy(address) -> proxy <delegatecall> implementation(address)
    - 升级合约时修改proxy delegatecall时调用的address即可

- 代理合约上本身是有存储的，怎么避免跟逻辑合约上的存储产生冲突

    - 冲突产生原因

        - 共享存储空间:代理合约使用delegatecall调用逻辑合约的方法，实际修改的状态变量是在代理合约上
        - 代理合约和逻辑合约对同一存储槽位的理解不同，比如代理合约在slot 0中存储的是implementation，逻辑合约在slot 0中存储的是var1(逻辑合约的状态变量)，所以当逻辑合约修改var1时，会修改slot 0中的存储，而代理合约通过delegatecall修改var1时，实际上修改的是代理合约的slot 0的内容，即implementation，至此冲突产生

- 冲突避免

    - 使用特定的slot来存储代理合约中的状态变量（推荐使用：成熟，安全，EIP-1967定义标准存储槽位，OpenZeppelin 升级插件（自动处理））

    - 在逻辑合约中避免使用已经在代理合约中使用的存储槽位（需要在逻辑合约中手动处理）


- 逻辑合约升级的存储冲突问题

    - 升级合约改变了原有存储变量的顺序或者类型，致使存储槽位的内容发生改变，导致访问/读取数据时发生数据混乱

- 可以在逻辑合约的构造函数中初始化变量吗？为什么

    - 不可以，因为构造函数只有在合约部署的时候调用一次，在代理合约中无法调用，导致逻辑合约构造函数的内容丢失

- 信标代理

    - beacon: 多个proxy通过balacon 获取implementation 的address，升级时，只需要修改beacon中获取implementation的address，即可完成对一批proxy的升级

- 钻石代理

    - 代理合约和逻辑合约是一对多的关系，通过保存选择器 => facet 地址，可以拆分出多个逻辑合约（无限），同时可以针对某个facet进行单独的合约升级

- 最小代理

    - Clone:代理合约和逻辑合约时多对一的关系，多个代理合约指向同一个逻辑合约

