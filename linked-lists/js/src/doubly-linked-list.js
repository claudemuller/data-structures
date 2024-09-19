class Node {
    next = null;
    prev = null;

    constructor(val) {
        this.value = val;
    }
}

export class DoublyLinkedList {
    head = null;
    tail = null;

    constructor() {
    }

    append(val) {
        const newNode = new Node(val);

        if (!this.tail) {
            this.tail = newNode;
        }

        if (!this.head) {
            this.head = newNode;
            return newNode;
        }

        const lastNode = this.tail;
        this.tail = newNode;
        this.tail.prev = lastNode;
        lastNode.next = this.tail;

        return newNode;
    }

    insertAt(node, val) {
        const newNode = new Node(val);
        newNode.next = node.next;
        node.next = newNode;

        return newNode;
    }

    traverse(fn) {
        let current = this.head;
        let last = null;

        while (current) {
            const result = fn(current, last);
            last = current;
            current = current.next;
            if (result) break;
        }

        return last;
    }

    traverseBackward(fn) {
        let current = this.tail;
        let first = null;

        while (current) {
            const result = fn(current, first);
            first = current;
            current = current.prev;
            if (result) break;
        }

        return first;
    }

    remove(node) {
        if (!this.head) return;

        // If the value found is the first in the list
        if (this.head.value === node.value) {
            this.head = this.head.next;
            return;
        }

        // If the value found is the last in the list
        if (this.tail.value === node.value) {
            this.tail = this.tail.prev;
            return;
        }

        this.traverse((cur, last) => {
            if (cur.value === node.value) {
                last.next = cur.next
                cur.next.prev = last
            }
        });
    }
}
