//---------------------------reverse a string
// let a = "HELLO"
// function reverseString(a) {
//     let len = a.length
//     let newString = ""
//     for (i = a.length - 1; i >= 0; i--){
//         newString += a[i]
//     }
//     return newString
// }
// console.log(reverseString(a));



let s = "AMAL"
function reverseSt (s){
 let m =s.split("")
    let p =m.length-1
   let i=0
   while(i<=p/2){
    let temp =m[i];
    m[i]=m[p-i]
    m[p-i]= temp 
    i++
   }
  return m.join("")
}
console.log(reverseSt(s));

//---------------------------interchange last element and first element
// let b= "WELCOME"
// let l = b.length
// let k =b.slice(1,l-1)
// let result = b[l-1]+k+b[0]
// console.log(result);