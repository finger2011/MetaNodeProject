package task1

func isValid(s string) bool {
	length := len(s)
	stack := make([]byte, length)
	cur := 0
	for i := 0; i < length; i++ {
		if cur == 0 {
			stack[cur] = s[i]
			cur++
			continue
		}
		if comStack(s[i], stack[cur-1]) {
			cur--
		} else {
			stack[cur] = s[i]
			cur++
		}
	}
	if cur == 0 {
		return true
	}
	return false
}

func comStack(a, b byte) bool {
	res := false
	switch a {
	case ')':
		if b == '(' {
			res = true
		}
	case ']':
		if b == '[' {
			res = true
		}
	case '}':
		if b == '{' {
			res = true
		}
	}
	return res
}
