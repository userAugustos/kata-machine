# Linked Lists

**Ain't gonna write about it, because i already write and study it, other 2 times.**


**Note 1: Keep in mind this is the linkedlist like:**

```ts

Node<T> = {
  value: T,
  next?: Node<T>,
  prev?: Node<T>
}

```

**Note 2: Every directly operation (such as insertion, deletion or swap) in the linked list is constant: `O(1)`**

Here i'm gonna write about the time/space complexity of linked lists:

- prepend / append
  
    Constant, because u have the head and tail, and the operation it self is also constant
- Insertion in the middle
  
    Same thing about deletion, the operation it self is constant, but the traversal time can be costly.
- Deletion from ends
  
    Most of the time, gonna be constant, we already has access to both head and tail, but sometimes, for some reason in the way u build or search in your list, can be costly
- Deletion in the middle
  
    If u remember the note 2, every operation is constant, but the traversal is not. So the Deletion cost is based in the traversal to the middle, not the deltion it self, because is constant (and in big O, if u have a log time and constant time, disconsider the constant)

- Get head / tail
    
    Usually we have definition to the head and the tail in the linked list, so this should be constant time `O(1)`, since head is first element, and tail last element: `-1` array like

- Get in general
    
      Get in linked lists has a problem
    
    We can't just go the index X and get his value, every time, we need to loop the lists, since the linked lists depends on `prev` and `next` we literraly have to go walking each node of the list, until we find the value we want.



