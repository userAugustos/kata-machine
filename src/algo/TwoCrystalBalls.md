### TwoCrystalBalls

So, the problem is:

U are given 2 crystal balls and, a list of heights, and then u gotta answer: What is the exatcly or smallers height the ball breaks?

So, bassically, u gotta 2 chances of find, the smaller height in that the ball gonna break


For it, we cannot go linear (throw the ball for each height) so, how do we approach it?

###### Binary? No!
	if we go binary, we gonna go the the middle of the list, and throw the ball, if it breaks, we lost one, ok, now we gonna get the mddle of 0 to the last middle we used, if it breaks, we just lost your last ball, without knowing the point it breaks. Even if it doesn't break we are now going from the last middle we used, to the last max range that we used, then we assume the same hisk `if it breaks, we just lost your last ball, in the middle of a range of heights`


So, we are going with an approach that jumps a certain amount, but without leaving us the middle of many possibilitys, and then, we go linear, in that small amount!

**We going square root** Yes!

Were, given the list, doesn't metters if it has 1 billion heights, we going **square root(n)** then we jump by this amount, until the first ball breaks, then we know: ok, in this range, is the breaking point. Then we only have to go back to the start of the amount, and walk linear by it!

Ex:

```
 list: [1,2,3,4] #3 is the breaking point

 const amount = sqrt(list.length) # which is gonna be 2

	(loop the amount until list.length) 
	# length is 4, and amount is 2, so we gonna: [1,2] and see: does 2 break the ball? = NO because 3 is the breaking point
	so we search again: [3,4] and see: does 4 breaks the ball? = YES, so now we have your new last point

	(loop linear `j = 0` until amount)
	so we search: [3,4] and see: does 3 breaks the ball? = YES, so now we have the minimum the breaking point
	return j
```