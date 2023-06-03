let a=[1,90,20,2,8,5,3]
function selectionSort(a){
    let limit = a.length
    for(let i=0;i<limit-1;i++){
        let min=i
        for(let j=i+1;j<limit;j++){
            if(a[j]<a[min]){
                min =j
            }
        }
        if(min!=i){
            let temp = a[i]
            a[i] =a[min]
            a[min]=temp
        }
    }
    return a
}

console.log(selectionSort(a));