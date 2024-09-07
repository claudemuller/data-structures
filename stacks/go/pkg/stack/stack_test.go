package stack_test

import (
	"testing"

	"github.com/claudemuller/data-structures/stacks/pkg/stack"
)

func TestNew(t *testing.T) {
	tests := []struct {
		name      string
		initStack []int
		want      int
	}{
		{
			"Create an empty stack",
			nil,
			0,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			s := stack.New(tt.initStack...)

			got := s.Len()

			if tt.want != got {
				t.Errorf("want = %d, got = %d", tt.want, got)
			}
		})
	}
}

func TestPush(t *testing.T) {
	tests := []struct {
		name      string
		data      int
		initStack []int
		want      int
	}{
		{
			"Append a value to the end of an empty stack",
			3,
			nil,
			1,
		},
		{
			"Append a value to the end of a non-empty stack",
			3,
			[]int{1, 2, 3},
			4,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			s := stack.New(tt.initStack...)

			s.Push(tt.data)
			got := s.Len()

			if tt.want != got {
				t.Errorf("want = %d, got = %d", tt.want, got)
			}
		})
	}
}

func TestPop(t *testing.T) {
	tests := []struct {
		name      string
		initStack []int
		want      int
		wantLen   int
		err       error
	}{
		{
			"Pop a value from the end of an empty stack",
			nil,
			0,
			0,
			stack.ErrStackEmpty,
		},
		{
			"Pop a value from the end of a non-empty stack",
			[]int{1, 2, 3},
			3,
			2,
			nil,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			s := stack.New(tt.initStack...)

			got, err := s.Pop()
			gotLen := s.Len()

			if tt.err != err {
				t.Errorf("want = %d, got = %d", tt.err, err)
			}
			if tt.want != got {
				t.Errorf("want = %d, got = %d", tt.want, got)
			}
			if tt.wantLen != gotLen {
				t.Errorf("want = %d, got = %d", tt.wantLen, gotLen)
			}
		})
	}
}
