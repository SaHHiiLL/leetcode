function canMakeArithmeticProgression(arr: number[]): boolean {
    bubble_sort(arr)

    let initial_count: number | undefined = undefined; 

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i])
        if (arr[i + 1] === undefined) {
            break;
        }

        let diff = Math.abs(arr[i] - arr[i + 1])
        if (initial_count === undefined) {
            initial_count = diff
        }
        if (initial_count !== diff) {
            return false;
        }
    } 
    return true;
}

function bubble_sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swap(arr,i, j)
            }
        }
    }
}

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let t1 = [3,5,1]
let t2 = [1,2,4]
let t3 = [0,0,1]

console.log("True - " , canMakeArithmeticProgression(t1))
console.log("false - " , canMakeArithmeticProgression(t2))
console.log("false - " , canMakeArithmeticProgression(t3))
