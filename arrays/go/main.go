package main

import "fmt"

func main() {
	// Declare and initialise a 10 elment array
	arr1 := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	// Access array elements by iterating over the array
	for i, v := range arr1 {
		fmt.Printf("idx:%d val:%d\n", i, v)
	}

	fmt.Println("---------------------------------------------------------------------------------")

	// Declare a 10 elment array
	var arr2 [10]int

	// Fill the array with values
	for i := 0; i < 10; i++ {
		arr2[i] = i + 1
	}
	fmt.Printf("%#v\n", arr2)
}
