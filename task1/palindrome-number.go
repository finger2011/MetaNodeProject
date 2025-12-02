package task1

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	if x < 10 {
		return true
	}
	arr := make([]int, 32)
	cur := 0
	y := x
	for y >= 10 {
		arr[cur] = y % 10
		cur++
		y = y / 10
	}
	arr[cur] = y
	i := 0
	for i < cur {
		if arr[i] != arr[cur] {
			return false
		}
		i++
		cur--
	}

	return true
}
