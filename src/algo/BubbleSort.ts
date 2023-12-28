export default function bubble_sort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) { // for each v\alue in the array
		for (let j = 0; j < arr.length - 1 - i; j++) { // make another
			if(arr[j] > arr[j + 1]){
				const temp = arr[j];
				arr[j] = arr[j+1]
				arr[j + 1] = temp
			}
		}
	}
}