function addDigit(num: number): number {

    if (num < 10) return num;

    let res = 0;

    let s = num.toString();

    let nums = s.split("");

    for (let i = 0; i < nums.length; i++) {
        res = res + parseInt(nums[i])

        if (res > 9) {
            res = addDigit(res)
        }
    }

    return res
}

console.log(addDigit(1))
console.log(addDigit(109))
console.log(addDigit(38))
console.log(addDigit(0))
