function checkStraightLing(co: number[][]): boolean {
    //
    // y = mx + c
    // y - mx = c

    if (co.length === 2) return true;

    let m = calculateM(co[0][1], co[1][1]) // Math.abs(y1 - y2)

    console.log("m", m)

    for (let i = 0; i < co.length; i++) {

        for (let j = i + 1; j < co.length; j++) {



        }

    }

    return true;
}

function calculateM(y1: number, y2: number): number {

    console.log("y1", y1)
    console.log("y2", y2)

    return Math.abs(y1 - y2)
}

function calculateC(y: number, x: number, m: number): number {
    return Math.abs(y - (m * x))
}

let co = [[0, 0], [0, 1], [0, -1]]
let co1 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
let co2 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]


console.log("True - ", checkStraightLing(co))
console.log("False - ", checkStraightLing(co1))
console.log("True - ", checkStraightLing(co2))
