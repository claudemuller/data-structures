// Package main demonstrates Arrays
// https://dxt.rs/category/programming/general/data-structures#arrays
package main

import "fmt"

func main() {
	oneDimArray()
	twoDimArray()
}

// oneDimArray demonstrates the usage of a one dimensional array.
func oneDimArray() {
	fmt.Printf("-------------------------------------------------------------------------------\n")
	fmt.Printf("- One Dimensional Arrays                                                      -\n\n")

	// Declare and initialise a 10 elment array
	arr1 := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	// Get the length of the array
	fmt.Printf("len:%d\n", len(arr1))

	// Access array elements by iterating over the array
	for i, v := range arr1 {
		fmt.Printf("idx:%d val:%d\n", i, v)
	}

	// Declare a 10 elment array
	var arr2 [10]int

	// Fill the array with values
	for i := 0; i < 10; i++ {
		arr2[i] = i + 1
	}
	fmt.Printf("%#v\n", arr2)
}

// twoDimArray demonstrates the usage of a two dimensional array.
func twoDimArray() {
	fmt.Printf("\n-------------------------------------------------------------------------------\n")
	fmt.Printf("- Two Dimensional Arrays                                                      -\n\n")

	// Declare and initialise a 10 elment, 2 dimensional array
	arr1 := [5][5]int{
		{1, 2, 3, 4, 5},
		{6, 7, 8, 9, 10},
	}

	// Access array elements by iterating over the array
	for r := range arr1 {
		for c, v := range arr1 {
			fmt.Printf("row:%d col:%d val:%d\n", r, c, v)
		}
	}

	// Declare a 10 elment array
	var arr2 [5][5]int

	// Fill the array with values
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			arr2[i][j] = i + 1
		}
	}
	fmt.Printf("%#v\n", arr2)
}
