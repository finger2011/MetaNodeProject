package main

import (
	"fmt"
	"gin/server/common"
	"time"
)

func main() {
	fmt.Println("hello world:", time.Now())
	err := common.InitRouter()
	if err != nil {
		fmt.Println("init router error:", err)
		return
	}
}
