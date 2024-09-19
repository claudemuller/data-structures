import { SinglyLinkedList } from "./singly-linked-list.js";

class Node {
	next = null;

	constructor(val) {
		this.value = val;
	}
}

/* The CircularLinkedList is the same as the SinglyLinkedList except that it has no end node */
export class CircularLinkedList extends SinglyLinkedList {
	current = null;

	constructor() {
		super();
	}

	append(val) {
		const newNode = new Node(val);

		if (!this.current) {
			this.current = newNode;
			this.current.next = this.current
			return newNode;
		}

		newNode.next = this.current.next
		this.current.next = newNode;
		this.current = newNode;

		return newNode;
	}

	insertAt(node, val) {
		const newNode = new Node(val);
		newNode.next = node.next;
		node.next = newNode;
		this.current = newNode;

		return newNode;
	}

	traverse(fn) {
		let current = this.current;
		let last = null;

		while (current) {
			const result = fn(current, last);
			last = current;
			current = current.next;

			if (result) break;
			if (current === this.current) return null;
		}

		return last;
	}

	remove(node) {
		if (!this.current) return;

		if (this.current.value === node.value) {
			this.current = this.current.next;
			return;
		}

		this.traverse((n, last) => {
			if (n.value === node.value) {
				last.next = n.next;
			}
		});
	}
}
