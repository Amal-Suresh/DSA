// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }

// // // class LinkedList {
// // //     constructor() {
// // //         this.head = null
// // //         this.tail = null
// // //     }

// // //     add(data) {
// // //         const node = new Node(data)
// // //         if (!this.head) {
// // //             this.head = node
// // //             this.tail = node
           
// // //         } else {
// // //             this.tail.next = node;
// // //             this.tail = node;
          
// // //         }
// // //     }

// // //     display() {
// // //         let currentValue = this.head
// // //         while (currentValue) {
// // //             console.log(currentValue.data);
// // //             currentValue = currentValue.next
// // //         }
// // //     }

// // //     insertAfter(data, newData) {
// // //         const node = new Node(newData)
// // //         let currentNode = this.head
// // //         while (currentNode) {
// // //             if (currentNode.data == data) {
// // //                 node.next = currentNode.next
// // //                 currentNode.next = node
// // //             }
// // //             if (currentNode.next == null) {
// // //                 this.tail = currentNode
// // //                 return
// // //             }

// // //             currentNode = currentNode.next
// // //         }
// // //         console.log("element not found");
// // //     }

// // //     remove(data){
// // //         if(!this.head){
// // //             return
// // //         }
// // //         if(this.head.data==data){
// // //             this.head=this.head.next
// // //         }
// // //         let currentNode = this.head
// // //         while(currentNode.next){
// // //             if(currentNode.next.data == data){
// // //                 currentNode.next=currentNode.next.next;
// // //                 if(!currentNode.next){
// // //                     this.tail = currentNode
// // //                 }
// // //                 return
// // //             }
// // //             currentNode = currentNode.next
// // //         }

// // //     }

// // // }

// // // const list = new LinkedList

// // // let array=[1,2,3,4,5]
// // // for(let i=0;i<array.length;i++){
// // //     list.add(array[i])
// // // }
// // // list.display()

// // // console.log("////////////////////////////");

// // // list.add(300)
// // // list.add(90)
// // // list.add(999)
// // // list.insertAfter(90, 111)
// // // list.display()
// // // list.insertAfter(3, 300)
// // // console.log("-------------------------------------------------------");
// // // list.display()


// // // // list.remove(999)
// // // // console.log("after deletion");
// // // // list.display()

// // // class Node{
// // //     constructor(data){
// // //         this.data =data
// // //         this.next = null
// // //     }
// // // }

// // // class LinkedList{
// // //     constructor(){
// // //         this.head =null
// // //         this.tail =null
// // //         this.size =0
// // //     }
// // //     add(data){
// // //         const node = new Node(data)
// // //         if(!this.head){
// // //             this.head = node
           
// // //         }else{
// // //             this.tail.next =node
            
// // //         }
// // //         this.tail =node
// // //         this.size++
// // //     }


// // //     display(){
// // //         console.log("size of linkedlist",this.size);
// // //         let currentNode = this.head
// // //         while(currentNode){
// // //             console.log(currentNode.data);

// // //             currentNode=currentNode.next
// // //         }

// // //     }

// // //     deleteMiddle(){
// // //         let currentNode = this.head
// // //         let mid = Math.floor(this.size/2)
// // //         mid = mid-1

// // //         let i =0

// // //         while(currentNode){
// // //             if(mid==i){
// // //                 currentNode.next =currentNode.next.next
// // //             } 
// // //             i++
// // //            currentNode =currentNode.next
// // //         }
// // //     }
// // // }


// // // const list = new LinkedList

// // // list.add(20)
// // // list.add(50)
// // // list.add(30)

// // // list. deleteMiddle()
// // // list.display()


// // // let a = [1,2,3,4,5,6,7,8,9]
// // // let target = 9

// // // function binerySearch(a,target){
// // //     let start =0;
// // //     let end = a.length-1
// // //     while(start<=end){
// // //     let mid =Math.floor((start+end)/2)

// // //         if(a[mid]==target){
// // //             return mid
// // //         }else if(a[mid]>target){
// // //              end = mid-1
// // //         }else{
// // //              start =mid+1
// // //         }
// // //     }
// // // }

// // // console.log(binerySearch(a,target));


// // // let a=[1,2,3,4,5,6]
// // // let target = 5

// // // function binerySearch (a,target){
// // //     let start =0
// // //     let end = a.length -1
// // //     while(start<=end){
// // //         let mid =Math.floor((start+end)/2)
// // //         if(a[mid]==target){
// // //             return mid
// // //         }else if(a[mid]>target){
// // //             end = mid -1
// // //         }else{
// // //             start =mid+1
// // //         }
// // //     }
// // // }


