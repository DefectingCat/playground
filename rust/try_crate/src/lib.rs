mod crate_test;

pub use crate_test::hosting;

pub fn add_again(num: i32) -> i32 {
  num + hosting::add_num(2 + 2)
}
