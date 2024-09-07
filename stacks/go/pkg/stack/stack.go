package stack

import "errors"

var ErrStackEmpty = errors.New("stack is empty")

// Stack is the data structure implementation.
type Stack struct {
	data []int
}

// New returns a new stack with the option of filling it with initialisation values.
func New(initVals ...int) Stack {
	return Stack{
		data: initVals,
	}
}

// Push appends a value to the end of the stack.
func (s *Stack) Push(v int) {
	s.data = append(s.data, v)
}

// Pop removes and returns the last value on the stack if there is and an error if not.
func (s *Stack) Pop() (int, error) {
	if len(s.data) == 0 {
		return 0, ErrStackEmpty
	}

	v := s.data[len(s.data)-1]
	s.data = s.data[:len(s.data)-1]

	return v, nil
}

// Len returns the number of items on the stack.
func (s *Stack) Len() int {
	return len(s.data)
}

// Peek returns the value at the top of the stack without removing it from the stack.
func (s *Stack) Peek() (int, error) {
	if len(s.data) == 0 {
		return 0, ErrStackEmpty
	}

	return s.data[len(s.data)-1], nil
}
