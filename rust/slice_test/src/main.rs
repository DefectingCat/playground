fn main() {
    let s = "Hello, world!";

    let ss = str_index(s);

    println!("{}", ss)
}

fn str_index(str: &str) -> &str {
    let bytes = str.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &str[..i];
        }
    }
    &str[..]
}
