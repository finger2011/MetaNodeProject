package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	task1()
	task2()
}

func task1() {
	ch := make(chan int, 10)
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		for i := 1; i <= 10; i++ {
			ch <- i
		}
		close(ch)
	}()
	wg.Add(1)
	go func() {
		defer wg.Done()
		for v := range ch {
			fmt.Println("channel received value:", v)
		}
	}()
	wg.Wait()
	fmt.Println("channel closed")
}

func task2() {
	ch := make(chan int, 1000)
	go producer(ch)
	go consumer(ch)
	for {
		time.Sleep(500 * time.Millisecond)
		if _, ok := <-ch; !ok {
			break
		}
	}
	fmt.Println("task2 done")
}

func producer(ch chan<- int) {
	for i := 0; i < 1000; i++ {
		ch <- i
	}
	close(ch)
}

func consumer(ch <-chan int) {
	for v := range ch {
		fmt.Println("received num:", v)
	}
}