// // // console.log(binerySearch(a,target));

// // // let a=[1,2,3,4,5]
// // // let target = 4

// // // function binerySearch (a,target){
// // //     let start = 0
// // //     let end = a.length-1

// // //     while(start<=end){
// // //         let mid = Math.floor((start+end)/2)
// // //         if(a[mid]==target){
// // //             return mid
// // //         }else if(a[mid]>target){
// // //             end = mid-1
// // //         }else{
// // //             start = mid+1
// // //         }
// // //     }
// // // }
// // // console.log(binerySearch(a,target));


// // //binerySearch Recurssion

// // // let a =[1,2,3,4,5]
// // // let target = 3

// // // function binerySearch(start,end,a,target){
// // //     while(start<=end){
// // //         let mid= Math.floor((start+end)/2)
// // //         if(a[mid]==target){
// // //             return mid
// // //         }else if(a[mid]>target){
// // //             return binerySearch(start,mid-1,a,target)
// // //         }else{
// // //            return binerySearch(mid+1,end,a,target) 
// // //         }
// // //     }
// // // }

// // // console.log(binerySearch(0,a.length-1,a,target));

// // // let a=[1,2,3,4,5,6,7,8,9]
// // // let target = 7

// // // function binerysearch(start,end,a,target){
// // //     while(start<=end){
// // //         let mid = Math.floor((start+end)/2)
// // //         if(a[mid]==target){
// // //             return mid
// // //         }else if(a[mid]>target){
// // //             return binerysearch(start,mid-1,a,target)
// // //         }else{
// // //             return binerysearch(mid+1,end,a,target)
// // //         }
// // //     }
// // // }

// // // console.log(binerysearch(0,a.length-1,a,target));

// // // let a =10
// // // let i=0
// // // function printTen(a,i){
  
// // //   if(i<=a){
// // //     console.log(i);
// // //     i++
// // //     return printTen(a,i)
// // //   }
// // // }

// // // printTen(a)

// // // function PrintTen(num){
// // //     if(num>10){
// // //         return
// // //     }
// // //     console.log(num);
// // //     return PrintTen(num+1)
// // // }

// // // PrintTen(1)
// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }

// // class LinkedList{
// //     constructor(){
// //         this.head=null
// //         this.tail=null
// //     }
// //     add(data){
// //         const node = new Node(data)
// //         if(!this.head){
// //             this.head =node  
// //         }else{
// //             this.tail.next =node
// //         }
// //         this.tail=node
// //     }

// //     merge(list1,list2){

// //         if(!list1.head){
// //             return list2
// //         }
// //         if(!list2.head){
// //             return list1
// //         }
// //         let currentNode =list1.head
// //         while(currentNode){
// //             if(currentNode.next==null){
// //                 currentNode.next=list2.head
// //                 this.tail=list2.tail
// //                 return
// //             }
// //             currentNode=currentNode.next
// //         }
// //     }
// //     display(){
// //         let currentNode = this.head
// //         while (currentNode) {
// //             console.log(currentNode.data);
// //             currentNode =currentNode.next
// //         }
// //     }

// //     removeAt (data){
// //         if(!this.head){
// //             return
// //         }
// //         let currentNode = this.head

// //         if(currentNode.data ==data){
// //             let temp = currentNode.next
// //             currentNode.next=null
// //             this.head=temp
// //         }
// //         while(currentNode.next){
// //             if(currentNode.next.data==data){
// //                 currentNode.next=currentNode.next.next
// //             }
// //             if(currentNode.next==null){
// //                 this.tail=currentNode
// //                 return
// //             }
// //             currentNode=currentNode.next
// //         }

// //     }

// //     insertafter(data,newData){
// //         const node = new Node(newData)

// //         let currentNode=this.head
// //         while(currentNode){
// //             if(currentNode.data==data){
// //                     node.next=currentNode.next
// //                     currentNode.next=node
// //             }
// //             currentNode=currentNode.next
// //         }
// //     }

// //     reverse(){
// //         if(!this.head){
// //             return
// //         }
// //         let previousNode = null
// //         let nextNode =null

// //         let currentNode=this.head
// //         while (currentNode.next) {
                
// //         }
// //     }

    

// //     sum(){
// //         let sum=0
// //         let currentNode=this.head
// //         while(currentNode){
// //            sum= sum+currentNode.data
// //            currentNode=currentNode.next
// //         }

// //             return sum
    

// //     }


// // }
// // const list1 =new LinkedList
// // const list2 =new LinkedList

