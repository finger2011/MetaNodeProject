package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

func main() {
	// task1()
	task2()
}

type counter struct {
	count int
	mu    sync.Mutex
}

func (c *counter) add() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.count++
}
func (c *counter) res() int {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.count
}

func task1() {
	counter := counter{}
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for i := 0; i < 1000; i++ {
				counter.add()
			}
		}()
	}
	wg.Wait()
	fmt.Println("counter:", counter.res())
}

func task2() {
	var wg sync.WaitGroup
	var count int32
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for i := 0; i < 1000; i++ {
				atomic.AddInt32(&count, 1)
			}
		}()
	}
	wg.Wait()
	fmt.Println("counter:", count)
}
