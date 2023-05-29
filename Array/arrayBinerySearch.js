let a = [1, 2, 3, 4, 5, 7, 8, 9];

let target = 9;
function binerySearch(target, a) {
    let start = 0
    let end = a.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (a[mid] == target) {
          return mid
        } 
        
        else if (a[mid]  < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}
console.log(binerySearch(target,a));