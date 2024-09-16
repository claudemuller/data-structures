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

    traverse(node) {
        const found = this.find(node);
        if (found) return found;
        return this.last;
    }

    find(node) {
        let current = this.head;
        let last = null;

        while (current) {
            if (current.value === node.value) return current;
            last = current;
            current = current.next;
        }

        return null;
    }

    traverseBackward(node) {
        let current = this.tail;
        let first = null;

        while (current) {
            if (current.value === node.value) return current;
            first = current;
            current = current.prev;
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

        const found = this.find(node);
        if (found) {
            found.prev.next = found.next;
            found.next.prev = found.prev;
        }
    }
}
