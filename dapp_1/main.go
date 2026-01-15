package main

import (
	"context"
	"crypto/ecdsa"
	"encoding/hex"
	"fmt"
	"go_eth_demo/counter"
	"log"
	"math/big"
	"strings"
	"time"

	"go_eth_demo/counters"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

var key = "0aa6bef35f61537f35257111c4e7f4d6ac0b8da9d8d9fcd2ce3fd333a040dfc8"
var sepoliaRpcUrl = "https://eth-sepolia.g.alchemy.com/v2/plxMRW5CGaZwxG0XaRxgC"
var toAddressHex = "0x4B71c932c1DA88b45eF218F6368a7BA505021d89"

const (
	// store合约的字节码
	contractBytecode = "6080604052348015600e575f5ffd5b506103cf8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630c55699c14610043578063371303c01461006157806370119d061461006b575b5f5ffd5b61004b610087565b6040516100589190610187565b60405180910390f35b61006961008c565b005b610085600480360381019061008091906101ce565b6100dc565b005b5f5481565b5f5f81548092919061009d90610226565b91905055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a8160016040516100d291906102af565b60405180910390a1565b5f811161011e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011590610348565b60405180910390fd5b805f5f82825461012e9190610366565b925050819055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a81816040516101649190610187565b60405180910390a150565b5f819050919050565b6101818161016f565b82525050565b5f60208201905061019a5f830184610178565b92915050565b5f5ffd5b6101ad8161016f565b81146101b7575f5ffd5b50565b5f813590506101c8816101a4565b92915050565b5f602082840312156101e3576101e26101a0565b5b5f6101f0848285016101ba565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6102308261016f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610262576102616101f9565b5b600182019050919050565b5f819050919050565b5f819050919050565b5f61029961029461028f8461026d565b610276565b61016f565b9050919050565b6102a98161027f565b82525050565b5f6020820190506102c25f8301846102a0565b92915050565b5f82825260208201905092915050565b7f696e6342793a20696e6372656d656e742073686f756c6420626520706f7369745f8201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b5f6103326023836102c8565b915061033d826102d8565b604082019050919050565b5f6020820190508181035f83015261035f81610326565b9050919050565b5f6103708261016f565b915061037b8361016f565b9250828201905080821115610393576103926101f9565b5b9291505056fea2646970667358221220949149e83115d910fa27bff4d1759d07c2979999c89b6b4f9033f383054b93c264736f6c63430008210033"
	contractAddr     = "0x4e8454cC73B6729464cb08dB018f9D298289e509"
	StoreABI         = `[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"by","type":"uint256"}],"name":"Increment","type":"event"},{"inputs":[],"name":"inc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"by","type":"uint256"}],"name":"incBy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"x","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`
)

func main() {
	client, err := ethclient.Dial(sepoliaRpcUrl)
	if err != nil {
		log.Fatal(err)
	}

	// blockNumber := big.NewInt(5671744)
	// getBlockInfo(blockNumber, client)

	// sendTransaction(client)

	// deployCounter(client)
	// deployCounterByBytecode(client)
	// executeCounter(client)
	readLogs(client)
}

// 执行合约代码
func executeCounter(client *ethclient.Client) {
	counters, err := counters.NewCounters(common.HexToAddress(contractAddr), client)
	if err != nil {
		fmt.Println("new counter error:", err)
		return
	}
	privateKey, err := crypto.HexToECDSA(key)
	if err != nil {
		fmt.Println("convert key to private key error:", err)
		return
	}
	// 初始化交易opt实例
	opt, err := bind.NewKeyedTransactorWithChainID(privateKey, big.NewInt(11155111))
	if err != nil {
		fmt.Println("new keyed transactor with chain id error:", err)
		return
	}
	tx, err := counters.IncBy(opt, big.NewInt(10))
	if err != nil {
		fmt.Println("increment by error:", err)
		return
	}
	// 0x63be729117400122876a383137a7b4b5016865f94cc3611bc7e45d0947ba5163
	fmt.Println("increment transaction hash:", tx.Hash().Hex())

	callOpt := &bind.CallOpts{Context: context.Background()}
	valueInContract, err := counters.X(callOpt)
	if err != nil {
		fmt.Println("CallOpts error:", err)
		return
	}
	fmt.Println("x value after call:", valueInContract)
}

// 读取日志
func readLogs(client *ethclient.Client) {
	contractAddress := common.HexToAddress(contractAddr)
	query := ethereum.FilterQuery{
		FromBlock: big.NewInt(10002810),
		ToBlock:   big.NewInt(10002819),
		Addresses: []common.Address{
			contractAddress,
		},
		// Topics: [][]common.Hash{
		//  {},
		//  {},
		// },
	}

	logs, err := client.FilterLogs(context.Background(), query)
	if err != nil {
		log.Fatal(err)
	}

	contractAbi, err := abi.JSON(strings.NewReader(StoreABI))
	if err != nil {
		log.Fatal(err)
	}

	for _, vLog := range logs {
		fmt.Println(vLog.BlockHash.Hex())
		fmt.Println(vLog.BlockNumber)
		fmt.Println(vLog.TxHash.Hex())
		event := struct {
			By big.Int
		}{}
		err := contractAbi.UnpackIntoInterface(&event, "incBy", vLog.Data)
		if err != nil {
			log.Fatal(err)
		}

		fmt.Println(event.By)
		var topics []string
		for i := range vLog.Topics {
			topics = append(topics, vLog.Topics[i].Hex())
		}

		fmt.Println("topics[0]=", topics[0])
		if len(topics) > 1 {
			fmt.Println("indexed topics:", topics[1:])
		}
	}

	eventSignature := []byte("incBy(uint)")
	hash := crypto.Keccak256Hash(eventSignature)
	// 0x62d7ae216cf14fe49800ea97a00c26c1f584727fcec294e00957a1f3ea75e0e6
	fmt.Println("signature topics=", hash.Hex())
}

// solcjs --bin Counter.sol
// solcjs --abi Counter.sol
// abigen --bin=Counter_sol_Counter.bin --abi=Counter_sol_Counter.abi --pkg=counter --out=./counter/counter.go
func deployCounter(client *ethclient.Client) {
	privateKey, err := crypto.HexToECDSA(key)
	if err != nil {
		fmt.Println("convert key to private key error:", err)
		return
	}

	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		fmt.Println("cannot assert type: publicKey is not of type *ecdsa.PublicKey")
		return
	}

	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)
	nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		fmt.Println("get nonce error:", err)
		return
	}

	gasPrice, err := client.SuggestGasPrice(context.Background())
	if err != nil {
		fmt.Println("get gas price error:", err)
		return
	}

	chainId, err := client.NetworkID(context.Background())
	if err != nil {
		fmt.Println("get chain id error:", err)
		return
	}

	auth, err := bind.NewKeyedTransactorWithChainID(privateKey, chainId)
	if err != nil {
		fmt.Println("create keyed transactor with chain id error:", err)
		return
	}
	auth.Nonce = big.NewInt(int64(nonce))
	auth.Value = big.NewInt(0)     // in wei
	auth.GasLimit = uint64(300000) // in units
	auth.GasPrice = gasPrice

	address, tx, instance, err := counter.DeployCounter(auth, client)
	if err != nil {
		fmt.Println("deploy counter error:", err)
		return
	}

	fmt.Println("counter address:", address.Hex())            //0x4e8454cC73B6729464cb08dB018f9D298289e509
	fmt.Println("counter transaction hash:", tx.Hash().Hex()) // 0xb65e3ee4aa2434bcf7516c847666caf27e1a864156a3226d85a391e9d07b5101

	_ = instance
}

