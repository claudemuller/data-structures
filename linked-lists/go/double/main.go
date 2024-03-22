// Package main demonstrates Linked Lists
// https://dxt.rs/category/programming/general/linked-lists
package main

import "fmt"

func main() {
	singlylinkedlist()
	doublylinkedlist()
	circularlinkedlist()
}

// singlylinkedlist demonstrates the usage of a singly linked list.
func singlylinkedlist() {
	type node struct {
		data string
		next *node
	}
	type singlyLinkedList struct {
		nodes []node
		lastNode *node
	}

	var sl linkedList

	sl = append(sl., node{
		data: "first",
	})

	for _, n := range sl {
		fmt.Printf("data:%s next:%x\n", n.data, n.next)
	}
}

// doublylinkedlist demonstrates the usage of a singly linked list.
func doublylinkedlist() {
	panic("unimplemented")
}

// circularlinkedlist demonstrates the usage of a singly linked list.
func circularlinkedlist() {
	panic("unimplemented")
}
