package task1

func twoSum(nums []int, target int) []int {
	length := len(nums)
	numMap := make(map[int][]int, length) // num=>[]index
	for index, num := range nums {
		m, exist := numMap[num]
		if exist {
			numMap[num] = append(m, index)
		} else {
			numMap[num] = []int{index}
		}
	}
	// fmt.Printf("map:%v\n", numMap)
	for index, num := range nums {
		idx, exist := numMap[target-num]
		if exist {
			for _, pos := range idx {
				if pos != index {
					return []int{index, pos}
				}
			}
		}
	}
	return []int{0, 0}
}