func deployCounterByBytecode(client *ethclient.Client) {
	// 创建私钥（在实际应用中，您应该使用更安全的方式来管理私钥）
	privateKey, err := crypto.HexToECDSA(key)
	if err != nil {
		fmt.Println("convert key to private key error:", err)
		return
	}

	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		fmt.Println("error casting public key to ECDSA")
		return
	}

	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)

	// 获取nonce
	nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		fmt.Println("get nonce error:", err)
		return
	}

	// 获取建议的gas价格
	gasPrice, err := client.SuggestGasPrice(context.Background())
	if err != nil {
		fmt.Println("get gas price error:", err)
		return
	}

	// 解码合约字节码
	data, err := hex.DecodeString(contractBytecode)
	if err != nil {
		fmt.Println("decode contract bytecode error:", err)
		return
	}

	// 创建交易
	tx := types.NewContractCreation(nonce, big.NewInt(0), 3000000, gasPrice, data)

	// 签名交易
	chainID, err := client.NetworkID(context.Background())
	if err != nil {
		fmt.Println("sign transaction error:", err)
		return
	}

	signedTx, err := types.SignTx(tx, types.NewEIP155Signer(chainID), privateKey)
	if err != nil {
		fmt.Println("send transaction error:", err)
		return
	}

	// 发送交易
	err = client.SendTransaction(context.Background(), signedTx)
	if err != nil {
		log.Fatal(err)
	}

	// 0xdac114f09ab20437e45d9df6e79f4f4b8f0f0770dabdc240536d9d81942a2820
	fmt.Printf("Transaction sent: %s\n", signedTx.Hash().Hex())

	// 等待交易被挖矿
	receipt, err := waitForReceipt(client, signedTx.Hash())
	if err != nil {
		fmt.Println("wait for receipt error:", err)
		return
	}
	// 0x828662541b9e5ae66c35e733C2F6162CB8a2dCd5
	fmt.Printf("Contract deployed at: %s\n", receipt.ContractAddress.Hex())
}

