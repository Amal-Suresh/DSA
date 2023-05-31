let a=[1,2,3,4,5,6,7,8,9]
function deleteMiddle(a){
    let limit =a.length-1
    let mid= Math.floor(limit/2)
    
    for(i=mid;i<limit;i++){
        a[i]=a[i+1]
    }
    limit --
    for(i=0;i<limit;i++){
        console.log(a[i]);
    }
}
deleteMiddle(a)




