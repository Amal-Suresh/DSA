let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
function product(a,target) {
    let sum = 1;
    let start = 0
    let end = a.length - 1
    while (start <= end) {
        let mid = Math.floor((start+end) / 2)
        if (a[mid] == target) {
            let c = 0
            while (c <= mid) {
                sum = sum * a[c]
                c++
            }
            return sum;

        }else if(a[mid]>target){
            end = mid-1
        }else{
            start = mid+1
        }
    }


}

console.log(product(a,4))
