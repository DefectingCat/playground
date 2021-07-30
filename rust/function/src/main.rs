fn main() {
    println!("Hello, world!");
    let test = add(40, 2);
    println!("test is: {}", test);

    let test2 = {
        let x = 3;
        x + 1
    };
    println!("test2 is: {}", test2)
}

fn add(a: i32, b: i32) -> i32 {
    let sum = a + b;
    println!("The sum is: {}", sum);
    return sum;
}
