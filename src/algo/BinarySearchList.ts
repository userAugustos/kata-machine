
export default function bs_list(haystack: number[], needle: number): boolean {
	let lo = 0
	let hi = haystack.length

	do {
		const mid = Math.floor(lo + (hi - lo) /2)
		const value = haystack[mid]

		if(value === needle){
			return true;
		} else if(value > needle) {
			hi = mid
		} else { // (value < mid)
			lo = mid + 1
		}

	} while (lo < hi);
	return false
}