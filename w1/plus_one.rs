fn main() {
   plus_one(vec![7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]);
}

fn plus_one(digist: Vec<i32>) -> Vec<i32>{
    let mut backup: Vec<i32> = Vec::from(digist.clone());

    let iter = backup.iter_mut().rev().enumerate();
    for (index, data) in iter {
        match data {
            0..=8 => { 
                *data = *data + 1;
                break;
            }, 
            // [9, 9]
            // [1, 2, 3]
            // [3, 2, 1]
            // [1, 9, 9]
            // [9, 9, 1]
            9 => {
                if index == 0 {
                    //need to handle the case of new array
                    unimplemented!()
                }
                *data = 0;
                iter.nth(index + 1) = iter.nth(index + 1);
            }, 
            _ => panic!("Value should not be anything but 0..=9"),
        }
    }
    digist
}
