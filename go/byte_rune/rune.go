package main

import "fmt"

func main() {
	// rune 类型
	str := "小肥羊"
	// 切片为 rune 类型 (int 32)
	arr := []rune(str)
	arr[0] = '大'
	fmt.Println(string(arr))
}
