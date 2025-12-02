package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	// task1()
	tasks := []curTask{
		{
			name: "task1",
			fun: func() {
				for i := 0; i < 100; i++ {
				}
			},
		},
		{
			name: "task2",
			fun: func() {
				for i := 0; i < 300; i++ {
				}
			},
		},
	}
	task2(tasks)
	fmt.Println("main stopped")
}

// task1
func task1() {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		for i := 1; i <= 10; i++ {
			if i%2 == 1 {
				fmt.Println("print odd from 1 to 10:", i)
			}
		}
	}()
	wg.Add(1)
	go func() {
		defer wg.Done()
		for i := 2; i <= 10; i++ {
			if i%2 == 0 {
				fmt.Println("print even from 2 to 10:", i)
			}
		}
	}()

	wg.Wait()
	fmt.Println("goroutine stopped")
}

type curTask struct {
	fun  func()
	name string
}

// task2
func task2(tasks []curTask) {
	var wg sync.WaitGroup
	for _, task := range tasks {
		wg.Add(1)
		go func() {
			defer wg.Done()
			start := time.Now()
			task.fun()
			end := time.Now()
			fmt.Println("task[", task.name, "] used time:", end.Sub(start))
		}()
	}
	wg.Wait()
	fmt.Println("all tasks done")
}
