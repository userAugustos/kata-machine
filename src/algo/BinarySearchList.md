Binary Search Tree starts with tree conditions:

 1 - Value is what we are looking for
 2 - Value is larger than mid, it means we don't need to look of for everything at it's left
 3 - Value is smaller tha mid, it means we don't need to look of for everything at it's right

	Low is inclusive, high is exclusive

this above means: `low = mid + 1` and `high = mid`. Here is why: **If what we look for, is at the right of the mid, we don't need to look at that mid, we now we don't want the mid, but if what we look is at the left of the mid, we want to GOO UNTIL WE REACH THE MID AGAIN**

So, we set that we are looking after the mid (which is gona be the new low) , or until the mid (wich is gonna be the new high)