// // list1.add(11)
// // list1.add(12)
// // list1.add(13)
// // list1.display()
// // console.log("---------------------------------------");
// // list2.add(22)
// // list2.add(23)
// // list2.add(24)
// // list2.display()
// // list1.merge(list1,list2)
// // list1.display()
// // // list1.removeAt(12)
// // // list1.display()
// // // list1.removeAt(11)
// // // console.log("///////////////////");
// // // list1.insertafter(13,15)
// // // list1.display()
// // // console.log("----------------------------------------");

// // // console.log(list1.sum());



// // let k = "HELLO"
// // let re =""
// // let limit = k.length
// // console.log(limit);
// // for(let i=0;i<limit;i++){
// //     if(k[i]=="E"){
// //         continue
// //     }else{
// //         re=re+k[i]
// //     }
// // }

// // console.log(re);


// class Node{
//     constructor(data){
//         this.data=data
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail= null
//     }

//     add(data){
//         const node = new Node(data)
//         if(!this.head){
//             this.head=node 
//         }else{
//             this.tail.next=node
//         }
//         this.tail=node
//     }

//     display(){
//         if(!this.head){
//             return
//         }

//         let currentNode = this.head

//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }

//     reverse(){
//         let nextNode =null
//         let currentNode = this.head
//         let previousNode = null

//         while(currentNode!=null){
//             nextNode=currentNode.next
//             currentNode.next = previousNode
//             previousNode = currentNode
//             currentNode = nextNode

//         }
        
//         this.tail =this.head
//         this.head=previousNode
//     }

//     remove(data){

//         if(!this.head){
//             return
//         }
//         if(this.head.data ==data){
//             this.head=this.head.next
//         }else{
//         let currentNode =this.head
//         while(currentNode.next!=null){
//             if(currentNode.next.data==data){
//                 currentNode.next=currentNode.next.next
//             }
//             if(currentNode.next==null){
//                 this.tail=currentNode
//                 return
//             }
//             currentNode =currentNode.next
//         }
//     }

//     }

//     insertafter(data,newdata){
//         const node = new Node (newdata)

//         let currentNode =this.head
//         while(currentNode){
//             if(currentNode.data==data){
//                 node.next=currentNode.next
//                 currentNode.next= node
//             }

//             if(currentNode.next==null){
//                     this.tail=currentNode
//                     return
//             }
//             currentNode = currentNode.next
//         }

//     }


// }

// const list = new LinkedList

// list.add(20)
// list.add(30)
// list.add(40)
// // list.display()
// // list.reverse()
// // list.remove(30)
// // console.log("----------------------------");
// // list.display()

// list.insertafter(40,30)
// list.display()
// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }

// // class LinkedList{
// //     constructor(){
// //         this.head=null
// //         this.tail=null

// //     }

// //     insert (data){
// //         const node = new Node(data)

// //         if(!this.head){
// //             this.head=node
// //             this.tail =node
// //         }else{
// //             this.tail.next =node
// //             this.tail = node

// //         }

// //     }


// //     display (){
// //         let currentNode = this.head
// //         while(currentNode){
// //             console.log(currentNode.data);
// //             currentNode = currentNode.next
// //         }
// //     }


// //     insertAfter(data, newData){
// //         const node = new Node(newData)
// //         let currentNode = this.head
// //         while(currentNode){
// //             if(currentNode.data==data){
// //              node.next= currentNode.next
// //              currentNode.next= node
// //             }
// //             if(currentNode.next==null){
// //                 this.tail=currentNode
// //             }

// //             currentNode = currentNode.next
// //         }
// //     }


// //     remove(data){
// //         if(!this.head){
// //             return
// //         }
// //         if(this.head.data==data){
// //             this.head=this.head.next
// //         }
// //         let currentNode = this.head
// //         while(currentNode.next){
// //             if(currentNode.next.data==data){
// //                 currentNode.next = currentNode.next.next
// //                 if(!currentNode.next){
// //                     this.tail=currentNode
// //                 }
// //                 return
// //             }
// //             currentNode=currentNode.next
// //         }
// //     }

// //     reverse() {
// //         let prevNode = null;
// //         let currentNode = this.head;
// //         let nextNode = null;

// //         while (currentNode !== null) {
// //           // Store the next node
// //           nextNode = currentNode.next;

// //           // Reverse the pointer of the current node
// //           currentNode.next = prevNode;

// //           // Move prevNode and currentNode one step forward
// //           prevNode = currentNode;
// //           currentNode = nextNode;
// //         }

// //         // Update the head and tail of the linked list
// //         this.tail = this.head;
// //         this.head = prevNode;
// //       }
// // }

// // const list =  new LinkedList

