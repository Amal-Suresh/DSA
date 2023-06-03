let a=[1,10,3,7,8,30,50,9]
function insrtionSort(a){
    let limit=a.length
    for(let i=1;i<limit;i++){
        let temp=a[i]
        j=i-1
        while(j>=0 && a[j]>temp){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=temp
    }
    return a
}

console.log(insertionSort(a));