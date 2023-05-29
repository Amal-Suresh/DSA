//linear search
let a=[1,2,3,4,5,6,7,8,9]
let target = 1;
function linearSearch (a,target){
   for(let i=0;i<a.length;i++){
       if(a[i]==target){
           return i
       }
   }
}
console.log(linearSearch (a,target))