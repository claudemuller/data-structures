package queue

import "errors"

var ErrInvalidQueueSize = errors.New("invalid queue size")

type ChanQueue struct {
	dataChan chan int
}

func NewChanQueue(size int) (ChanQueue, error) {
	if size == 0 {
		return ChanQueue{}, ErrInvalidQueueSize
	}
	q := ChanQueue{
		dataChan: make(chan int, size),
	}

	return q, nil
}

func (q *ChanQueue) ChanEnqueue(v int) {
	q.dataChan <- v
}

func (q *ChanQueue) ChanDequeue() int {
	return <-q.dataChan
}
