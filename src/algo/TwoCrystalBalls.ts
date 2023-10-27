export default function two_crystal_balls(breaks: boolean[]): number {

	const jmpAmount = Math.floor(Math.sqrt(breaks.length))

	let i = jmpAmount

	for(; i < breaks.length; i = i + jmpAmount){
		if(breaks[i]){
			console.debug('altura:', i)
			break;
		}
	}

	i = i - jmpAmount

	for(let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
		console.debug('index:', j)
		console.debug('altura linear:', i)
		if(breaks[i]){
			console.debug('altura de quebra:', i)
			return i
		}
	}

	return -1;
}