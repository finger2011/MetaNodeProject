package task1

func plusOne(digits []int) []int {
	carry := false
	length := len(digits)
	if digits[length-1] == 9 {
		carry = true
		digits[length-1] = 0
	} else {
		digits[length-1] += 1
	}
	cur := length - 1
	for carry {
		if cur <= 0 {
			break
		}
		carry = false
		cur--
		if digits[cur] == 9 {
			digits[cur] = 0
			carry = true
		} else {
			digits[cur] += 1
		}
	}
	if carry {
		res := make([]int, length+1)
		res[0] = 1
		digits = res
	}
	return digits
}
