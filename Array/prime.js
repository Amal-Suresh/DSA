let a=[1,2,3,4,5,6,7,8]
function findPrime (a){
    let limit= a.length-1

    for(i=0;i<limit;i++){
       let flag=0
       for(j=2;j<a[i];j++){
        if(a[i]%j==0){
            flag++
        }
       }
      if(flag==0){
        console.log(a[i]);
      }
    }
}

findPrime(a)