// Package single demonstrates Singly Linked Lists
// https://dxt.rs/category/programming/general/linked-lists#singly-linked-lists
package single

type node struct {
	val  string
	next *node
}

type singlyLinkedList struct {
	head *node
}

type predicatefn func(*node, *node) bool

func (sl *singlyLinkedList) traverse(fn predicatefn) *node {
	curr := sl.head
	var last *node

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

func (sl *singlyLinkedList) insertAt(n node, v string) *node {
	newNode := node{
		val:  v,
		next: n.next,
	}
	n.next = &newNode

	return &newNode
}

func (sl *singlyLinkedList) append(v string) *node {
	newNode := node{
		val: v,
	}

	if sl.head == nil {
		sl.head = &newNode
		return &newNode
	}

	lastNode := sl.traverse(func(_, _ *node) bool { return false })
	lastNode.next = &newNode

	return &newNode
}

func (sl *singlyLinkedList) remove(n node) {
	if sl.head.val == n.val {
		sl.head = sl.head.next
		return
	}

	sl.traverse(func(nn, last *node) bool {
		if nn.val == n.val {
			last.next = n.next
			return true
		}
		return false
	})
}
