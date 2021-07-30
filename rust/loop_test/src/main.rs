fn main() {
    let mut a = 0;
    let mut b = 1;
    let mut c;

    let mut n = 0;
    while n != 10 {
        c = a;
        a = b;
        b = a + c;
        println!("{}!", b);
        n += 1;
    }
}
