let a=[1,2,3,4,5,6,7,8,9]
let target =4
function binerySearch(a,start,end,target){
    let mid =Math.floor((start+end)/2)
    if(a[mid]==target){
        return mid
    }else if(a[mid]>target){
      return  binerySearch(a,start,mid-1,target)  
    }else{
      return  binerySearch(a,mid+1,end,target)
    }
}

console.log(binerySearch(a,0,a.length-1,target));