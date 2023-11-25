So in bubble sort, the thing is a swap; 
As is in every sort, we start in a position, aiming a end.
In bubble sort, we normally start at 0 and goes to the end of the array, by each index, we compare: 
"Hey index + 1 are u smaller than me?" If not, we just walk to the next index, if it is, we swap position.
	This means, that by the end of the first iteration in the array, the biggest value in the array, are gonna be at the end of the array.

```
iter the array
[ ->->->]
 0     n

[1,4,2,5] -> [ 1 <-> 4 ] = false -> [ 4 <-> 2 ] = true
 0     n
```

So this looks like linear, but only for the first iter, since another thing about the bubble sort is that, we don't need to keep going to the end of the array, or for the last index we sorted; Since we already know, `the biggest element we find in the last iteration, is at the end of the array or before a larger element!`

So here is the thing with bubbleSort:

1 - We ask: `i >= i + 1`
2 - We keep track when we reach the end of the array, without swapping, so we know, how far we need to go, in the next iteration