package main

import "fmt"

func main() {
	nums := []int{1, 2, 3, 4}
	for i, v := range nums {
		fmt.Printf("索引：%d 值：%d \n", i, v)
	}
}
