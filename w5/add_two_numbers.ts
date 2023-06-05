function removeDuplicates(nums: (number | undefined)[]): number {
    let s = new Set<number | undefined>();
    let counter = 0;

    for (let i = 0; i < nums.length; i++ ) {
        console.log(nums);

        if (nums[i] === undefined) {
            break;
        }

        if (s.has(nums[i])) {
            nums.splice(i, 1)
            nums.push(undefined)
            i--;
            continue;
        }

        s.add(nums[i]);
        counter++;
    }
    console.log(nums)
    return counter;
}


let input = [0,0,1,1,1,2,2,3,3,4];
let expected = [0,1,2,3,4];


let k = removeDuplicates(input)

if (k !== expected.length) {
    console.log(k, expected.length)
    console.log("You suck");
}

console.log("nums = ", input)


for (let i = 0; i < k; i++) {
    if (input[i] !== expected[i]) {
        console.log("LMAO")
    }
}


