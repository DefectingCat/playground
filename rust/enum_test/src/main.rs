enum IpAddrKind {
    V4,
    V6,
}

struct MyAdd {
    kind: IpAddrKind,
    address: String,
}

fn main() {
    let eht0 = MyAdd {
        kind: IpAddrKind::V4,
        address: String::from("192.168.0.1"),
    };

    let loopback = MyAdd {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };
}

fn run_test(ip_add: IpAddrKind) {}
