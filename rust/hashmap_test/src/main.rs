use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert(String::from("xfy"), 42);
    map.insert(String::from("dft"), 420);

    // println!("{:?}", map.get("xfy"));

    for (key, value) in &map {
        println!("key: {}, value: {}", key, value);
    }
}
