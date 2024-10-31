// Package double demonstrates Doubly Linked Lists
// https://dxt.rs/category/programming/general/linked-lists#doubly-linked-lists
package double

type Node struct {
	Val  string
	next *Node
	prev *Node
}

type DoublyLinkedList struct {
	head *Node
	tail *Node
}

type predicatefn func(*Node, *Node) bool

func (dl *DoublyLinkedList) Traverse(fn predicatefn) *Node {
	curr := dl.head
	var last *Node

	for curr != nil {
		res := fn(curr, last)
		last = curr
		curr = curr.next
		if res {
			break
		}
	}

	return last
}

func (dl *DoublyLinkedList) TraverseBackward(fn predicatefn) *Node {
	curr := dl.tail
	var first *Node

	for curr != nil {
		res := fn(curr, first)
		first = curr
		curr = curr.prev
		if res {
			break
		}
	}

	return first
}

func (dl *DoublyLinkedList) InsertAt(n *Node, v string) *Node {
	newNode := Node{
		Val:  v,
		next: n.next,
		prev: n,
	}
	n.next = &newNode

	if n == dl.tail {
		dl.tail = &newNode
	}

	return &newNode
}

func (dl *DoublyLinkedList) Append(v string) *Node {
	newNode := Node{
		Val: v,
	}

	if dl.head == nil {
		dl.head = &newNode
		return &newNode
	}

	lastNode := dl.Traverse(func(_, _ *Node) bool { return false })
	lastNode.next = &newNode
	newNode.prev = lastNode
	dl.tail = &newNode

	return &newNode
}

func (dl *DoublyLinkedList) Remove(n *Node) {
	if dl.head == nil {
		return
	}

	if dl.head.Val == n.Val {
		dl.head = dl.head.next
		return
	}

	dl.Traverse(func(nn, last *Node) bool {
		if nn.Val == n.Val {
			last.next = n.next

			if n == dl.tail {
				dl.tail = last
			}

			return true
		}
		return false
	})
}
