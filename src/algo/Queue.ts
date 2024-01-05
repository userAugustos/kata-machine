 interface Node<T> {
    value: T,
    next?: Node<T>
 }

export default class Queue<T> {
    public length: number;
    private tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0
    }

    enqueue(item: T): void {
        const node = { value: item} as Node<T>

        this.length++;

        if(!this.tail) {
            this.tail = this.head = node
            return;
        };

        this.tail.next = node
        this.tail = node

        console.debug(this.tail)
    }

    deque(): T | undefined {
        if(!this.head) return undefined;

        this.length--

        const head = this.head

        this.head = this.head.next

        // garbage collector would clean it up, but to keep in mind, that in some languages we need to clean not used variables
        head.next = undefined

        // if we deque until empty the list, we want to remove the tail reference
        if(this.length === 0) {
            this.tail = undefined
        }

        return head.value
    }
    // peek just show if we have something in the head, if we have, returns it
    peek(): T | undefined {
        return this.head?.value
    }
}
