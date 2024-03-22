class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            return newNode;
        }

        const lastNode = this.traverse(_ => false);
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

    remove(node) {
        if (!this.head) return;

        if (this.head.value === node.value) {
            this.head = this.head.next;
            return;
        }

        this.traverse((n, last) => {
            if (n.value === node.value) {
                last.next = n.next;
            }
        });
    }
}
