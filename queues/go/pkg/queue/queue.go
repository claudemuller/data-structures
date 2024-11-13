package queue

import "errors"

var ErrQueueEmpty = errors.New("queue is empty")

// Queue is the data structure implementation.
type Queue struct {
	data []int
}

// New returns a new queue with the option of filling it with initialisation values.
func New(intVals ...int) Queue {
	ilen := len(intVals)
	d := make([]int, ilen)

	for i, v := range intVals {
		d[ilen-1-i] = v
	}

	return Queue{
		data: d,
	}
}

// Enqueue prepends a value to the beginning of the queue.
func (q *Queue) Enqueue(v int) {
	q.data = append([]int{v}, q.data...)
}

// Dequeue removes and returns the last value on the queue if there is and an error if not.
func (q *Queue) Dequeue() (int, error) {
	if len(q.data) < 1 {
		return -1, ErrQueueEmpty
	}

	v := q.data[0]
	q.data = q.data[1:]

	return v, nil
}

// Len returns the number of items on the queue.
func (q *Queue) Len() int {
	return len(q.data)
}
