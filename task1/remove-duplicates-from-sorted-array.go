package task1

func removeDuplicates(nums []int) int {
	var k, cur, num int
	length := len(nums)
	cur = 1
	num = nums[0]
	k = 1
	for i := 1; i < length; i++ {
		if num != nums[i] {
			k++
			num = nums[i]
			nums[cur] = nums[i]
			cur++
		}
	}
	return k

}
