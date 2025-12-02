package task1

func longestCommonPrefix(strs []string) string {
	res := ""
	length := len(strs)
	if length == 1 {
		return strs[0]
	}
	stop := false
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < length; j++ {
			if i >= len(strs[j]) || strs[j][i] != strs[0][i] {
				stop = true
				break
			}
		}
		if stop {
			break
		}
		res += string(strs[0][i])
	}
	return res
}
