export default function bs_list(haystack: number[], needle: number): number {
	let hi = haystack.length
	let low = 0

	do {
		const mid = Math.floor(low + (hi - low) /2)
		const value = haystack[mid]

		if(value === needle){
			return mid // here we return the index
		} else if(value > needle) {
			hi = mid
		} else { // (value < needle)
			low = mid + 1
		}

	} while (low < hi);
	return -1
}
