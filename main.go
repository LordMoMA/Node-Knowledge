package main

import (
	"fmt"
	"time"
)

func fibonacci(n int) int {
	if n <= 1 {
		return n
	}
	return fibonacci(n-1) + fibonacci(n-2)
}

func worker(n int, c chan int) {
	result := fibonacci(n)
	c <- result
}

func main() {
	c := make(chan int)
	defer close(c)

	timeStarted := time.Now()
	for i := 0; i < 4; i++ {
		go worker(i*10, c)
	}

	for i := 0; i < 4; i++ {
		result := <-c
		fmt.Printf("Received result from worker: %d\n", result)
	}

	timeEnded := time.Now()
	fmt.Printf("duration: %v\n", timeEnded.Sub(timeStarted))
}
