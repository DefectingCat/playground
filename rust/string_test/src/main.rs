fn main() {
    let mut s = String::new();

    s = "xfy".to_string();

    let mut str = String::from("xfy");

    println!("{}", s);

    str.push_str(" bar");
    println!("{}", str);

    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");

    let s4 = format!("{}-{}-{}", s1, s2, s3);
    println!("{}", s4);

    for char in s4.chars() {
        println!("{}", char)
    }
}
