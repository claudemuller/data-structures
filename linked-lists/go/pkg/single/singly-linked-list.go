// Package single demonstrates Singly Linked Lists
// https://dxt.rs/category/programming/general/linked-lists#singly-linked-lists
package single

type Node struct {
	Val  string
	next *Node
}

type SinglyLinkedList struct {
	head *Node
}

type predicatefn func(*Node, *Node) bool

func (sl *SinglyLinkedList) Traverse(fn predicatefn) *Node {
	curr := sl.head
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

func (sl *SinglyLinkedList) InsertAt(n *Node, v string) *Node {
	newNode := Node{
		Val:  v,
		next: n.next,
	}
	n.next = &newNode

	return &newNode
}

func (sl *SinglyLinkedList) Append(v string) *Node {
	newNode := Node{
		Val: v,
	}

	if sl.head == nil {
		sl.head = &newNode
		return &newNode
	}

	lastNode := sl.Traverse(func(_, _ *Node) bool { return false })
	lastNode.next = &newNode

	return &newNode
}

func (sl *SinglyLinkedList) Remove(n *Node) {
	if sl.head == nil {
		return
	}

	if sl.head.Val == n.Val {
		sl.head = sl.head.next
		return
	}

	sl.Traverse(func(nn, last *Node) bool {
		if nn.Val == n.Val {
			last.next = n.next
			return true
		}
		return false
	})
}
