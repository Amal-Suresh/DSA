let a= [1,1,3,1,1,1,5]
let limit = a.length-1
for(let i=0 ;i<limit;i++){
   let count=0
    for(let j =0;j<limit;j++){
        if(a[i]==a[j] && i!=j){
            count++
            a[j]=-1
        }
    }
    if(count>limit/2){
        console.log(a[i] +"occures "+count +" times");
    }
}