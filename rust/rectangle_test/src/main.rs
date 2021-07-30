// struct Rectangle {
//     width: i32,
//     height: i32,
// }

// fn main() {
//     let rect1 = Rectangle {
//         width: 42,
//         height: 42,
//     };

//     println!("Area is: {}", area(&rect1))
// }

// fn area(rect: &Rectangle) -> i32 {
//     rect.height * rect.width
// }

struct Rectangle {
    width: i32,
    height: i32,
}

impl Rectangle {
    fn area(&self) -> i32 {
        self.width * self.height
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 42,
        height: 42,
    };
    let rect2 = Rectangle {
        width: 62,
        height: 62,
    };

    println!("Area is: {}", rect1.area());

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect2 hold rect1? {}", rect2.can_hold(&rect1))
}
