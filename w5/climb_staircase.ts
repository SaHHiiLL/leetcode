function climbStairs(n: number) : number {
    // if (n === 1) return 1
    // if (n === 2) return 2
    //
    // return climbStairs(n - 1) + climbStairs(n - 2)

    return fb(n, new Map())
}

function fb (n: number, m: any): number {
    if (n === 1) return 1
    if (n === 2) return 2

    if (m.has(n)) {
        return m.get(n);
    }

    let r = fb (n - 1, m);
    let l = fb(n - 2, m);

    let res = r + l
    m.set(n, res)

    return res;
}

let n = [2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < n.length; i++) {
    console.log(climbStairs(n[i]))
}