// // list.insert(20)
// // list.insert(89)
// // list.display()
// // console.log("---------------------------------------------------------");
// // list.insertAfter(20,111)
// // list.insertAfter(111,200)
// // list.remove(89)
// // list.display()

// // console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
// // list.reverse()
// // list.display()


// //binery Search

// // let a=[1,2,3,4,5,6,7,8,9]
// // let target = 8;

// // function BinerySearch(a,target){
// //     let start =0
// //     let end = a.length -1
// //     while(start<=end){
// //         let mid = Math.floor((start+end)/2)
// //         if(a[mid]==target){
// //             return mid
// //         }else if(a[mid]>target){
// //             end = mid-1 
// //         }else{
// //             start = mid+1
// //         }
// //     }
// // }

// // console.log(BinerySearch(a,target));

// // function BinerySearch(a,target){
// //     let start =0
// //     let end = a.length -1
// //     while(start<=end){
// //         let mid =Math.floor((start+end)/2)
// //         if(a[mid]==target){
// //             return mid
// //         }else if(a[mid]>target){
// //             end = mid-1
// //         }else{
// //             start = mid+1
// //         }
// //     }
// // }
// //linear search
//  let a=[1,2,3,4,5,6,7,8,9]
//  let target = 1;
// function linearSearch (a,target){
//     for(let i=0;i<a.length;i++){
//         if(a[i]==target){
//             return i
//         }
//     }
// }
// console.log(linearSearch (a,target))

//bubble sort
// let a = [1, 9, 3, 4, 7, 2]

// function bubbleSort(a) {
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j]=a[j+ 1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubbleSort(a))


//bubble sort
// let a=[1,33,44,21,2,34,70,13,15]
// function bubleSort(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubleSort(a));

// let a=[1,90,100,40,30,20]
// function Bub(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(Bub(a));

//insertion sort

// let a=[2,4,70,20,23,13,14,16,60]
// function insertion(a){
//     let limit = a.length
//     for(let i=1;i<limit;i++){
//         let temp =a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a 
// }

// function insertion(a){
//     let limit =a.length
//    for(let i=0;i<limit;i++){
//     let temp = a[i]
//     let j=i-1
//     while(j>=0 && a[j]>temp){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=temp
//    }
//    return a
// }
// console.log(insertion(a));

// function insertion(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         let temp = a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//         }
//         return a
// }

// function insertion(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         let temp = a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a
// }

// function insertion(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         let temp = a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a
// }

// function insertion (a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         let temp = a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--

//         }
//         a[j+1]=temp
//     }
//     return a
// }

//bubble sort
// let a=[12,13,14,90,30,20,11,20,1,2,5]
// function bubbleSort(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }
// console.log(bubbleSort(a));

//insertion sort
// let a=[1,2,90,4,8,3]
// function insertionSort(a){
//     let limit =a.length
//     for(let i=1;i<limit;i++){
//         let temp = a[i]
//         let j= i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a
// }

// console.log(insertionSort(a));

//insertion sort 
// let a=[1,2,900,12,48,1200,15,3]
// function insertionSort(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         let temp =a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]= temp
//     }
//     return a
// }
// console.log(insertionSort(a));

//selectionsort 

// let a=[12,13,44,1,3,4,5,100,11,12,13,9]

// function SelectionSort(a){
//     let limit = a.length
//     for(i=0;i<limit-1;i++){

//         let min =i
//         for(let j=i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min =j
//             }
//         }
//         if(min!=i){
//             let temp =a[i]
//             a[i]=a[min]
//             a[min]=temp
//         }
//     }
//     return a
// }

// console.log(SelectionSort(a));

//selection sort

// let a=[12,22,33,1,2,3,4,90,100,130,9,10]
// function selectionSort(a){
//     let limit = a.length
//     for(let i=0;i<limit-1;i++){
//         let min =i
//         for(let j=i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min = j 
//             }
//         }

//         if(min!=i){
//             let temp =a[i]
//             a[i]=a[min]
//             a[min]= temp
//         }
//     }
//     return a
// }

// console.log(selectionSort(a));

// function selectionSort(a){
//     let limit = a.length
//     for(let i=0;i<limit-1;i++){
//         let min =i
//         for(let j=i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min =j
//             }
//         }
//         if(min!=i){
//             let temp = a[i]
//             a[i]=a[min]
//             a[min]=temp
//         }
//     }
//     return a
// }

// function selectionSort(a){
//     let limit=a.length
//     for(let i=0;i<limit-1;i++){
//         let min=i
//         for(let j=i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min=j
//             }
//         }
//         if(min!=i){
//             let temp =a[i]
//             a[i]=a[min]
//             a[min]=temp
//         }
//     }
//     return a
// }