fn main() {
    let mut s1 = String::from("xfy");
    try_do_it(&mut s1);

    println!("{}", s1)
}

fn try_do_it(s: &mut String) {
    s.push_str(" test");
    println!("{}", *s)
}
