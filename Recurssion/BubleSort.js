//bubble sort accending order
let a=[1,3,12,33,2,44,13,66,45,16]
function bubleSort(a){
    let limit =a.length
    for(let i=0;i<limit;i++){
        for(let j=0;j<limit-1-i;j++){
            if(a[j]>a[j+1]){
                let temp=a[j]
                a[j]=a[j+1]
                a[j+1]=temp
            }
        }
    }
    return a
}

console.log(bubleSort(a));

//bubble sort decending order
let b=[12,33,44,50,11,4,5,6,100,47]
function bubblesort2(b){
    let limit =b.length
    for(let i=0;i<limit;i++){
        for(let j=0;j<limit-1-i;j++){
            if(b[j]<b[j+1]){
                let temp=b[j]
                b[j]=b[j+1]
                b[j+1]=temp
            }
        }
    }
    return b
}

console.log(bubblesort2(b));