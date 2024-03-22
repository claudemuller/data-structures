class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new Node(val);
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
            return newNode;
        }

        const lastNode = this.tail;
        lastNode.next = newNode;

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

        if (this.head.value === node.value) {
            this.head = this.head.next;
            return;
        }

        if (this.tail.value === node.value) {
            this.tail = this.tail.prev;
            return;
        }

        this.traverse((n, last) => {
            if (n.value === node.value) {
                last.next = n.next;
            }
        });
    }
}
