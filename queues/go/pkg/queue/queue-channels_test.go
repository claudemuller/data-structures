package queue

import (
	"testing"
)

func TestNewChanQueue(t *testing.T) {
	tests := []struct {
		name string
		size int
		err  error
	}{
		{
			"Create an empty queue of zero size",
			0,
			ErrInvalidQueueSize,
		},
		{
			"Create an empty queue of size 10",
			10,
			nil,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			_, err := NewChanQueue(tt.size)

			if tt.err != err {
				t.Errorf("want = %d, got = %d", tt.err, err)
			}
		})
	}
}

// func TestChanEnqueue(t *testing.T) {
// 	tests := []struct {
// 		name     string
// 		data     int
// 		size     int
// 		initVals []int
// 		want     []int
// 	}{
// 		{
// 			"Enqueue a value to the beginning of an empty queue",
// 			3,
// 			1,
// 			nil,
// 			[]int{3},
// 		},
// 		{
// 			"Enqueue a value to the beginning of a non-empty queue",
// 			4,
// 			5,
// 			[]int{1, 2, 3},
// 			[]int{4, 3, 2, 1},
// 		},
// 	}
//
// 	for _, tc := range tests {
// 		tt := tc
// 		t.Run(tt.name, func(t *testing.T) {
// 			q, _ := NewChanQueue(tt.size)
//
// 			if tt.initVals != nil {
// 				for _, v := range tt.initVals {
// 					q.dataChan <- v
// 				}
// 			}
//
// 			q.ChanEnqueue(tt.data)
//
// 			var i int
//
// 			for v := range q.dataChan {
// 				if tt.want[i] != v {
// 					t.Errorf("want = %d, got = %d", tt.want[i], v)
// 				}
// 				i++
// 			}
// 		})
// 	}
// }

// func TestDequeue(t *testing.T) {
// 	tests := []struct {
// 		name     string
// 		initVals []int
// 		want     int
// 		wantLen  int
// 		err      error
// 	}{
// 		{
// 			"Dequeue a value from the beginning of an empty queue",
// 			nil,
// 			-1,
// 			0,
// 			ErrQueueEmpty,
// 		},
// 		{
// 			"Dequeue a value from the beginning of a non-empty queue",
// 			[]int{1, 2, 3},
// 			3,
// 			2,
// 			nil,
// 		},
// 	}
//
// 	for _, tc := range tests {
// 		tt := tc
// 		t.Run(tt.name, func(t *testing.T) {
// 			q := New(tt.initVals...)
//
// 			got, err := q.Dequeue()
//
// 			if tt.err != err {
// 				t.Errorf("want = %d, got = %d", tt.err, err)
// 				return
// 			}
// 			if tt.want != got {
// 				t.Errorf("want = %d, got = %d", tt.want, got)
// 			}
// 			if tt.wantLen != q.Len() {
// 				t.Errorf("want = %d, got = %d", tt.wantLen, q.Len())
// 			}
// 		})
// 	}
// }
