fn main() {
    let str = String::from("xfy");
    println!("{}", cal_len(&str));
}

fn cal_len(s: &String) -> usize {
    s.len()
}
