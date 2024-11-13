package queue

import (
	"testing"
)

func TestLLEnqueue(t *testing.T) {
	tests := []struct {
		name     string
		initVals []int
		data     int
		want     []int
	}{
		{
			"Enqueue a value to the beginning of an empty queue",
			nil,
			3,
			[]int{3},
		},
		{
			"Enqueue a value to the beginning of a non-empty queue",
			[]int{1, 2, 3},
			4,
			[]int{4, 3, 2, 1},
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			q := NewLLQueue()

			if tt.initVals != nil {
				for _, v := range tt.initVals {
					q.PushFront(v)
				}
			}

			q.LLEnqueue(tt.data)

			e := q.Front()
			var i int

			for e != nil {
				if tt.want[i] != e.Value {
					t.Errorf("want = %d, got = %d", tt.want[i], e.Value)
				}
				i++
				e = e.Next()
			}
		})
	}
}

func TestLLDequeue(t *testing.T) {
	tests := []struct {
		name     string
		initVals []int
		want     int
		wantLen  int
		err      error
	}{
		{
			"Dequeue a value from the beginning of an empty queue",
			nil,
			-1,
			0,
			ErrQueueEmpty,
		},
		{
			"Dequeue a value from the beginning of a non-empty queue",
			[]int{1, 2, 3},
			3,
			2,
			nil,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			q := NewLLQueue()

			if tt.initVals != nil {
				for _, v := range tt.initVals {
					q.PushFront(v)
				}
			}

			got, err := q.LLDequeue()

			if tt.err != err {
				t.Errorf("want = %d, got = %d", tt.err, err)
				return
			}
			if tt.want != got {
				t.Errorf("want = %d, got = %d", tt.want, got)
			}
			if tt.wantLen != q.Len() {
				t.Errorf("want = %d, got = %d", tt.wantLen, q.Len())
			}
		})
	}
}
