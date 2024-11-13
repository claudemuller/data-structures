package queue

import "container/list"

type LLQueue struct {
	*list.List
}

func NewLLQueue() LLQueue {
	return LLQueue{
		list.New(),
	}
}

func (q *LLQueue) LLEnqueue(v int) {
	q.PushFront(v)
}

func (q *LLQueue) LLDequeue() (int, error) {
	if q.Len() < 1 {
		return -1, ErrQueueEmpty
	}

	e := q.Front()
	v := e.Value
	q.Remove(e)

	return v.(int), nil
}
