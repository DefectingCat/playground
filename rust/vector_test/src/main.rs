fn main() {
    // let v: Vec<i32> = Vec::new();
    let mut v = vec![1, 2, 3];
    v.push(4);
    v.push(5);
    v.push(6);

    let num = &v[0];

    println!("num is: {}", num);

    for i in &mut v {
        *i += 1;
        println!("all: {}", i)
    }

    #[derive(Debug)]
    enum OtherType {
        Int(i32),
        Float(f64),
        Text(String),
    }

    let vv = vec![
        OtherType::Int(42),
        OtherType::Float(3.14),
        OtherType::Text(String::from("xfy")),
    ];

    for i in &vv {
        println!("other type: {:?}", i)
    }
}
