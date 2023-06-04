let a=[1,100,300,150,20,10,90,4,2]
let lb=0
let ub=a.length-1

mergeSort(a,lb,ub)

function mergeSort(a,lb,ub){
    if(lb<ub){
    let mid =Math.floor((lb+ub)/2)
    mergeSort(a,lb,mid)
    mergeSort(a,mid+1,ub)
    merge(a,lb,ub,mid)
    }
    
}

function merge(a,lb,ub,mid){
    let i=lb
    let j=mid+1
    let k=lb
    let b=[]
    while(i<=mid && j<=ub){
        if(a[i]<=a[j]){
            b[k]=a[i]
            i++
        }else{
            b[k]=a[j]
            j++
        }
        k++
    }
        while(i<=mid){
            b[k]=a[i]
            i++
            k++
        }
        while(j<=ub){
            b[k]=a[j]
            j++
            k++
        }
        for(let t =lb;t<=ub;t++){
            a[t]=b[t]
        }

    }


console.log(a);



