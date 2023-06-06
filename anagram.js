
let a="ANAGRAM"
let b="NAGARAM"
let limit1=a.length
let limit2=b.length
console.log(limit2);
let f=[]
let s=[]
let count=0
for(let i=0;i<limit2;i++){
    for(let j=0;j<limit1;j++){
        if(b[i]==a[j]){
            count++
            for(let k=j;k<limit1;k++){
                a[k]=a[k+1]
            }
            limit1--
            let p=[]
            for(let w=0;w<limit1;w++){
              p[w]=a[w]  
            }
            console.log(p);
        }
       
    }
}
console.log(count);
if(count==limit2-1){
    console.log("true");
}else{
    console.log("false");
}
