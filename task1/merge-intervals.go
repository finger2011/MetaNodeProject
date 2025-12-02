package task1

func merge(intervals [][]int) [][]int {
	length := len(intervals)
	if length == 1 {
		return intervals
	}
	res := [][]int{}
	sortedIntervals := sort(intervals)
	cur := sortedIntervals[0]
	for i := 1; i < length; i++ {
		if cur[1] < sortedIntervals[i][0] {
			res = append(res, cur)
			cur = sortedIntervals[i]
		} else if cur[1] < sortedIntervals[i][1] {
			cur[1] = sortedIntervals[i][1]
		}
		// for j := 0; j < length; j++ {
		//     if len(res[j]) == 0 {
		//         res[j] = sortedIntervals[i]
		//         resLen++
		//         break
		//     }
		//     if res[j][1] >= sortedIntervals[i][0]{
		//         if res[j][1] < sortedIntervals[i][1] {
		//             res[j][1] = sortedIntervals[i][1]
		//         }
		//         break
		//     }
		// }
	}
	res = append(res, cur)
	return res
}

func sort(intervals [][]int) [][]int {
	if len(intervals) <= 1 {
		return intervals
	}
	pivot := intervals[0]
	var left, right, equal [][]int
	for _, num := range intervals {
		if num[0] < pivot[0] {
			left = append(left, num)
		} else if num[0] > pivot[0] {
			right = append(right, num)
		} else {
			equal = append(equal, num)
		}
	}
	return append(append(sort(left), equal...), sort(right)...)
}
