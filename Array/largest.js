// 3rd largest
let a=[10,12,3,4,5,6,7,8,9]
function largerst(a){
   let  large = -Infinity;
   let large2 = -Infinity
   let large3 = -Infinity
   for(let i=0;i<a.length;i++){
    if(large<a[i]){
        large2 = large
        large=a[i]
    }else if(a[i]>large2 && large2<large){
        large3=large2
        large2=a[i]
      
    }else if(a[i]>large3 && large3<large2){    
        large3=a[i]     
    }   
   }
return large3
}
console.log(largerst(a));
