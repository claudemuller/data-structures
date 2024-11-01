package double

import "testing"

func TestAppend(t *testing.T) {
	type want struct {
		val  string
		head string
	}
	tests := []struct {
		name      string
		emptyList bool
		value     string
		head      string
		want      want
	}{
		{
			"should append a node to the end of an empty list",
			false,
			"first",
			"first",
			want{"first", "first"},
		},
		{
			"should append a node to the end of a list",
			false,
			"first",
			"first",
			want{"first", "first"},
		},
	}

	t.Parallel()

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()

			ll, _ := genList(tt.emptyList)

			got := ll.Append(tt.value)

			// TODO: add in .prev checks
			if tt.want.val != got.Val {
				t.Errorf("want = %s, got = %s", tt.want.val, got.Val)
			}
			if tt.want.head != ll.head.Val {
				t.Errorf("want = %s, got = %s", tt.want.head, ll.head.Val)
			}
		})
	}
}

func TestInsertAt(t *testing.T) {
	type want struct {
		head    string
		val     string
		nextVal string
	}
	tests := []struct {
		name      string
		emptyList bool
		value     string
		insertAt  string
		want      want
	}{
		{
			"should insert the node passed",
			false,
			"third",
			"first",
			want{"first", "third", "second"},
		},
	}

	t.Parallel()

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()

			ll, nodes := genList(tt.emptyList)

			got := ll.InsertAt(nodes[tt.insertAt], tt.value)

			if tt.want.val != got.Val {
				t.Errorf("want = %s, got = %s", tt.want.val, got.Val)
			}
			if tt.want.nextVal != got.next.Val {
				t.Errorf("want = %s, got = %s", tt.want.nextVal, got.next.Val)
			}
			if tt.want.head != ll.head.Val {
				t.Errorf("want = %s, got = %s", tt.want.head, ll.head.Val)
			}
		})
	}
}

func TestRemove(t *testing.T) {
	type want struct {
		head        *Node
		nextVal     string
		nextNextVal string
	}
	tests := []struct {
		name      string
		emptyList bool
		remove    string
		want      want
	}{
		{
			"should do nothing when removing node from empty list",
			true,
			"third",
			want{},
		},
		{
			"should remove node from list",
			false,
			"third",
			want{&Node{Val: "first"}, "second", "fourth"},
		},
	}

	t.Parallel()

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()

			ll, nodes := genList(tt.emptyList)

			ll.Remove(nodes[tt.remove])

			if tt.want.head != nil {
				if tt.want.head.Val != ll.head.Val {
					t.Errorf("want = %s, got = %s", tt.want.head.Val, ll.head.Val)
				}
				if tt.want.nextVal != ll.head.next.Val {
					t.Errorf("want = %s, got = %s", tt.want.nextVal, ll.head.next.Val)
				}
				if tt.want.nextNextVal != ll.head.next.next.Val {
					t.Errorf("want = %s, got = %s", tt.want.nextNextVal, ll.head.next.next.Val)
				}
			}
		})
	}
}

func TestTraverse(t *testing.T) {
	type want struct {
		val      string
		head     string
		nextNode *Node
	}
	tests := []struct {
		name        string
		emptyList   bool
		predicateFn func(*Node, *Node) bool
		want        want
	}{
		{
			"should do nothing in an empty list",
			true,
			func(n, _ *Node) bool { return n.Val == "third" },
			want{},
		},
		{
			"should traverse a list to the end",
			false,
			func(_, _ *Node) bool { return false },
			want{"fourth", "first", nil},
		},
		{
			"should traverse a list and find the node requested",
			false,
			func(n, _ *Node) bool { return n.Val == "third" },
			want{"third", "first", &Node{Val: "fourth"}},
		},
	}

	t.Parallel()

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()

			ll, _ := genList(tt.emptyList)

			got := ll.Traverse(tt.predicateFn)

			if (want{}) == tt.want && ll.head == nil {
				return
			}

			if tt.want.head != ll.head.Val {
				t.Errorf("want = %s, got = %s", tt.want.head, ll.head.Val)
			}
			if tt.want.val != got.Val {
				t.Errorf("want = %s, got = %s", tt.want.val, got.Val)
			}
			if tt.want.nextNode != nil && tt.want.nextNode.Val != got.next.Val {
				t.Errorf("want = %s, got = %s", tt.want.nextNode.Val, got.next.Val)
			}
		})
	}
}

func TestTraverseBackward(t *testing.T) {
	tests := []struct {
		name        string
		emptyList   bool
		predicateFn func(*Node, *Node) bool
		want        *Node
		nextNode    *Node
	}{
		{
			"should do nothing in an empty list",
			true,
			func(n, _ *Node) bool { return n.Val == "third" },
			nil,
			nil,
		},
		{
			"should traverse a list to the beginning",
			false,
			func(_, _ *Node) bool { return false },
			&Node{Val: "first"},
			&Node{Val: "second"},
		},
		{
			"should traverse a list backward and find the node requested",
			false,
			func(n, _ *Node) bool { return n.Val == "third" },
			&Node{Val: "third"},
			&Node{Val: "fourth"},
		},
	}

	t.Parallel()

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()

			ll, _ := genList(tt.emptyList)

			got := ll.TraverseBackward(tt.predicateFn)

			if tt.want == nil && tt.want != got {
				t.Errorf("want = %s, got = %s", tt.want.Val, got.Val)
				return
			}
			if tt.want != nil && tt.want.Val != got.Val {
				t.Errorf("want = %s, got = %s", tt.want.Val, got.Val)
			}
			if tt.want != nil && tt.nextNode.Val != got.next.Val {
				t.Errorf("want = %s, got = %s", tt.want.Val, got.next.Val)
			}
		})
	}
}

func genList(empty bool) (DoublyLinkedList, map[string]*Node) {
	if empty {
		return DoublyLinkedList{}, map[string]*Node{}
	}

	node4 := Node{
		Val:  "fourth",
		next: nil,
	}
	node3 := Node{
		Val:  "third",
		next: &node4,
	}
	node2 := Node{
		Val:  "second",
		next: &node3,
	}
	node1 := Node{
		Val:  "first",
		next: &node2,
		prev: nil,
	}
	node2.prev = &node1
	node3.prev = &node2
	node4.prev = &node3
	nodes := map[string]*Node{
		"first":  &node1,
		"second": &node2,
		"third":  &node3,
		"fourth": &node4,
	}
	ll := DoublyLinkedList{
		head: &node1,
		tail: &node4,
	}

	return ll, nodes
}