func waitForReceipt(client *ethclient.Client, txHash common.Hash) (*types.Receipt, error) {
	for {
		receipt, err := client.TransactionReceipt(context.Background(), txHash)
		if err == nil {
			return receipt, nil
		}
		if err != ethereum.NotFound {
			return nil, err
		}
		// 等待一段时间后再次查询
		time.Sleep(1 * time.Second)
	}
}

// 实现查询指定区块号的区块信息，包括区块的哈希、时间戳、交易数量等
func getBlockInfo(blockNumber *big.Int, client *ethclient.Client) {
	// header, err := client.HeaderByNumber(context.Background(), blockNumber)
	// if err != nil {
	// 	fmt.Println("get block header error:", err)
	// 	return
	// }
	// fmt.Println("============hearder info:")
	// fmt.Println(header.Number().Uint64())     // 5671744
	// fmt.Println(header.Time())                // 1712798400
	// fmt.Println(header.Difficulty().Uint64()) // 0
	// fmt.Println(header.Hash().Hex())          // 0xae713dea1419ac72b928ebe6ba9915cd4fc1ef125a606f90f5e783c47cb1a4b5

	block, err := client.BlockByNumber(context.Background(), blockNumber)
	if err != nil {
		fmt.Println("get block info error:", err)
		return
	}
	fmt.Println("============block info:")
	fmt.Println("block number:", block.Number().Uint64())         // 5671744
	fmt.Println("block time:", block.Time())                      // 1712798400
	fmt.Println("block difficulty:", block.Difficulty().Uint64()) // 0
	fmt.Println("block hash:", block.Hash().Hex())                // 0xae713dea1419ac72b928ebe6ba9915cd4fc1ef125a606f90f5e783c47cb1a4b5
	fmt.Println("block transactions:", len(block.Transactions())) // 70
}

// 发送交易:
// 构造一笔简单的以太币转账交易，指定发送方、接收方和转账金额。
// 对交易进行签名，并将签名后的交易发送到网络。
// 输出交易的哈希值。
// ============transaction info
// nonce: 7
// gas limit: 21000
// gas price: 12080612
// to address: 0x4B71c932c1DA88b45eF218F6368a7BA505021d89
// value: 1000000000000000000
// data: []
// chain id: 11155111
// transaction hash: 0x4e530606393ddb77dcf3442f19edcbb26868cddbe09294a1ec43b14c48c6e2a5
// ============transaction sent successfully
func sendTransaction(client *ethclient.Client) {
	privateKey, err := crypto.HexToECDSA(key)
	if err != nil {
		fmt.Println("convert key to private key error:", err)
		return
	}
	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		fmt.Println("error casting public key to ECDSA")
		return
	}
	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)

	nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		fmt.Println("get nonce error:", err)
		return
	}
	gasLimit := uint64(21000)
	gasPrice, err := client.SuggestGasPrice(context.Background())
	if err != nil {
		fmt.Println("get gas price error:", err)
		return
	}
	toAddress := common.HexToAddress(toAddressHex)
	data := []byte{}
	value := big.NewInt(1000000000000000000) // 1 ether

	tx := types.NewTransaction(nonce, toAddress, value, gasLimit, gasPrice, data)
	fmt.Println("============transaction info")
	fmt.Println("nonce:", nonce)
	fmt.Println("gas limit:", gasLimit)
	fmt.Println("gas price:", gasPrice)
	fmt.Println("to address:", toAddress)
	fmt.Println("value:", value)
	fmt.Println("data:", data)
	chainID, err := client.NetworkID(context.Background())
	if err != nil {
		fmt.Println("get chain id error:", err)
		return
	}
	fmt.Println("chain id:", chainID)
	signer := types.NewEIP155Signer(chainID)
	signature, err := types.SignTx(tx, signer, privateKey)
	if err != nil {
		fmt.Println("sign transaction error:", err)
		return
	}
	//
	err = client.SendTransaction(context.Background(), signature)
	if err != nil {
		fmt.Println("send transaction error:", err)
		return
	}
	fmt.Println("transaction hash:", signature.Hash().Hex()) // 0x4e530606393ddb77dcf3442f19edcbb26868cddbe09294a1ec43b14c48c6e2a5
	fmt.Println("============transaction sent successfully")
}
