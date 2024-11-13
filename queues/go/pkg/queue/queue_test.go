package queue

import "testing"

func TestNew(t *testing.T) {
	tests := []struct {
		name     string
		initVals []int
		wantVals []int
		want     int
	}{
		{
			"Create an empty queue",
			nil,
			nil,
			0,
		},
		{
			"Create a queue with an initial set of ints",
			[]int{1, 2, 3, 4},
			[]int{4, 3, 2, 1},
			4,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			q := New(tt.initVals...)

			got := q.Len()

			if tt.initVals != nil {
				for i, v := range q.data {
					if tt.wantVals[i] != v {
						t.Errorf("want = %d, got = %d", tt.wantVals[i], v)
					}
				}
			}

			if tt.want != got {
				t.Errorf("want = %d, got = %d", tt.want, got)
			}
		})
	}
}

func TestEnqueue(t *testing.T) {
	tests := []struct {
		name     string
		data     int
		initVals []int
		want     []int
	}{
		{
			"Enqueue a value to the beginning of an empty queue",
			3,
			nil,
			[]int{3},
		},
		{
			"Enqueue a value to the beginning of a non-empty queue",
			4,
			[]int{1, 2, 3},
			[]int{4, 3, 2, 1},
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			q := New(tt.initVals...)

			q.Enqueue(tt.data)

			for i, v := range q.data {
				if tt.want[i] != v {
					t.Errorf("want = %d, got = %d", tt.want[i], v)
				}
			}
		})
	}
}

func TestDequeue(t *testing.T) {
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
			q := New(tt.initVals...)

			got, err := q.Dequeue()

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
