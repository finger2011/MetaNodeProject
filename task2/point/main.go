package main

import "fmt"

func main() {
	num := 10
	point1(&num)
	fmt.Printf("num:%d\n", num)

	nums := []int{1, 2, 3}
	point2(&nums)
	fmt.Printf("nums:%v\n", nums)
}

func point1(p *int) {
	*p += 10
}

func point2(nums *[]int) {
	for index, num := range *nums {
		(*nums)[index] = num * 2
	}
}
