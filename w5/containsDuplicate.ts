function containsDuplicates(nums: number[]): boolean {
    let s = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) {
            return true;
        }
        s.add(nums[i])
    }
    return false;
}

let t = [1,2,3,1]
console.log(containsDuplicates(t));
