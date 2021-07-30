fn main() {
    struct User {
        username: String,
        email: String,
        sign_in_count: u64,
        active: bool,
    }

    let user1 = User {
        username: String::from("xfy"),
        email: String::from("i@rua.plus"),
        active: true,
        sign_in_count: 1,
    };

    println!("User1: {}", user1.username);

    let user2 = User {
        username: String::from("dfy"),
        email: String::from("i@rua.plus"),
        ..user1
    };

    println!("User2: {}", user2.username)
}
