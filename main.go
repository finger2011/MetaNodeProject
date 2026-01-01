package main

import (
	"fmt"
)

func main() {
	n := 3
	nums := [][]int{{0, 10}, {1, 9}, {2, 8}, {3, 7}, {4, 6}}

	// n := 3
	// nums := [][]int{{1, 20}, {2, 10}, {3, 5}, {4, 9}, {6, 8}}

	// nums := [][]int{{18, 19}, {3, 12}, {17, 19}, {2, 13}, {7, 10}}

	res := mostBooked(n, nums)
	fmt.Println(res)
}

// 快速排序
func quickSort(arr [][]int) [][]int {
	if len(arr) < 2 {
		return arr
	}

	left, right := 0, len(arr)-1

	// 选择基准值（这里选择中间元素）
	pivotIndex := len(arr) / 2
	arr[pivotIndex], arr[right] = arr[right], arr[pivotIndex]
	pivot := arr[right][0]

	// 分区操作
	for i := 0; i < right; i++ {
		if arr[i][0] < pivot {
			arr[left], arr[i] = arr[i], arr[left]
			left++
		}
	}

	// 将基准值放到正确位置
	arr[left], arr[right] = arr[right], arr[left]

	// 递归排序左右两部分
	quickSort(arr[:left])
	quickSort(arr[left+1:])

	return arr
}

func quickInsert(arr [][]int, num []int) [][]int {
	if num[0] <= arr[0][0] {
		return append([][]int{num}, arr...)
	} else if num[0] > arr[len(arr)-1][0] {
		return append(arr, num)
	}
	var insert int
	for i := 1; i < len(arr); i++ {
		if arr[i][0] >= num[0] {
			insert = i
			break
		}
	}
	return append(arr[:insert], append([][]int{num}, arr[insert:]...)...)
}

func mostBooked(n int, meetings [][]int) int {
	mLen := len(meetings)
	if mLen <= n {
		return 0
	}
	roomNum := map[int]int{} // room => meetting count
	var roomStart [][]int    // [next start, room num]

	meetings = quickSort(meetings)
	for i := 0; i < n; i++ {
		roomStart = append(roomStart, []int{meetings[i][0] + meetings[i][1], i})
		roomNum[i]++
	}
	roomStart = quickSort(roomStart)
	fmt.Println("meetings:", meetings)
	fmt.Println("room num:", roomNum)
	fmt.Println("room start:", roomStart)
	for i := n; i < mLen; i++ {
		roomNum[roomStart[0][1]]++
		roomStart[0][0] += meetings[i][1]
		roomStart = quickInsert(roomStart[1:], []int{roomStart[0][0], roomStart[0][1]})

		fmt.Println("room start:", roomStart)
		fmt.Println("room num:", roomNum)
	}
	var res, resNum int
	for num, count := range roomNum {
		if count > resNum {
			res = num
			resNum = count
		} else if count == resNum && num < res {
			res = num
		}
	}
	return res
}
