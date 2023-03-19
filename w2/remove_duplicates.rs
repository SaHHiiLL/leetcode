fn main() {
    let mut nums = vec![0,0,1,1,1,2,2,3,3,4];
    remove_dups(&mut nums);
    println!("{:#?}",nums);
}
use std::convert::TryInto;

pub fn remove_dups(nums: &mut Vec<i32>) -> i32 {
    
    for (i, x) in nums.into_iter().enumerate() {
        for (j, y) in nums.iter_mut().enumerate() {
            if x == y {
                nums.remove(i);
            }
        }
    }
    return nums.len().try_into().unwrap();
}
