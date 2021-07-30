fn main() {
    let str = String::from("xfy"); // 堆内存离开作用域后会被释放 move
    take_ownship(str);

    let x = 42; // 栈内存离开作用域并返回不会被释放
    let y = make_copy(x);
    println!("x: {}, y: {}", x, y)
}

fn take_ownship(str: String) {
    println!("{}", str);
}

fn make_copy(num: i32) -> i32 {
    let y = num;
    return y;
}
