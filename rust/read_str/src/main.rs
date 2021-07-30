fn main() {
    let str = String::from("This is a test.");
    println!("{}", read_word(&str))
}

fn read_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    return &s[..];
}
