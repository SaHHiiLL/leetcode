function checkStraightLing(co: number[][]): boolean {

    let sum = Math.abs(co[0][0] - co[0][1]);

    for (let i = 1; i < co.length; i++) {
        let curr = Math.abs(co[i][0] - co[i][1])

        if (curr !== sum) {
            return false;
        }
    }

    return true;
}

let co = [[0,0],[0,1],[0,-1]]
console.log(checkStraightLing(co))
