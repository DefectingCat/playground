package main

import "fmt"

const (
	a1 = iota
	a2
	a3
)

func main() {
	fmt.Println("a1:", a1)
	fmt.Println("a2:", a2)
	fmt.Println("a3:", a3)
}
