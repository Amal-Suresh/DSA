// // // // // // class Node {
// // // // // //     constructor(data) {
// // // // // //         this.data = data;
// // // // // //         this.next = null;
// // // // // //     }
// // // // // // }

// // // // // // class LinkedList {
// // // // // //     constructor() {
// // // // // //         this.head = null
// // // // // //         this.tail = null
// // // // // //     }

// // // // // //     add(data) {
// // // // // //         const node = new Node(data)
// // // // // //         if (!this.head) {
// // // // // //             this.head = node
// // // // // //             this.tail = node

// // // // // //         } else {
// // // // // //             this.tail.next = node;
// // // // // //             this.tail = node;

// // // // // //         }
// // // // // //     }

// // // // // //     display() {
// // // // // //         let currentValue = this.head
// // // // // //         while (currentValue) {
// // // // // //             console.log(currentValue.data);
// // // // // //             currentValue = currentValue.next
// // // // // //         }
// // // // // //     }

// // // // // //     insertAfter(data, newData) {
// // // // // //         const node = new Node(newData)
// // // // // //         let currentNode = this.head
// // // // // //         while (currentNode) {
// // // // // //             if (currentNode.data == data) {
// // // // // //                 node.next = currentNode.next
// // // // // //                 currentNode.next = node
// // // // // //             }
// // // // // //             if (currentNode.next == null) {
// // // // // //                 this.tail = currentNode
// // // // // //                 return
// // // // // //             }

// // // // // //             currentNode = currentNode.next
// // // // // //         }
// // // // // //         console.log("element not found");
// // // // // //     }

// // // // // //     remove(data){
// // // // // //         if(!this.head){
// // // // // //             return
// // // // // //         }
// // // // // //         if(this.head.data==data){
// // // // // //             this.head=this.head.next
// // // // // //         }
// // // // // //         let currentNode = this.head
// // // // // //         while(currentNode.next){
// // // // // //             if(currentNode.next.data == data){
// // // // // //                 currentNode.next=currentNode.next.next;
// // // // // //                 if(!currentNode.next){
// // // // // //                     this.tail = currentNode
// // // // // //                 }
// // // // // //                 return
// // // // // //             }
// // // // // //             currentNode = currentNode.next
// // // // // //         }

// // // // // //     }

// // // // // // }

// // // // // // const list = new LinkedList

// // // // // // let array=[1,2,3,4,5]
// // // // // // for(let i=0;i<array.length;i++){
// // // // // //     list.add(array[i])
// // // // // // }
// // // // // // list.display()

// // // // // // console.log("////////////////////////////");

// // // // // // list.add(300)
// // // // // // list.add(90)
// // // // // // list.add(999)
// // // // // // list.insertAfter(90, 111)
// // // // // // list.display()
// // // // // // list.insertAfter(3, 300)
// // // // // // console.log("-------------------------------------------------------");
// // // // // // list.display()


// // // // // // // list.remove(999)
// // // // // // // console.log("after deletion");
// // // // // // // list.display()

// // // // // // class Node{
// // // // // //     constructor(data){
// // // // // //         this.data =data
// // // // // //         this.next = null
// // // // // //     }
// // // // // // }

// // // // // // class LinkedList{
// // // // // //     constructor(){
// // // // // //         this.head =null
// // // // // //         this.tail =null
// // // // // //         this.size =0
// // // // // //     }
// // // // // //     add(data){
// // // // // //         const node = new Node(data)
// // // // // //         if(!this.head){
// // // // // //             this.head = node

// // // // // //         }else{
// // // // // //             this.tail.next =node

// // // // // //         }
// // // // // //         this.tail =node
// // // // // //         this.size++
// // // // // //     }


// // // // // //     display(){
// // // // // //         console.log("size of linkedlist",this.size);
// // // // // //         let currentNode = this.head
// // // // // //         while(currentNode){
// // // // // //             console.log(currentNode.data);

// // // // // //             currentNode=currentNode.next
// // // // // //         }

// // // // // //     }

// // // // // //     deleteMiddle(){
// // // // // //         let currentNode = this.head
// // // // // //         let mid = Math.floor(this.size/2)
// // // // // //         mid = mid-1

// // // // // //         let i =0

// // // // // //         while(currentNode){
// // // // // //             if(mid==i){
// // // // // //                 currentNode.next =currentNode.next.next
// // // // // //             } 
// // // // // //             i++
// // // // // //            currentNode =currentNode.next
// // // // // //         }
// // // // // //     }
// // // // // // }


// // // // // // const list = new LinkedList

// // // // // // list.add(20)
// // // // // // list.add(50)
// // // // // // list.add(30)

// // // // // // list. deleteMiddle()
// // // // // // list.display()


// // // // // // let a = [1,2,3,4,5,6,7,8,9]
// // // // // // let target = 9

// // // // // // function binerySearch(a,target){
// // // // // //     let start =0;
// // // // // //     let end = a.length-1
// // // // // //     while(start<=end){
// // // // // //     let mid =Math.floor((start+end)/2)

// // // // // //         if(a[mid]==target){
// // // // // //             return mid
// // // // // //         }else if(a[mid]>target){
// // // // // //              end = mid-1
// // // // // //         }else{
// // // // // //              start =mid+1
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // console.log(binerySearch(a,target));


// // // // // // let a=[1,2,3,4,5,6]
// // // // // // let target = 5

// // // // // // function binerySearch (a,target){
// // // // // //     let start =0
// // // // // //     let end = a.length -1
// // // // // //     while(start<=end){
// // // // // //         let mid =Math.floor((start+end)/2)
// // // // // //         if(a[mid]==target){
// // // // // //             return mid
// // // // // //         }else if(a[mid]>target){
// // // // // //             end = mid -1
// // // // // //         }else{
// // // // // //             start =mid+1
// // // // // //         }
// // // // // //     }
// // // // // // }


// // // // // // console.log(binerySearch(a,target));

// // // // // // let a=[1,2,3,4,5]
// // // // // // let target = 4

// // // // // // function binerySearch (a,target){
// // // // // //     let start = 0
// // // // // //     let end = a.length-1

// // // // // //     while(start<=end){
// // // // // //         let mid = Math.floor((start+end)/2)
// // // // // //         if(a[mid]==target){
// // // // // //             return mid
// // // // // //         }else if(a[mid]>target){
// // // // // //             end = mid-1
// // // // // //         }else{
// // // // // //             start = mid+1
// // // // // //         }
// // // // // //     }
// // // // // // }
// // // // // // console.log(binerySearch(a,target));


// // // // // //binerySearch Recurssion

// // // // // // let a =[1,2,3,4,5]
// // // // // // let target = 3

// // // // // // function binerySearch(start,end,a,target){
// // // // // //     while(start<=end){
// // // // // //         let mid= Math.floor((start+end)/2)
// // // // // //         if(a[mid]==target){
// // // // // //             return mid
// // // // // //         }else if(a[mid]>target){
// // // // // //             return binerySearch(start,mid-1,a,target)
// // // // // //         }else{
// // // // // //            return binerySearch(mid+1,end,a,target) 
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // console.log(binerySearch(0,a.length-1,a,target));

// // // // // // let a=[1,2,3,4,5,6,7,8,9]
// // // // // // let target = 7

// // // // // // function binerysearch(start,end,a,target){
// // // // // //     while(start<=end){
// // // // // //         let mid = Math.floor((start+end)/2)
// // // // // //         if(a[mid]==target){
// // // // // //             return mid
// // // // // //         }else if(a[mid]>target){
// // // // // //             return binerysearch(start,mid-1,a,target)
// // // // // //         }else{
// // // // // //             return binerysearch(mid+1,end,a,target)
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // console.log(binerysearch(0,a.length-1,a,target));

// // // // // // let a =10
// // // // // // let i=0
// // // // // // function printTen(a,i){

// // // // // //   if(i<=a){
// // // // // //     console.log(i);
// // // // // //     i++
// // // // // //     return printTen(a,i)
// // // // // //   }
// // // // // // }

// // // // // // printTen(a)

// // // // // // function PrintTen(num){
// // // // // //     if(num>10){
// // // // // //         return
// // // // // //     }
// // // // // //     console.log(num);
// // // // // //     return PrintTen(num+1)
// // // // // // }

// // // // // // PrintTen(1)
// // // // // class Node{
// // // // //     constructor(data){
// // // // //         this.data = data
// // // // //         this.next = null
// // // // //     }
// // // // // }

// // // // // class LinkedList{
// // // // //     constructor(){
// // // // //         this.head=null
// // // // //         this.tail=null
// // // // //     }
// // // // //     add(data){
// // // // //         const node = new Node(data)
// // // // //         if(!this.head){
// // // // //             this.head =node  
// // // // //         }else{
// // // // //             this.tail.next =node
// // // // //         }
// // // // //         this.tail=node
// // // // //     }

// // // // //     merge(list1,list2){

// // // // //         if(!list1.head){
// // // // //             return list2
// // // // //         }
// // // // //         if(!list2.head){
// // // // //             return list1
// // // // //         }
// // // // //         let currentNode =list1.head
// // // // //         while(currentNode){
// // // // //             if(currentNode.next==null){
// // // // //                 currentNode.next=list2.head
// // // // //                 this.tail=list2.tail
// // // // //                 return
// // // // //             }
// // // // //             currentNode=currentNode.next
// // // // //         }
// // // // //     }
// // // // //     display(){
// // // // //         let currentNode = this.head
// // // // //         while (currentNode) {
// // // // //             console.log(currentNode.data);
// // // // //             currentNode =currentNode.next
// // // // //         }
// // // // //     }

// // // // //     removeAt (data){
// // // // //         if(!this.head){
// // // // //             return
// // // // //         }
// // // // //         let currentNode = this.head

// // // // //         if(currentNode.data ==data){
// // // // //             let temp = currentNode.next
// // // // //             currentNode.next=null
// // // // //             this.head=temp
// // // // //         }
// // // // //         while(currentNode.next){
// // // // //             if(currentNode.next.data==data){
// // // // //                 currentNode.next=currentNode.next.next
// // // // //             }
// // // // //             if(currentNode.next==null){
// // // // //                 this.tail=currentNode
// // // // //                 return
// // // // //             }
// // // // //             currentNode=currentNode.next
// // // // //         }

// // // // //     }

// // // // //     insertafter(data,newData){
// // // // //         const node = new Node(newData)

// // // // //         let currentNode=this.head
// // // // //         while(currentNode){
// // // // //             if(currentNode.data==data){
// // // // //                     node.next=currentNode.next
// // // // //                     currentNode.next=node
// // // // //             }
// // // // //             currentNode=currentNode.next
// // // // //         }
// // // // //     }

// // // // //     reverse(){
// // // // //         if(!this.head){
// // // // //             return
// // // // //         }
// // // // //         let previousNode = null
// // // // //         let nextNode =null

// // // // //         let currentNode=this.head
// // // // //         while (currentNode.next) {

// // // // //         }
// // // // //     }



// // // // //     sum(){
// // // // //         let sum=0
// // // // //         let currentNode=this.head
// // // // //         while(currentNode){
// // // // //            sum= sum+currentNode.data
// // // // //            currentNode=currentNode.next
// // // // //         }

// // // // //             return sum


// // // // //     }


// // // // // }
// // // // // const list1 =new LinkedList
// // // // // const list2 =new LinkedList

// // // // // list1.add(11)
// // // // // list1.add(12)
// // // // // list1.add(13)
// // // // // list1.display()
// // // // // console.log("---------------------------------------");
// // // // // list2.add(22)
// // // // // list2.add(23)
// // // // // list2.add(24)
// // // // // list2.display()
// // // // // list1.merge(list1,list2)
// // // // // list1.display()
// // // // // // list1.removeAt(12)
// // // // // // list1.display()
// // // // // // list1.removeAt(11)
// // // // // // console.log("///////////////////");
// // // // // // list1.insertafter(13,15)
// // // // // // list1.display()
// // // // // // console.log("----------------------------------------");

// // // // // // console.log(list1.sum());



// // // // // let k = "HELLO"
// // // // // let re =""
// // // // // let limit = k.length
// // // // // console.log(limit);
// // // // // for(let i=0;i<limit;i++){
// // // // //     if(k[i]=="E"){
// // // // //         continue
// // // // //     }else{
// // // // //         re=re+k[i]
// // // // //     }
// // // // // }

// // // // // console.log(re);


// // // // class Node{
// // // //     constructor(data){
// // // //         this.data=data
// // // //         this.next = null
// // // //     }
// // // // }

// // // // class LinkedList{
// // // //     constructor(){
// // // //         this.head=null
// // // //         this.tail= null
// // // //     }

// // // //     add(data){
// // // //         const node = new Node(data)
// // // //         if(!this.head){
// // // //             this.head=node 
// // // //         }else{
// // // //             this.tail.next=node
// // // //         }
// // // //         this.tail=node
// // // //     }

// // // //     display(){
// // // //         if(!this.head){
// // // //             return
// // // //         }

// // // //         let currentNode = this.head

// // // //         while(currentNode){
// // // //             console.log(currentNode.data);
// // // //             currentNode=currentNode.next
// // // //         }
// // // //     }

// // // //     reverse(){
// // // //         let nextNode =null
// // // //         let currentNode = this.head
// // // //         let previousNode = null

// // // //         while(currentNode!=null){
// // // //             nextNode=currentNode.next
// // // //             currentNode.next = previousNode
// // // //             previousNode = currentNode
// // // //             currentNode = nextNode

// // // //         }

// // // //         this.tail =this.head
// // // //         this.head=previousNode
// // // //     }

// // // //     remove(data){

// // // //         if(!this.head){
// // // //             return
// // // //         }
// // // //         if(this.head.data ==data){
// // // //             this.head=this.head.next
// // // //         }else{
// // // //         let currentNode =this.head
// // // //         while(currentNode.next!=null){
// // // //             if(currentNode.next.data==data){
// // // //                 currentNode.next=currentNode.next.next
// // // //             }
// // // //             if(currentNode.next==null){
// // // //                 this.tail=currentNode
// // // //                 return
// // // //             }
// // // //             currentNode =currentNode.next
// // // //         }
// // // //     }

// // // //     }

// // // //     insertafter(data,newdata){
// // // //         const node = new Node (newdata)

// // // //         let currentNode =this.head
// // // //         while(currentNode){
// // // //             if(currentNode.data==data){
// // // //                 node.next=currentNode.next
// // // //                 currentNode.next= node
// // // //             }

// // // //             if(currentNode.next==null){
// // // //                     this.tail=currentNode
// // // //                     return
// // // //             }
// // // //             currentNode = currentNode.next
// // // //         }

// // // //     }


// // // // }

// // // // const list = new LinkedList

// // // // list.add(20)
// // // // list.add(30)
// // // // list.add(40)
// // // // // list.display()
// // // // // list.reverse()
// // // // // list.remove(30)
// // // // // console.log("----------------------------");
// // // // // list.display()

// // // // list.insertafter(40,30)
// // // // list.display()
// // // // // class Node{
// // // // //     constructor(data){
// // // // //         this.data = data
// // // // //         this.next = null
// // // // //     }
// // // // // }

// // // // // class LinkedList{
// // // // //     constructor(){
// // // // //         this.head=null
// // // // //         this.tail=null

// // // // //     }

// // // // //     insert (data){
// // // // //         const node = new Node(data)

// // // // //         if(!this.head){
// // // // //             this.head=node
// // // // //             this.tail =node
// // // // //         }else{
// // // // //             this.tail.next =node
// // // // //             this.tail = node

// // // // //         }

// // // // //     }


// // // // //     display (){
// // // // //         let currentNode = this.head
// // // // //         while(currentNode){
// // // // //             console.log(currentNode.data);
// // // // //             currentNode = currentNode.next
// // // // //         }
// // // // //     }


// // // // //     insertAfter(data, newData){
// // // // //         const node = new Node(newData)
// // // // //         let currentNode = this.head
// // // // //         while(currentNode){
// // // // //             if(currentNode.data==data){
// // // // //              node.next= currentNode.next
// // // // //              currentNode.next= node
// // // // //             }
// // // // //             if(currentNode.next==null){
// // // // //                 this.tail=currentNode
// // // // //             }

// // // // //             currentNode = currentNode.next
// // // // //         }
// // // // //     }


// // // // //     remove(data){
// // // // //         if(!this.head){
// // // // //             return
// // // // //         }
// // // // //         if(this.head.data==data){
// // // // //             this.head=this.head.next
// // // // //         }
// // // // //         let currentNode = this.head
// // // // //         while(currentNode.next){
// // // // //             if(currentNode.next.data==data){
// // // // //                 currentNode.next = currentNode.next.next
// // // // //                 if(!currentNode.next){
// // // // //                     this.tail=currentNode
// // // // //                 }
// // // // //                 return
// // // // //             }
// // // // //             currentNode=currentNode.next
// // // // //         }
// // // // //     }

// // // // //     reverse() {
// // // // //         let prevNode = null;
// // // // //         let currentNode = this.head;
// // // // //         let nextNode = null;

// // // // //         while (currentNode !== null) {
// // // // //           // Store the next node
// // // // //           nextNode = currentNode.next;

// // // // //           // Reverse the pointer of the current node
// // // // //           currentNode.next = prevNode;

// // // // //           // Move prevNode and currentNode one step forward
// // // // //           prevNode = currentNode;
// // // // //           currentNode = nextNode;
// // // // //         }

// // // // //         // Update the head and tail of the linked list
// // // // //         this.tail = this.head;
// // // // //         this.head = prevNode;
// // // // //       }
// // // // // }

// // // // // const list =  new LinkedList

// // // // // list.insert(20)
// // // // // list.insert(89)
// // // // // list.display()
// // // // // console.log("---------------------------------------------------------");
// // // // // list.insertAfter(20,111)
// // // // // list.insertAfter(111,200)
// // // // // list.remove(89)
// // // // // list.display()

// // // // // console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
// // // // // list.reverse()
// // // // // list.display()


// // // // //binery Search

// // // // // let a=[1,2,3,4,5,6,7,8,9]
// // // // // let target = 8;

// // // // // function BinerySearch(a,target){
// // // // //     let start =0
// // // // //     let end = a.length -1
// // // // //     while(start<=end){
// // // // //         let mid = Math.floor((start+end)/2)
// // // // //         if(a[mid]==target){
// // // // //             return mid
// // // // //         }else if(a[mid]>target){
// // // // //             end = mid-1 
// // // // //         }else{
// // // // //             start = mid+1
// // // // //         }
// // // // //     }
// // // // // }

// // // // // console.log(BinerySearch(a,target));

// // // // // function BinerySearch(a,target){
// // // // //     let start =0
// // // // //     let end = a.length -1
// // // // //     while(start<=end){
// // // // //         let mid =Math.floor((start+end)/2)
// // // // //         if(a[mid]==target){
// // // // //             return mid
// // // // //         }else if(a[mid]>target){
// // // // //             end = mid-1
// // // // //         }else{
// // // // //             start = mid+1
// // // // //         }
// // // // //     }
// // // // // }
// // // // //linear search
// // // //  let a=[1,2,3,4,5,6,7,8,9]
// // // //  let target = 1;
// // // // function linearSearch (a,target){
// // // //     for(let i=0;i<a.length;i++){
// // // //         if(a[i]==target){
// // // //             return i
// // // //         }
// // // //     }
// // // // }
// // // // console.log(linearSearch (a,target))

// // // //bubble sort
// // // // let a = [1, 9, 3, 4, 7, 2]

// // // // function bubbleSort(a) {
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         for(let j=0;j<limit-1;j++){
// // // //             if(a[j]>a[j+1]){
// // // //                 let temp = a[j]
// // // //                 a[j]=a[j+ 1]
// // // //                 a[j+1]=temp
// // // //             }
// // // //         }
// // // //     }
// // // //     return a
// // // // }

// // // // console.log(bubbleSort(a))


// // // //bubble sort
// // // // let a=[1,33,44,21,2,34,70,13,15]
// // // // function bubleSort(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         for(let j=0;j<limit-1;j++){
// // // //             if(a[j]>a[j+1]){
// // // //                 let temp = a[j]
// // // //                 a[j]=a[j+1]
// // // //                 a[j+1]=temp
// // // //             }
// // // //         }
// // // //     }
// // // //     return a
// // // // }

// // // // console.log(bubleSort(a));

// // // // let a=[1,90,100,40,30,20]
// // // // function Bub(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         for(let j=0;j<limit;j++){
// // // //             if(a[j]>a[j+1]){
// // // //                 let temp = a[j]
// // // //                 a[j]=a[j+1]
// // // //                 a[j+1]=temp
// // // //             }
// // // //         }
// // // //     }
// // // //     return a
// // // // }

// // // // console.log(Bub(a));

// // // //insertion sort

// // // // let a=[2,4,70,20,23,13,14,16,60]
// // // // function insertion(a){
// // // //     let limit = a.length
// // // //     for(let i=1;i<limit;i++){
// // // //         let temp =a[i]
// // // //         let j=i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--
// // // //         }
// // // //         a[j+1]=temp
// // // //     }
// // // //     return a 
// // // // }

// // // // function insertion(a){
// // // //     let limit =a.length
// // // //    for(let i=0;i<limit;i++){
// // // //     let temp = a[i]
// // // //     let j=i-1
// // // //     while(j>=0 && a[j]>temp){
// // // //         a[j+1]=a[j]
// // // //         j--
// // // //     }
// // // //     a[j+1]=temp
// // // //    }
// // // //    return a
// // // // }
// // // // console.log(insertion(a));

// // // // function insertion(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         let temp = a[i]
// // // //         let j=i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--
// // // //         }
// // // //         a[j+1]=temp
// // // //         }
// // // //         return a
// // // // }

// // // // function insertion(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         let temp = a[i]
// // // //         let j=i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--
// // // //         }
// // // //         a[j+1]=temp
// // // //     }
// // // //     return a
// // // // }

// // // // function insertion(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         let temp = a[i]
// // // //         let j=i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--
// // // //         }
// // // //         a[j+1]=temp
// // // //     }
// // // //     return a
// // // // }

// // // // function insertion (a){
// // // //     let limit =a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         let temp = a[i]
// // // //         let j=i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--

// // // //         }
// // // //         a[j+1]=temp
// // // //     }
// // // //     return a
// // // // }

// // // //bubble sort
// // // // let a=[12,13,14,90,30,20,11,20,1,2,5]
// // // // function bubbleSort(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         for(let j=0;j<limit-1-i;j++){
// // // //             if(a[j]>a[j+1]){
// // // //                 let temp = a[j]
// // // //                 a[j]=a[j+1]
// // // //                 a[j+1]=temp
// // // //             }
// // // //         }
// // // //     }
// // // //     return a
// // // // }
// // // // console.log(bubbleSort(a));

// // // //insertion sort
// // // // let a=[1,2,90,4,8,3]
// // // // function insertionSort(a){
// // // //     let limit =a.length
// // // //     for(let i=1;i<limit;i++){
// // // //         let temp = a[i]
// // // //         let j= i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--
// // // //         }
// // // //         a[j+1]=temp
// // // //     }
// // // //     return a
// // // // }

// // // // console.log(insertionSort(a));

// // // //insertion sort 
// // // // let a=[1,2,900,12,48,1200,15,3]
// // // // function insertionSort(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit;i++){
// // // //         let temp =a[i]
// // // //         let j=i-1
// // // //         while(j>=0 && a[j]>temp){
// // // //             a[j+1]=a[j]
// // // //             j--
// // // //         }
// // // //         a[j+1]= temp
// // // //     }
// // // //     return a
// // // // }
// // // // console.log(insertionSort(a));

// // // //selectionsort 

// // // // let a=[12,13,44,1,3,4,5,100,11,12,13,9]

// // // // function SelectionSort(a){
// // // //     let limit = a.length
// // // //     for(i=0;i<limit-1;i++){

// // // //         let min =i
// // // //         for(let j=i+1;j<limit;j++){
// // // //             if(a[j]<a[min]){
// // // //                 min =j
// // // //             }
// // // //         }
// // // //         if(min!=i){
// // // //             let temp =a[i]
// // // //             a[i]=a[min]
// // // //             a[min]=temp
// // // //         }
// // // //     }
// // // //     return a
// // // // }

// // // // console.log(SelectionSort(a));

// // // //selection sort

// // // // let a=[12,22,33,1,2,3,4,90,100,130,9,10]
// // // // function selectionSort(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit-1;i++){
// // // //         let min =i
// // // //         for(let j=i+1;j<limit;j++){
// // // //             if(a[j]<a[min]){
// // // //                 min = j 
// // // //             }
// // // //         }

// // // //         if(min!=i){
// // // //             let temp =a[i]
// // // //             a[i]=a[min]
// // // //             a[min]= temp
// // // //         }
// // // //     }
// // // //     return a
// // // // }

// // // // console.log(selectionSort(a));

// // // // function selectionSort(a){
// // // //     let limit = a.length
// // // //     for(let i=0;i<limit-1;i++){
// // // //         let min =i
// // // //         for(let j=i+1;j<limit;j++){
// // // //             if(a[j]<a[min]){
// // // //                 min =j
// // // //             }
// // // //         }
// // // //         if(min!=i){
// // // //             let temp = a[i]
// // // //             a[i]=a[min]
// // // //             a[min]=temp
// // // //         }
// // // //     }
// // // //     return a
// // // // }

// // // // function selectionSort(a){
// // // //     let limit=a.length
// // // //     for(let i=0;i<limit-1;i++){
// // // //         let min=i
// // // //         for(let j=i+1;j<limit;j++){
// // // //             if(a[j]<a[min]){
// // // //                 min=j
// // // //             }
// // // //         }
// // // //         if(min!=i){
// // // //             let temp =a[i]
// // // //             a[i]=a[min]
// // // //             a[min]=temp
// // // //         }
// // // //     }
// // // //     return a
// // // // }


// // // //---------------------merge-sort------------------------------


// // // // function mergeSort(a,lb,ub){
// // // //     if(lb<ub){
// // // //         let mid=Math.floor((lb+ub)/2)

// // // //         mergeSort(a,lb,mid)
// // // //         mergeSort(a,mid+1,ub)
// // // //       merge(a,lb,mid,ub)
// // // //     }
// // // // }

// // // // function merge(a,lb,mid,ub){
// // // //     let i=lb
// // // //     let j=mid+1
// // // //     let k=lb
// // // //     const b=[]

// // // //     while(i<=mid&&j<=ub){
// // // //         if(a[i]<=a[j]){
// // // //             b[k]=a[i]
// // // //             i++
// // // //         }
// // // //         else{
// // // //             b[k]=a[j]
// // // //             j++
// // // //         }
// // // //         k++
// // // //     }   
// // // //     while(i<=mid){
// // // //         b[k]=a[i]
// // // //         i++
// // // //         k++
// // // //     }
// // // //         while(j<=ub){
// // // //             b[k]=a[j]
// // // //             j++
// // // //             k++
// // // //         }
// // // //         for(let x=lb;x<=ub;x++){
// // // //             a[x]=b[x]
// // // //         }  
// // // // }

// // // // const array=[5,2,7,8,3,11,6,12]

// // // // let lb=0
// // // // let ub=array.length-1

// // // // mergeSort(array,lb,ub)

// // // // console.log(array);

// // // //merge sort

// // // let a=[1,100,300,150,20,10,90,4,2]
// // // let lb=0
// // // let ub=a.length-1

// // // mergeSort(a,lb,ub)

// // // function mergeSort(a,lb,ub){
// // //     if(lb<ub){
// // //     let mid =Math.floor((lb+ub)/2)
// // //     mergeSort(a,lb,mid)
// // //     mergeSort(a,mid+1,ub)
// // //     merge(a,lb,ub,mid)
// // //     }

// // // }

// // // function merge(a,lb,ub,mid){
// // //     let i=lb
// // //     let j=mid+1
// // //     let k=lb
// // //     let b=[]
// // //     while(i<=mid && j<=ub){
// // //         if(a[i]<=a[j]){
// // //             b[k]=a[i]
// // //             i++
// // //         }else{
// // //             b[k]=a[j]
// // //             j++
// // //         }
// // //         k++
// // //     }
// // //         while(i<=mid){
// // //             b[k]=a[i]
// // //             i++
// // //             k++
// // //         }
// // //         while(j<=ub){
// // //             b[k]=a[j]
// // //             j++
// // //             k++
// // //         }
// // //         for(let t =lb;t<=ub;t++){
// // //             a[t]=b[t]
// // //         }
// // //     }
// // // console.log(a);


// // let a= [1,700,1000,50,10,11,2,600]
// // let lb=0
// // let ub = a.length-1
// // console.log(a);

// // mergeSort(a,lb,ub)

// // function mergeSort(a,lb,ub){
// //     if(lb<ub){
// //         let mid = Math.floor((lb+ub)/2)
// //         mergeSort(a,lb,mid)
// //         mergeSort(a,mid+1,ub)
// //         merge(a,lb,ub,mid)
// //     }
// // }

// // function merge(a,lb,ub,mid){
// //     let i=lb
// //     let k=lb
// //     let j=mid+1
// //     let b=[]
// //     while(i<=mid && j<=ub){
// //         if(a[i]>=a[j]){
// //             b[k]=a[i]
// //             i++
// //         }else{
// //             b[k]=a[j]
// //             j++
// //         }
// //         k++
// //     }
// //     while(i<=mid){
// //         b[k]=a[i]
// //         i++
// //         k++
// //     }
// //     while(j<=ub){
// //         b[k]=a[j]
// //         j++
// //         k++
// //     }
// //     for(let z=lb;z<=ub;z++){
// //         a[z]=b[z]
// //     }

// // }
// // console.log(a);

// // // merge

// let a=[1,2,90,4,70,5,3]
// let lb=0
// let ub=a.length-1
// mergeSort(a,lb,ub)


// function mergeSort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergeSort(a,lb,mid)
//         mergeSort(a,mid+1,ub)
//         merge(a,lb,mid,ub)
//     }
// }

// function merge(a,lb,mid,ub){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]
//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let z=lb;z<=ub;z++){
//         a[z]=b[z]
//     }
// }

// console.log(a);

//---------------------------Quick sort ------------------

// let a=[12,12,15,2,10,9,1,3]
// let l=0
// let h=a.length-1
//  QuickSort(l,h)
//  console.log(a);

// function partition(l,h){
//     let i =l+1
//     let pivot=a[i]
//     let j=h
//     let temp

//     while(i<j){
//         while(a[i]<=pivot && i<h){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<j){
//             temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
//     temp = a[l]
//     a[l]=a[j]
//     a[j]=temp
//     return j;   
// }

// function QuickSort(l,h){
//     if(l<h){
//         let p =partition(l,h)
//         QuickSort(l,p-1)
//         QuickSort(p+1,h)
//     }
// }


//-------------------------QuickSort

// let a=[23,1200,100,1,2,99,80]
// let l=0
// let h=a.length-1
// let sortedArray =quicksort(a,l,h)
// console.log(sortedArray);

// function partition(a,l,h){
//     let pivot = a[l]
//     let i=l+1
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--

//         }
//     }
//     let temp =a[l]
//     a[l]=a[j]
//     a[j]=temp
//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){
//     let p = partition(a,l,h)
//     quicksort(a,l,p-1)
//     quicksort(a,p+1,h)
//     }
//     return a

// }

//------------------------quickSort
// let a=[1,2,10,5,8,4,3]
// let l=0
// let h=a.length-1
// let sortedArray = quicksort(a,l,h)
// console.log(sortedArray);


// // function partition(a,l,h){
// //     let pivot =a[l]
// //     let i = l+1
// //     let j=h
// //     while(i<=j){
// //         while(a[i]<pivot){
// //             i++
// //         }
// //         while(a[j]>pivot){
// //             j--
// //         }  
// //         if(i<=j){
// //             let temp = a[i]
// //             a[i]=a[j]
// //             a[j]=temp
// //             i++
// //             j--
// //         }
// //     }

// //     let temp = a[l]
// //      a[l]=a[j]
// //     a[j]= temp

// //     return j
// // }

// // function quicksort(a,l,h){
// //     if(l<h){
// //         let p = partition(a,l,h)
// //         quicksort(a,l,p-1)
// //         quicksort(a,p+1,h)
// //     }
// //     return a
// // }

// // let a=[12,13,1,2,3,5,10,4]
// // let l=0
// // let h=a.length-1
// // let sortedArray = quicksort(a,l,h)
// // console.log(sortedArray);

// // function partition(a,l,h){
// //     let pivot = a[l]
// //     let i=l+1
// //     let j =h
// //     while(i<=j){
// //         while(a[i]<pivot){
// //             i++
// //         }
// //         while(a[j]>pivot){
// //             j--
// //         }
// //         if(i<=j){
// //             let temp = a[i]
// //             a[i]=a[j]
// //             a[j]=temp
// //         }
// //     }
// //     temp = a[l]
// //     a[l]=a[j]
// //     a[j]=temp
// //     return j
// // }
// // function quicksort(a,l,h){
// //     if(l<h){
// //         let p = partition (a,l,h)
// //         quicksort(a,l,p-1)
// //         quicksort(a,p+1,h)
// //     }
// //     return a
// // }

// //quicksort
// let a=[13,19,1,4,33,5]
// let l=0
// let h=a.length-1
// let sortedArray = quicksort(a,l,h)
// console.log(sortedArray);

// function partition(a,l,h){
//     let pivot = a[l]
//     let i=l+1
//     let j=h
//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp = a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
//     temp = a[l]
//     a[l]= a[j]
//     a[j]=temp
//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){
//         let p = partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)

//     }
//     return a
// }

//quick sort

// let a=[10,5,2,3,8,9]
// let l=0
// let h=a.length-1

// let sortedArray = quicksort(a,l,h)
// console.log(sortedArray);

// function partition(a,l,h){
//     let pivot =a[l]
//     let i=l+1
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }

//     }
//     temp=a[l]
//     a[l]=a[j]
//     a[j]=temp
//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){
//         let p = partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)
//     }
//     return a
// }

// quick sort
// let a = [1,4,5,10,6,7,3]
// let l = 0
// let h = a.length-1
// let sortedArray = quicksort(a,l,h)
// console.log(sortedArray);

// function partition(a,l,h){
//     let pivot = a[l]
//     let i = l+1
//     let j = h
//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp = a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
//     temp = a[l]
//     a[l]= a[j]
//     a[j]= temp
//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){
//         let p =partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)
//     }
//     return a
// }

// merge sort

// let a=[12,23,2,14,5,6,1]
// let lb=0
// let ub=a.length-1
// mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid =Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let j =mid+1
//     let k=lb
//     let b =[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let z =lb ; z<=ub;z++){
//         a[z]=b[z]
//     }
// }


// let a=[1,55,12,3,4,66,10]
// let lb = 0
// let ub =a.length-1
// mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let k=lb
//     let j=mid+1
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++

//     }

//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let z=lb;z<=ub;z++){
//         a[z]=b[z]
//     }
// }

//merge sort 

// let a=[12,1,4,6,7,90]
// let lb=0
// let ub =a.length-1
// console.log(ub);
// mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let t =lb;t<=ub;t++){
//         a[t]=b[t]
//     }
// }

//merge sort

// let a=[12,4,1,2,3,8,90]
// let lb =0
// let ub= a.length-1


// function merge (a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=mid){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let o =lb ;o<=ub;o++){
//         a[o]=b[o]
//     }
// }


//buble sort

// let a =[10,5,2,90,5]
// function bubbleSort(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         for(j=0;j<limit-1-i;j++){
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


// bubble sort

// let a=[12,1,5,90,4,10]
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

// bubble sort 

// let a=[2,5,10,19,3,4]
// function bubbleSort(a){
//     let limit = a.length

//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j]=a[j +1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubbleSort(a));

// let a=[12,3,10,50,2,4]
// function bubble (a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){

//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j] =a[j+1]
//                 a[j+1]=temp

//             }
//         }
//     }
//     return a
// }

// console.log(bubble(a));

// bubble sort
// let a=[12,1,3,90,40,50]
// function bubble(a){
//     let limit = a.length
//     for (let i=0;i<limit ;i++){
//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j]
//                 a[j] = a[j+1]
//                 a[j+1] = temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubble(a));


// bubble sort

// let a=[12,2,1,10,5,7]
// console.log(bubblesort(a));
// function bubblesort(a){
//     let limit =a.length
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

//bubble sort

// let a=[12,11,1,10,7,8,9]
// console.log(bubblesort(a));
// function bubblesort(a){
//     let limit= a.length
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

//insertion sort

// let a=[10,22,5,9,1,4]
// function insertion(a){
//     let limit=a.length
//     for(let i=1;i<limit;i++){
//         let temp =a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp ){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a

// }
// let result = insertion(a)
// console.log(result);

// let a=[12,2,1,5,9,0]
// function insertionsort(a){
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
// console.log(insertionsort(a));

//selection sort

// let a=[12,3,1,10,33,90]
// function selectionSort(a){
//     let limit= a.length
//     for(let i=0;i<limit-1;i++){
//         let min =i
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
// return a
// }

// console.log(selectionSort(a));
// selection sort
// let a= [12,2,90,1,0,5,7,8]
// function selectionsort(a){
//     let limit= a.length
//     for (i=0;i<limit-1 ;i++){
//         let min =i
//         for(j=i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min=j
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
// console.log(selectionsort(a))

//seletion sort
// let a=[1,2,90,10,4,5]
// function selectionsort(a){
//     let limit =a.length
//     for(i=0;i<limit;i++){
//         let min=i
//         for(j=i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min=j
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
// console.log(selectionsort(a));

// //merge sort
//  let a =[12,3,4,60,40,1]
//  let lb=0
//  let ub=a.length-1

//  mergesort(a,lb,ub)
//  console.log(a);

//  function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid =Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
//  }

//  function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]
//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }
//     for(let y =lb; y<=ub;y++){
//         a[y]=b[y]
//     }
//  }


//merge sort
// let a =[12,1,4,5,70,99,3]
// let lb =0
// let ub=a.length-1
// mergeSort(a,lb,ub)
// console.log(a);

// function mergeSort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergeSort(a,lb,mid)
//         mergeSort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }
// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }
//     for(let z=lb ;z<=ub;z++){
//         a[z]=b[z]
//     }
// }
// // quick sort
// let a=[12,3,4,300,3,0]
// let low =0
// let high =a.length-1
// let sortedArray = quicksort(a,low,high)
// console.log(sortedArray);
// function partition(a,low,high){
//     let i=low+1
//     let pivot =a[low]
//     let j=high

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--
//         }
//     }

//     let temp = a[low]
//     a[low]=a[j]
//     a[j]=temp

//     return j

// }

// function quicksort(a,low,high){
//     if (low<high){
//         let p =partition(a,low,high)
//         quicksort(a,low,p-1)
//         quicksort(a,p+1,high)

//     }
//     return a
// }


// bubble sort 
// let a=[10,2,5,11,90,0]
// function bubblesort(a){
//     let limit =a.length
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
// console.log(bubblesort(a));

//bubble sort
// let a=[2,90,11,3,5,9]
// let lb=0
// let ub=a.length-1
// let sortedArray = mergesort(a,lb,ub)
// console.log(sortedArray);

// function mergesort(a,lb,ub){
//     if(lb,ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }

// }

// let a=[12,4,3,5,9,1]
// let lb=0
// let ub =a.length-1
// mergesort(a,lb,ub)
// console.log(a);
// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let k=lb
//     let b=[]
//     let j=mid+1

//    while(i<=mid && j<=ub){
//     if(a[i]<=a[j]){
//         b[k]=a[i]
//         i++
//     }else{
//         b[k]=a[j]
//         j++
//     }
//     k++
//    }
//    while(i<=mid){
//     b[k]=a[i]
//     i++
//     k++
//    }
//    while(j<=ub){
//     b[k]=a[j]
//     j++
//     k++
//    }
//    for(let m=lb;m<=ub;m++){
//     a[m]=b[m]
//    }
// }

// merge sort


// let a=[12,2,5,7,9,0]
// let ub=a.length-1
// let lb= 0
// mergesort(a,lb,ub)
// console.log(a);



// function merge(a,lb,ub,mid){
//     let i=lb
//     let k=lb
//     let b=[]
//     let j=mid+1

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let o=lb;o<=ub;o++){
//         a[o]=b[o]
//     }
// }

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

//merge sort

// let a=[1,2,6,90,5,0]
// let lb=0
// let ub=a.length-1
// mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }




// function merge(a,lb,ub,mid){
//     let j=mid+1
//     let i=lb
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let r=lb; r<=ub;r++){
//         a[r]=b[r]
//     }
// }
//merge sort

//  let a=[12,2,0,9,5,6,3]
//  let lb=0
//  let ub=a.length-1
//  mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]


//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }

// }


// quick  sort

// let a=[12,2,6,7,90,0]
// let l=0
// let h=a.length-1

// let sortedArray= quicksort(a,l,h)
// console.log(sortedArray);


// function partition(a,l,h){
//     let i=l+1
//     let pivot =a[l]
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }

//         if(i<=j){
//            let temp = a[i]
//            a[i]=a[j]
//            a[j]=temp
//            i++
//            j--
//         }
//     }

//     let temp =a[l]
//     a[l]=a[j]
//     a[j]=temp
//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){
//         let p = partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)
//     }
//     return a
// }

//stack 

// class Node {
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top =null
//         this.size=0
//     }
//     push(data){
//         const newNode = new Node(data)
//         if(!this.top){
//             this.top=newNode
//         }else{
//             newNode.next = this.top 
//         }
//         this.top= newNode
//         this.size++
//     }
//     display(){
//         console.log("stack size = ",this.size);

//         let currentNode = this.top
//         while(currentNode!=null){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     } 

//     pop(){
//         this.top=this.top.next
//     }

//     peek(){
//         return this.top.data
//     }
// }

// const stack = new Stack

// stack.push(12)
// stack.push(80)
// stack.push(70)
// stack.push(60)

// stack.display()
// console.log("last stack element =", stack.peek());


//stack

// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// class Stack {
//     constructor() {
//         this.top = null
//         this.size = 0
//     }

//     push(data) {
//         const newNode = new Node(data)
//         if (!this.top) {
//             this.top = newNode
//         } else {
//             newNode.next = this.top

//         }
//         this.top = newNode
//         this.size++
//     }

//     pop() {
//         let currentNode = this.top
//         if (currentNode != null) {
//             this.top = this.top.next
//         }
//     }

//     display() {
//         let currentNode = this.top
//         while (currentNode) {
//             console.log(currentNode.data);
//             currentNode = currentNode.next
//         }

//     }

//     isEmpty() {
//         return this.size
//     }

//     removemiddle() {
//         let mid = Math.floor((this.size) / 2)
//         const tempStack = new Stack
//         let i = 1
//         let currentNode=this.top
//         while(currentNode){
//             if(i==mid-1){ 
//                 currentNode.next =currentNode.next.next
//                 i++
//             }
//             currentNode =currentNode.next
//         }

//     }
// }

// const stack = new Stack

// stack.push(90)
// stack.push(80)
// stack.push(70)
// stack.push(69)
// // stack.pop()
// // stack.pop()

// stack.display()
// console.log("---------------------------------");
// stack.removemiddle()
// stack.display()
//merge sort

//  let a=[12,2,5,6,9,0]
//  let lb=0
//  let ub=a.length-1
//  mergesort(a,lb,ub)
//  console.log(a);

//  function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
//  }

//  function merge(a,lb,ub,mid){
//     let i=lb
//     let k=lb
//     let b=[]
//     let j=mid+1


//     while(i<=mid&& j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }
//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }
//  }

// let a=[12,33,2,7,9,0]
// let l=0
// let h=a.length-1
// let sortedArray=quicksort(a,l,h)
// console.log(sortedArray);

// function quicksort (a,l,h){
//     if(l<h){
//         let p = partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)
//     }
//     return a
// }

// function partition (a,l,h){
//     let pivot =a[l]
//     let i=l+1
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--
//         }
//     }
//     let temp =a[l]
//     a[l]=a[j]
//     a[j]=temp

//     return j
// }

// bubble sort

// let a=[12,2,0,9,10,8]
// function bubblesort(a){
//     let limit= a.length

//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp =a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }
// console.log(bubblesort(a));

// bubble sort

// let a= [12,22,2,6,0,8]
// function bubblesort(a){
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

// console.log(bubblesort(a));

// let a=[12,6,4,0,9]
// function bubblesort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         for(let j =0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp =a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubblesort(a));

// insertion sort
// let a=[12,9,2,5,1,0]
// function insertionsort(a){
//     let limit= a.length
//     for(let i=0;i<limit;i++){
//        let temp =a[i] 
//        let j=i-1
//        while(j>=0 && a[j]>temp){
//         a[j+1]=a[j]
//         j--
//        }
//        a[j+1]=temp
//     }
// }

// insertionsort(a)
// console.log(a);

//insertion sort
// let a=[12,3,0,9,4,6]
// function insertionsort(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         let temp=a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }

// }
// insertionsort(a)
// console.log(a);

// insertion sort

// let a=[12,4,5,9,0,1]
// function insertionsort(a){
//     let limit = a.length
//     for(let i=0;i<limit;i++){
//         let temp =a[i]
//         let j=i-1
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1] =temp
//     }
// }
// insertionsort(a)
// console.log(a);

// selection sort

// let a=[21,4,5,7,8,0]
// function selectionsort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         let min =i
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
// }
// selectionsort(a)
// console.log(a);

// selection sort

//  let a=[23,7,8,9,12,1,0]
//  function selectionsort(a){
//     let limit=a.length
//     for(let i=0;i<limit;i++){
//         let min =i
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
//  }
//  selectionsort(a)
//  console.log(a);

// //selection sort
// let a=[12,3,4,8,90,0]
// function selectionsort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         let min=i
//         for(let j =i+1;j<limit;j++){
//             if(a[j]<a[min]){
//                 min =j
//             }
//         }
//         if(min!=1){
//             let temp =a[i]
//         a[i]=a[min]
//         a[min]=temp
//         }
//     }
// }
// selectionsort(a)
// console.log(a);

//selection sort

// let a=[12,3,4,60,9,0]
// function selectionsort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         let  min =i
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
// }
// selectionsort(a)
// console.log(a);

// // merge sort
// let a=[12,2,5,9,0]
// let lb=0
// let ub =a.length-1

// mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }



// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let b=[]
//     let k=lb

//     while(i<=mid && j<=ub){
//        if(a[i]<=a[j]){
//         b[k]=a[i]
//         i++
//        }else{
//         b[k]=a[j]
//         j++
//        }
//        k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }

// }

// merge sort

// let a=[12,2,3,5,6,0]
// let lb =0
// let ub =a.length-1
// mergesort(a,lb,ub)
// console.log(a);

// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid = Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }
// }

// merge sort

// let a=[12,2,50,9,0]
// let lb =0
// let ub =a.length-1
// mergesort(a,lb,ub)
// console.log(a);
// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid =Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)

//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }

//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb; x<=ub;x++){
//         a[x]=b[x]
//     }
// }

// quicksort

// let a=[12,4,5,6,7,0]
// let l=0
// let h=a.length-1

// let SortedArray = quicksort(a,l,h)
// console.log(SortedArray);


// function partition(a,l,h){
//     let pivot =a[l]
//     let i=l+1
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
//     let temp = a[l]
//     a[l]= a[j]
//     a[j]=temp

//     return j

// }

// function quicksort(a,l,h){
//     if(l<h){
//         let p =partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)

//     }
//     return a
// }

// quick sort

// let a =[12,2,6,7,0]
// let l=0
// let h=a.length-1

// let sortedArray = quicksort(a,l,h)
// console.log(sortedArray);


// function quicksort(a,l,h){
//     if(l<h){
//         let p= partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)
//     }
//     return a
// }



// function partition (a,l,h){
//     let pivot =a[l]
//     let i=l+1
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--
//         }

//     }
//     let temp=a[l]
//     a[l]=a[j]
//     a[j]=temp
//     return j
// }

// bubble sort
// let a=[12,3,4,6,0]
// function bubblesort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp =a[j]
//                 a[j] =a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubblesort(a));

//bubble sort
// let a=[10,9,5,4,1,0]
// function bubblesort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp =a[j]
//             a[j] =a[j+1]
//             a[j+1]=temp
//         }
//     }
//    }
//    return a
// }

// console.log(bubblesort(a));

// insertion sort

// let a=[12,3,7,9,0,2]
// function insertionsort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
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

// console.log(insertionsort(a));

// insertion sort
// let a=[12,2,0,9,7,6,5]
// function insertionsort(a){
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

// console.log(insertionsort(a));

// inserton sort
// let a=[12,2,3,5,0,1]
// function insertionsort(a){
//     let limit= a.length
//     for(let i=0;i<limit;i++){
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

// console.log(insertionsort(a));

// selection sort
// let a=[12,22,7,0,1]
// function selectionsort(a){
//     let limit=a.length
//     for(let i=0;i<limit;i++){
//         let min=i
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

// console.log(selectionsort(a));

//selection sort

// let a=[12,2,0,88,90,3]
// function selectionsort(a){
//     let limit=a.length
//     for(let i=0;i<limit;i++){
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

// console.log(selectionsort(a));

// //selectionsort
// let a=[12,3,5,9,0]
// function selectionsort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         let min=i
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

// console.log(selectionsort(a));

// bubble sort
// let a=[23,5,9,0,1,2]
// function bubblesort(a){
//     let limit =a.length
//     for(let i=0;i<limit;i++){
//         for(let j=0;j<limit-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp =a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
//     return a
// }

// console.log(bubblesort(a));

// // mergesort
// let a=[12,2,3,0,9,7]
// let lb=0
// let ub=a.length-1
// mergesort(a,lb,ub)
// console.log(a);
// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let k=lb
//     let j=mid+1
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++

//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x] = b[x]
//     }
// }

// mergesort

// let a=[12,3,4,0,9]
// let lb=0
// let ub=a.length-1
// mergesort(a,lb,ub)
// console.log(a);


// function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,ub,mid)
//     }
// }

// function merge(a,lb,ub,mid){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid && j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }
// }

// // quick sort
// let a=[12,2,0,9,80,3]
// let l=0
// let h=a.length-1
// let sortedArray = quicksort(a,l,h)
// console.log(sortedArray);

// function partition(a,l,h){
//     let i=l+1
//     let pivot =a[l]
//     let j=h

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }

//         if(i<=j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--
//         }
//     }
//     let temp = a[l]
//     a[l]=a[j]
//     a[j]=temp

//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){

//         let p = partition(a,l,h)
//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)

//     }
//     return a
// }

// quick sort
// let a=[1,34,0,9,7,90]
// let l=0
// let h=a.length-1
// let sortedArray= quicksort(a,l,h)
// console.log(sortedArray);


// function partition (a,l,h){
//     let i=l+1
//     let j=h
//     let pivot=a[l]

//     while(i<=j){
//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }
//         if(i<=j){
//             let temp =a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--
//         }
//     }
//     let temp =a[l]
//     a[l]=a[j]
//     a[j]=temp

//     return j
// }

// function quicksort(a,l,h){
//     if(l<h){
//         let p =partition(a,l,h)

//         quicksort(a,l,p-1)
//         quicksort(a,p+1,h)
//     }
//     return a
// }

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//         this.size=0
//     }

//     push(data){

//         const newNode = new Node(data)
//         if(!this.top){
//             this.top=newNode
//             this.size++
//         }else{
//             newNode.next = this.top
//             this.top =newNode
//             this.size++
//         }
//     }
//     pop(){
//         this.top =this.top.next
//     }

//     display(){
//         let currentNode = this.top
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }

// }

// const stack = new Stack
// stack.push(10)
// stack.push(90)
// stack.push(80)
// stack.push(70)
// stack.display()
// console.log("-----------------------------");
// stack.pop()
// stack.pop()

// stack.display()
// //Queue
// class Node{
//     constructor(data){
//         this.data=data
//         this.next =null
//     }
// }

// class Queue{
//     constructor(){
//         this.front =null
//         this.rear=null
//     }
//     enqueue(data){
//         const newData = new Node(data)
//         if(!this.rear){
//             this.front=newData
//         }else{
//             this.rear.next =newData
//         }
//         this.rear=newData

//     }

//     dequeue(){
//         this.front=this.front.next
//         if(this.front==null){
//             this.rear=null
//         }
//     }

//     display(){
//         let currentNode= this.front
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode= currentNode.next
//         }
//     }
// }

// const queue = new Queue
// queue.enqueue(12)
// queue.enqueue(90)
// queue.enqueue(80)

// queue.display()
// console.log("--------------------------");
// queue.dequeue()
// queue.display()


// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false






// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }

//     push(data){
//         const newData= new Node(data)
//         if(!this.top){
//             this.top=newData
//            this.size++
//         }else{
//             newData.next =this.top
//             this.top=newData
//             this.size++
//         }
//     }

//     middle(){
//         let mid = Math.floor(this.size/2)
//         console.log(mid);
//         let i=0
//         let currentNode=this.top
//         while (currentNode) {
//             if(mid==i-1){
//                 currentNode.next =currentNode.next.next
//                 i++
//                 return
//             }
//             currentNode = currentNode.next
//         }
//     }
//     display(){
//         let currentNode=this.top
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }

// }

// const stack= new Stack
// stack.push(90)
// stack.push(80)
// stack.push(70)
// stack.push(60)
// stack.display()
// console.log("-----------------");
// stack.middle()
// stack.display()

// bst

// class Node{
//     constructor(data){
//         this.data =data
//         this.left=null
//         this.right =null
//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root=null
//     }

//     insert(data){
//         const newNode = new Node(data)
//         let currentNode = this.root

//        if(!currentNode){
//         this.root = newNode
//        }else{
//         while(true){
//             if(data<currentNode.data){
//                 if(currentNode.left==null){
//                     currentNode.left=newNode
//                     break
//                 }else{
//                     currentNode=currentNode.left
//                 }
//             }else{
//                 if(currentNode.right==null){
//                     currentNode.right =newNode
//                     break
//                 }
//                 currentNode=currentNode.right
//             }

//         }
//        }
//     }
// }

// const bst =new BinerySearchTree
// bst.insert(90)
// bst.insert(80)
// bst.insert(70)
// bst.insert(40)
// bst.insert(30)

// bst insertion and implementation

// class Node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root =null
//     }

//     insert(data){
//         const newNode =new Node(data)
//         let currentNode = this.root

//         if(!currentNode){
//             this.root = newNode
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left =newNode
//                         break
//                     }else{
//                         currentNode = currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right =newNode
//                         break
//                     }else{
//                         currentNode = currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }

//    inOrderHelper(node){
//     if(node){
//         this.inOrderHelper(node.left)
//         console.log(node.data);
//         this.inOrderHelper(node.right)
//     }
//    }
// }

// const bst =new BinerySearchTree

// bst.insert(90)
// bst.insert(80)
// bst.insert(70)
// bst.insert(50)
// bst.inOrder()

// bst insertion 

// class Node{
//     constructor(data){
//         this.data =data
//         this.left =null
//         this.right = null
//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root =null
//     }

//     insert(data){
//         const newNode =new Node(data)
//         let currentNode =this.root
//         if(!currentNode){
//             this.root =newNode
//         }else{
//             while(true){
//                 if( data<currentNode.data){
//                    if(currentNode.left==null){
//                     currentNode.left=newNode
//                     break
//                    }else{
//                     currentNode = currentNode.left
//                    }
//                 }else{
//                     if(currentNode.right == null){
//                         currentNode.right = newNode
//                         break
//                     }else{
//                         currentNode =currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }
//     inOrderHelper(node){
//         if(node){
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.right)
//         }
//     }

//     preOrder(){
//         this.preOrderHelper(this.root)
//     }
//     preOrderHelper(node){
//         if(node){
//             console.log(node.data);
//             this.preOrderHelper(node.left)
//             this.preOrderHelper(node.right)
//         }
//     }

//     postOrder(){
//         this.postOrderHelper(this.root)
//     }

//     postOrderHelper(node){
//         if(node){
//             this.postOrderHelper(node.left)
//             this.postOrderHelper(node.right)
//             console.log(node.data);
//         }
//     }

//     contains(data){
//         let currentNode=this.root
//         while(currentNode!=null){
//             if(data<currentNode.data){
//                 currentNode=currentNode.left
//             }else if(data>currentNode.data){
//                 currentNode=currentNode.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }
// }


// const bst = new BinerySearchTree

// bst.insert(60)
// bst.insert(80)
// bst.insert(70)
// bst.insert(50)
// bst.insert(40)
// bst.inOrder()

// console.log("-----------------------------");

// bst.preOrder()

// console.log("-----------------------------");
//  bst.postOrder()
// console.log( bst.contains(0));

//bst 

// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class BinerySearchTree {
//     constructor() {

//         this.root = null
//     }

//     insert(data) {
//         const newNode = new Node(data)
//         let currentNode = this.root
//         if (!currentNode) {
//             this.root = newNode
//         } else {
//             while (true) {
//                 if (data < currentNode.data) {
//                     if (currentNode.left == null) {
//                         currentNode.left = newNode
//                         break
//                     } else {
//                         currentNode = currentNode.left
//                     }
//                 } else {
//                     if (currentNode.right == null) {
//                         currentNode.right = newNode
//                         break
//                     } else {
//                         currentNode = currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder() {
//         this.inOrderHelper(this.root)
//     }

//     inOrderHelper(node) {
//         if (node) {
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.right)

//         }
//     }
//     preOrder() {
//         this.preOrderHelper(this.root)
//     }
//     preOrderHelper(root) {
//         if (root) {
//             console.log(root.data);
//             this.inOrderHelper(root.left)
//             this.inOrderHelper(root.right)
//         }
//     }

//     postOrder() {
//         this.postOrderHelper(this.root)
//     }

//     postOrderHelper(root) {
//         if (root) {
//             this.postOrderHelper(root.left)
//             this.postOrderHelper(root.right)
//             console.log(root.data);
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.data
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.data
//         } else {
//             return this.max(root.right)
//         }
//     }

//     contains(data) {
//         let currentNode = this.root
//         console.log(currentNode);
//         while (currentNode != null) {
//             if (currentNode.data == data) {
//                 return true
//             } else if (data < currentNode.data) {
//                 currentNode = currentNode.left
//             } else {
//                 currentNode = currentNode.right
//             }
//         }
//         return false

//     }

//     PrintLeafs(root){
//         if(!root){
//             return 
//         }
//         if(root.left==null && root.right==null){
//             console.log(root.data);
//         }
//         if(root.left!==null){
//             this.PrintLeafs(root.left)
//         }
//         if(root.right!==null){
//             this.PrintLeafs(root.right)
//         }
//     }


// }

// const bst = new BinerySearchTree
// bst.insert(50)
// bst.insert(80)
// bst.insert(87)
// bst.insert(45)
// bst.insert(33)
// bst.inOrder()
// console.log("-------------------------------");
// bst.preOrder()
// console.log("-------------------------------");
// bst.postOrder()
// console.log(bst.min(bst.root), "is minimum value");

// console.log(bst.max(bst.root), "is the maximum value");

// console.log(bst.contains(90));
// console.log(bst.contains(1));
// bst.PrintLeafs(bst.root)

// class MinHeap {
//     constructor(){
//         this.heap=[]

//     }

//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }

//     shiftDown(currentIndex){
//         let endIdx =this.heap.length-1
//         let leftIdx =this.leftChild(currentIndex);
//         while(leftIdx<endIdx){
//             let rightIdx =this.rightChild(currentIndex)
//             let idxToShift;
//             if(rightIdx<= endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 idxToShift = rightIdx
//             }else{
//                 idxToShift = leftIdx
//             }
//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex = idxToShift
//                 leftIdx = this.leftChild(currentIndex)

//             }else{
//                 return;
//             }
//         }
//     }

//     parent(i){
//         return Math.floor((i-1)/2);
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }

// let array = [40,6, 2, 8];
//   let heap = new MinHeap();
//   heap.buildHeap(array);
//   heap.display();


// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }

//    buildHeap(array){
//     this.heap =[...array]
//     for(let i=this.parent(this.heap.length-1);i>=0;i--){
//         this.shiftDown(i)
//     }
//    }
//     shiftDown(currentIndex){
//         let endIdx = this.heap.length-1
//         let leftIdx = this.leftChild(currentIndex)
//         while(leftIdx<=endIdx){
//             let rightIdx = this.rightChild(currentIndex)
//             let idxToShift;
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 idxToShift =rightIdx
//             }else{
//                 idxToShift =leftIdx
//             }
//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex =idxToShift
//                 leftIdx = this.leftChild(currentIndex)

//             }else{
//                 return
//             }
//         }



//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }

//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }

// }

// let a=[12,2,5,7,9]
// let heap = new MinHeap()
// heap.buildHeap(a)
// heap.display()

// // heap
// class minHeap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(array){
//         this.heap =[...array]
//         for(let i=this.parent(this.heap.length -1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }

//     shiftDown(currentIndex){
//         let endIdx =this.heap.length-1
//         let leftIdx = this.leftChild(currentIndex)
//         while(leftIdx<=endIdx){
//             let rightIdx = this.rightChild(currentIndex)
//             let idxToShift ;
//             if(leftIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 idxToShift =rightIdx
//             }else{
//                 idxToShift =leftIdx
//             }

//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex =idxToShift
//                 leftIdx = this.leftChild(currentIndex)

//             }else{
//                 return;
//             }
//         }
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }


// }

// const heap = new minHeap()

// let arr =[12,3,2,1]
// heap.buildHeap(arr)
// heap.display()


//min heap

// class MinHeap{
//     constructor(){
//         this.heap =[]
//     }

//     buildHeap(arr){
//         this.heap=[...arr]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftdown(i)
//         }
//     }

//     parent(i){
//         return 
//     }

//     shiftdown(currentIndex){
//         let leftIdx= this.leftChild(currentIndex)
//         let endIdx= this.heap.length-1
//         while(leftIdx<=endIdx){
//             let rigthIdx =this.rightChild(currentIndex)
//             let idxToShift
//             if(leftIdx<=endIdx && this.heap[rigthIdx]<this.heap[leftIdx]){
//                 idxToShift = rigthIdx

//             }else{
//                 idxToShift =leftIdx
//             }
//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex =idxToShift
//                 leftIdx =this.leftChild(currentIndex);

//             }else{
//                 return;
//             }

//         }
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     leftChild(i){
//         return i*2+1
//     }

//     rightChild(i){
//         return i*2+2
//     }

//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }

// }

// let heap = new MinHeap()
// let a=[23,4,6,3,1]
// heap.buildHeap(a)
// heap.display()


// min heap

// class Minheap{
//     constructor(){
//         this.heap =[]
//     }

//     buildHeap(arr){
//         this.heap =[...arr]
//         for(let i = this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }

//     shiftDown(currentIndex){
//         let endIdx = this.heap.length-1
//         let leftIdx = this.leftChild(currentIndex)

//         while(leftIdx<=endIdx){
//             let rigthIdx =this.rightChild(currentIndex)
//             let idxToShift ;

//             if(leftIdx<=endIdx && this.heap[rigthIdx]<this.heap[leftIdx]){
//                 idxToShift =rigthIdx

//             }else{
//                 idxToShift = leftIdx
//             }

//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex =idxToShift
//                 leftIdx =this.leftChild(currentIndex)


//             }else{
//                 return
//             }
//         }
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }


// }

// let heap =new Minheap()
// let a=[32,1,2,6,8]
// heap.buildHeap(a)
// heap.display()

//heap 

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(arr){
//         this.heap=[...arr]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftdown(i)
//         }
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     shiftdown(currentIndex){
//         let endIdx = this.heap.length-1
//         let leftIdx = this.leftChild(currentIndex)
//         while(leftIdx<=endIdx){
//             let rigthIdx = this.rightChild(currentIndex)
//             let idxToShift;
//             if(leftIdx<=endIdx && this.heap[rigthIdx]<this.heap[leftIdx]){
//                 idxToShift = rigthIdx
//             }else{
//                 idxToShift = leftIdx
//             }

//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex = idxToShift
//                 leftIdx = this.leftChild(currentIndex)

//             }else{
//                 return
//             }
//         }

//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }

//     leftChild(i){
//         return i*2+1
//     }

//     rightChild(i){
//         return i*2+2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }

// let a=[12,2,5,7,9]
// let heap = new minHeap()
// heap.buildHeap(a)
// heap.display()

//binery tree

// class Node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right = null

//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root=null
//     }

//     insert(data){
//         const newNode = new Node(data)
//         let currentNode =this.root

//         if(!currentNode){
//             this.root = newNode
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left== null){
//                         currentNode.left=newNode
//                         break
//                     }else{
//                         currentNode = currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=newNode
//                         break
//                     }else{
//                         currentNode = currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }

//     inOrderHelper(node){
//         if(node){
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.right)
//         }

//     }
// }

// const bst = new BinerySearchTree
// bst.insert(90)
// bst.insert(80)
// bst.insert(79)
// bst.insert(20)
// bst.inOrder()


//bst

// class Node {
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right = null

//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root=null
//     }

//     insert(data){
//         const newNode =new Node(data)
//         let currentNode = this.root

//         if(!currentNode){
//             this.root =newNode
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left = newNode
//                         break
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=newNode
//                         break
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }

//     inOrderHelper(node){
//         if(node){
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.right)
//         }
//     }
// }

// const bst =new BinerySearchTree
// bst.insert(90)
// bst.insert(80)
// bst.insert(70)
// bst.insert(50)
// bst.inOrder()

//bst

// class Node{
//     constructor(data){
//         this.data = data
//         this.left=null
//         this.right=null
//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root =null
//     }

//     insert (data){
//         const newNode = new Node(data)
//         let currentNode = this.root
//         if(!currentNode){
//             this.root = newNode

//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=newNode
//                         break
//                     }else{
//                         currentNode = currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right = newNode
//                         break
//                     }else{
//                         currentNode =currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }

//     inOrderHelper(node){
//         if(node){
//         this.inOrderHelper(node.left)
//         console.log(node.data);
//         this.inOrderHelper(node.right)
//         }
//     }

//     preOrder(){
//         this.preOrderHelper(this.root)
//     }
//     preOrderHelper(node){
//         if(node){
//             console.log(node.data);
//             this.preOrderHelper(node.left)
//             this.preOrderHelper(node.right)
//         }
//     }

//     postOrder(){
//         this.postOrderHelper(this.root)
//     }

//     postOrderHelper(node){
//         if(node){
//             this.postOrderHelper(node.left)
//             this.postOrderHelper(node.right)
//             console.log(node.data);
//         }
//     }

//     isBst(){
//         return this.isBstHelper(this.root,0,Infinity)
//     }

//     isBstHelper(root,min,max){
//         if(root==null){
//             return true
//         }
//         if(root.data<min || root.data>max){
//             return false
//         }
//         return(
//             this.isBstHelper(root.left,min,root.data-1) &&
//             this.isBstHelper(root.right,root.data+1,max)
//         )
//     }
// }

// const bst = new BinerySearchTree
// bst.insert(20)
// bst.insert(90)
// bst.insert(40)
// bst.insert(30)
// bst.inOrder()

// console.log("-------------------------------");
// bst.preOrder()

// console.log("-------------------------------");
// bst.postOrder()
// console.log(bst.isBst());

//bst 

// class Node{
//     constructor(data){
//         this.data =data
//         this.left=null
//         this.right =null
//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root=null
//     }

//     insert (data){
//         const newData = new Node(data)
//         let currentNode = this.root
//         if(!currentNode){
//             this.root = newData
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left = newData
//                         break
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right = newData
//                         break

//                     }else{
//                         currentNode = currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }

//     inOrderHelper(node){
//         if(node){
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.right)
//         }
//     }

//     preOrder(){
//         this.preOrderHelper(this.root)
//     }

//     preOrderHelper(node){
//         if(node){
//             console.log(node.data);
//             this.preOrderHelper(node.left)
//             this.preOrderHelper(node.right)
//         }

//     }

//     postOrder(){
//         this.preOrderHelper(this.root)
//     }
//     postOrderHelper(node){
//         if(node){
//             this.postOrderHelper(node.left)
//             this.postOrderHelper(node.right)
//             console.log(node.data);
//         }
//     }

//     isBst (){
//        return this.isBstHelper(this.root,0,Infinity)
//     }
//     isBstHelper(root,min,max){
//         if(root==null){
//             return true
//         }
//         if(root.data<min || root.data>max){
//             return false
//         }
//          return (this.isBstHelper(root.left,min,root.data-1)&&
//                  this.isBstHelper(root.right,root.data+1,max))

//     }

//     contains(data){
//         let currentNode = this.root
//         while(currentNode){
//             if(currentNode.data==data){
//                 return true
//             }
//             else if(data<currentNode.data){
//                 currentNode=currentNode.left
//             }else{
//                 currentNode =currentNode.right
//             }
//         }
//         return false
//     }
// }

// const bst = new BinerySearchTree
// bst.insert(90)
// bst.insert(80)
// bst.insert(50)
// bst.insert(30)
// bst.insert(8)
// bst.inOrder()
// console.log("--------------------------");
// bst.preOrder()
// console.log("-----------------------------");
// bst.postOrder()
// console.log("--------------------------------");
// console.log("is bst :",bst.isBst());

// console.log("30 contains ?",bst.contains(30));

// class Node{
//     constructor(data){
//         this.data=data
//         this.left = null
//         this.right = null
//     }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root = null
//     }

//     insert (data){
//         const newNode = new Node(data)
//         let currentNode = this.root

//         if(!currentNode){
//             this.root = newNode
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left = newNode
//                         break
//                     }else{
//                         currentNode = currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right =newNode
//                         break
//                     }else{
//                         currentNode = currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     contains(data){
//         let currentNode = this.root
//         while(currentNode){
//             if(currentNode.data==data){
//                 return true
//             }else if(data <currentNode.data){
//                 currentNode = currentNode.left
//             }else{
//                 currentNode = currentNode.right
//             }
//         }
//         return false
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }
//     inOrderHelper(node){
//         if(node){
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.left)
//         }
//     }

//     preOrder(){
//         this.preOrderHelper(this.root)
//     }

//     preOrderHelper(node){
//         if(node){
//             console.log(node.data);

//         }
//     }
// }

// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     shiftDown(currentIndex){
//         let leftIdx= this.leftChild(currentIndex)
//         let endIdx = this.heap.length-1

//         while(leftIdx<=endIdx){
//             let rightIdx =this.rightChild(currentIndex)
//             let idxToShift 
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 idxToShift = rightIdx
//             }else{
//                 idxToShift = leftIdx
//             }

//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex=idxToShift
//                 leftIdx = this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }

//     }

//     shiftUp(currentIndex){
//         let parentIndex = this.parent(currentIndex)
//         while(currentIndex > 0 && this.heap[parentIndex]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIndex)
//             currentIndex=parentIndex
//             parentIndex=this.parentIndex(currentIndex)
//         }
//     }


//     insert (data){
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }

//     remove(){
//         this.swap(0,this.heap.length-1)
//         this.heap.pop();
//         this.shiftDown(0)

//     }

// remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftDown(0)
// }

// remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftDown(0)
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length)
// }

// 

// insert (value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.lenght-1)
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }
// insert(value){

//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)

// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.lenght-1)
// }

// insert (value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }

// shiftUp(currentIndex){
//     let parentIndex = this.parent(currentIndex)
//     while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex]){
//         this.swap(currentIndex,parentIndex)
//         currentIndex = parentIndex
//         parentIndex=this.parent(currentIndex)
//     }
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }

// remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftDown(0)
// }
// }

// trie

// class TrieNode{
//     constructor(){
//         this.children=new Map()
//     }
// }

// class Trie{
//     constructor(str){
//         this.root=new TrieNode();
//         this.endSymbol ="*"
//         this.populateSuffixTrie(str)
//     }
// }


// class TrieNode{
//     constructor(){
//         this.children= new Map()
//     }
// }

// class TrieNode{
//     constructor(){
//         this.children = new Map()
//     }
// }

// class TrieNode {
//     constructor(){
//         this.children=new Map()
//     }
// }

// class TrieNode{
//     constructor(){
//         this.childern= new Map()
//     }
// }

// class TrieNode{
//     constructor(){
//         this.childern= new Map()
//     }
// }

// class TrieNode{
//     constructor(){
//         this.childern = new Map()
//     }
// }

// class Trie{
//     constructor(str){
//         this.root = new TrieNode()
//         this.endSymbol="*"
//         this.populateSuffixTrie(str)

//     }
// }


// class TrieNode{
//     constructor(){
//         this.children = new Map()
//     }
// }

// class Trie{
//     constructor(str){
//         this.root = new TrieNode()
//         this.endSymbol = "*"
//         this.populateSuffixTrie(str)
//     }
// }

// class TreiNode {
//     constructor() {
//         this.children = new Map()
//     }
// }

// class Trie {
//     constructor(str) {
//         this.root = new TreiNode()
//         this.endSymbol = "*"
//         this.populateSuffixTrie(str)
//     }



// populateSuffixTrie(str){
//     for(let i=0;i<str.length;i++){
//         this.insertSubstring(i,str)
//     }
// }


// populateSuffixTrie(str){
//     for(let i=0;i<str.length;i++){
//         this.insertSubString(i,str)
//     }
// }

// populateSuffixTrie(str) {
//     for (let i = 0; i < str.length; i++) {
//         this.insertSubString(i, str)
//     }
//  }
// insertSubString(index, str) {
//     let node = this.root

//     for (let i = index; i < str.length; i++) {
//         const letter = str.charAt(i)

//         if (!node.children.has(letter)) {
//             node.children.set(letter, new TreiNode())
//         } else {
//             node = node.children.get(letter)
//         }
//     }
//     node.children.set(this.endSymbol, null)
// }

// insertSubString(index,str){
//     let node = this.root
//     for(let i=index;i<str.length;i++){
//         let letter = str.charAt(i)
//         if(!node.children.has(letter)){
//             node.children.set(letter,new TreiNode())
//         }else{
//             node = node.children.get(letter)
//         }

//     }
//     node.children.set(this.endSymbol,null)
// }

// insertSubString(index,str){
//     let node =this.root
//     for(let i=index;i<str.length;i++){
//         let letter = str.charAt(i)
//         if(!node.children.has(letter)){
//             node.children.set(letter,new TreiNode())
//         }
//             node =node.children.get(letter)

//     }
//     node.children.set(this.endSymbol,null)
// }

// contains(str){
//     let node = this.root
//     for(let i=0;i<str.length;i++){
//         const letter=str.charAt(i)
//         if(!node.children.has(letter)){
//             return false
//         }
//         node=node.children.get(letter)
//     }
//     return node.children.has(this.endSymbol)

// }

//     contains(str){
//         let node =this.root
//         for(let i=0;i<str.length;i++){
//             const letter =str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false
//             }
//               node= node.children.get(letter)

//         }
//         return node.children.has(this.endSymbol)
//     }


// }

// const trie = new Trie("tom")
// console.log(trie.contains("tom"));

//bst

// class Node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//         }
// }

// class BinerySearchTree{
//     constructor(){
//         this.root =null
//     }

//     insert (data){
//         const newData= new Node(data)

//         let currentNode = this.root
//         if(!currentNode){
//             this.root=newData
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null ){
//                         currentNode.left= newData
//                         break
//                     }else{
//                         currentNode =currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right = newData
//                         break
//                     }else{
//                         currentNode =currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inOrder(){
//         this.inOrderHelper(this.root)
//     }
//     inOrderHelper(node){
//         if(node){
//             this.inOrderHelper(node.left)
//             console.log(node.data);
//             this.inOrderHelper(node.right)
//         }
//     }

//     preOrder(){
//         this.preOrderHelper(this.root)
//     }
//     preOrderHelper(node){
//         if(node){
//             console.log(node.data);
//             this.preOrderHelper(node.left)
//             this.preOrderHelper(node.right)
//         }
//     }

//     postOrder(){
//         this.postOrderHelper(this.root)
//     }

//     postOrderHelper(node){
//         if(node){
//             this.postOrderHelper(node.left)
//             this.postOrderHelper(node.right)
//             console.log(node.data);
//         }
//     }

//     contains(data){
//         let currentNode =this.root

//         while(currentNode){
//             if(currentNode.data==data){
//                 return true
//             }else if(data<currentNode.data){
//                 currentNode = currentNode.left
//             }else{
//                 currentNode = currentNode.right
//             }
//         }
//         return false
//     }

//     printLeafs(node){
//        if(!node){
//         return
//        }
//        if(node.left==null && node.right==null){
//         console.log(node.data);
//        }
//        if(node.left!=null){
//         this.printLeafs(node.left)
//        }
//        if(node.right!=null){
//         this.printLeafs(node.right)
//        }

//     }

//     min(node){
//         if(!node.left){
//             return node.data
//         }else{
//             return this.min(node.left)
//         }
//     }

//     Max(node){
//         if(!node.right){
//             return node.data
//         }else{
//             return this.Max(node.right)
//         }
//     }
//     isBst(){
//             return  this.isBstHelper(this.root,0,Infinity)
//     }

//     isBstHelper(node,min,max){
//         if(!node){
//             return true
//         }else if(node.data<min || node.data>max){
//             return false
//         }else{
//             return (
//                 this.isBstHelper(node.left,min,node.data-1) &&
//                 this.isBstHelper(node.right,node.data+1,max)
//             )
//         }
//     }
// }


// const bst = new BinerySearchTree
// bst.insert(90)
// bst.insert(80)
// bst.insert(50)
// bst.insert(100)
// bst.insert(101)
// bst.inOrder()
// console.log("--------------------------------------");
// bst.preOrder()

// console.log("--------------------------");
// bst.postOrder()
// console.log("is 90 contains ",bst.contains(90));
// console.log("is 0 contains ",bst.contains(0));
// bst.printLeafs(bst.root)
// console.log("min value is",bst.min(bst.root));
// console.log("max value is",bst.Max(bst.root));
// console.log(bst.isBst());



// //heapp
// class MinHeap {
//     constructor() {
//         this.heap = []
//     }

//     buildHeap(arr) {
//         this.heap = [...arr]
//         for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//             this.ShiftDown(i)
//         }

//     }
//     leftChild(i) {
//         return i * 2 + 1
//     }
//     rightChild(i) {
//         return i * 2 + 2
//     }

//     ShiftDown(currentIndex) {
//         let leftIdx = this.leftChild(currentIndex)
//         let endIdx = this.heap.length - 1
//         while (leftIdx <= endIdx) {
//             let rigthIdx = this.rightChild(currentIndex)
//             let idxToShift
//             if (rigthIdx <= endIdx && this.heap[rigthIdx] < this.heap[leftIdx]) {
//                 idxToShift = rigthIdx
//             } else {
//                 idxToShift = leftIdx
//             }
//             if (this.heap[currentIndex] > this.heap[idxToShift]) {
//                 this.swap(currentIndex, idxToShift)
//                 currentIndex = idxToShift
//                 leftIdx = this.leftChild(currentIndex)

//             } else {
//                 return
//             }
//         }

//     }
//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//     }

//     parent(i) {
//         return Math.floor((i - 1) / 2)
//     }

//     shiftUp(currentIndex){
//         let parentIndex =this.parent(currentIndex)
//         while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIndex)
//             currentIndex=parentIndex
//             parentIndex = this.parent(currentIndex)
//         }
//     }

//     remove(){
//         this.swap(0,this.heap.length-1)
//         this.heap.pop()
//         this.ShiftDown(0)
//     }

//     insert (value){
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }

//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }

// let heap =new MinHeap()
// let a=[12,2,3,80,9]
// heap.buildHeap(a)
// heap.display()
// heap.insert(8)
// console.log("---------------------------");
// heap.remove()
// heap.display()


//heap

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     buildHeap(arr){
//         this.heap=[...arr]
//         for(let i=this.parent(this.heap.length-1);i>=0;i++){
//             this.shiftDown(i)
//         }
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rigthChild(i){
//         return i*2+2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     shiftDown(currentIndex){
//         let leftIdx = this.leftChild(currentIndex)
//         let endIdx = this.heap.length-1
//         while(leftIdx<=endIdx){
//             let rigthIdx = this.rigthChild(currentIndex)
//             let idxToShift
//             if(rigthIdx<=endIdx && this.heap[rigthIdx]<this.heap[leftIdx]){
//                 idxToShift= rigthIdx
//             }else{
//                 idxToShift = leftIdx
//             }
//             if(this.heap[currentIndex]>this.heap[idxToShift]){
//                 this.swap(currentIndex,idxToShift)
//                 currentIndex=idxToShift
//                 leftIdx=this.leftChild(currentIndex)    
//             }else{
//                 return
//             }
//         }

//     }

    // shiftUp(currentIndex){
    //     let parentIndex = this.parent(currentIndex)
    //     while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex]){
    //         this.swap(currentIndex,parentIndex)
    //         currentIndex=parentIndex
    //         parentIndex = this.parent(currentIndex)
    //     }
    // }

//     shiftUp(currentIndex){
//         let parentIndex = this.parent(currentIndex)
//         while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIndex)
//             currentIndex = parentIndex
//             parentIndex = this.parent(currentIndex)
//         }
//     }

//     insert(value){
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }

//     remove(){
//         this.swap(0,this.heap.length-1)
//         this.heap.pop()
//         this.shiftDown(0)

//     }
//     display(){
//         for(let i=0;i<this.heap.length-1;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }

// const heap = new minHeap()

// class Graph{
//     constructor(){
//         this.map=new Map()
//     }

//     addVertex(vertex){
//         this.map.set(vertex,[])
//     }

//     insert (vertex,edge,isbidirection=true){
//         if(!this.map.has(vertex)){
//             this.addVertex(vertex)
//         }
//         if(!this.map.has(edge)){
//             this.addVertex(edge)
//         }
//         this.map.get(vertex).push(edge)
//         if(isbidirection){
//             this.map.get(edge).push(vertex)
//         }
//     }
// }

// class Graph{
//     constructor(){
//         this.map=new Map()
//     }

//     addVertex(vertex){
//         this.map.set(vertex,[])
//     }

//     insert (vertex,edge,isbidirection = false){
//         if(!this.map.has(vertex)){
//             this.addVertex(vertex)
//         }
//         if(!this.map.has(edge)){
//             this.addVertex(edge)
//         }
//         this.map.get(vertex).push(edge)
//         if(isbidirection){
//             this.map.get(edge).push(vertex)
//         }
//     }
// }

// //graph 
// class Graph{
//     constructor(){
//         this.map = new Map()
//     }

//     addVertex(vertex){
//         this.map.set(vertex,[])
//     }

//     insert (vertex,edge,isbidirection=false){
//         if(!this.map.has(vertex)){
//             this.addVertex(vertex)
//         }
//         if(!this.map.has(edge)){
//             this.addVertex(edge)

//         }
//         this.map.get(vertex).push(edge)
//         if(isbidirection){
//             this.map.get(edge).push(vertex)
//         }



//     }

    
    // delete(vertex){
    //     if(this.map.has(vertex)){
    //         let edges = this.map.get(vertex)
    //         for(let edge of edges){
    //             const edgeArray = this.map.get(edge)
    //             const index  = edgeArray.indexOf(vertex) 
    //             if(index >=0){
    //                 edgeArray.splice(index,1)
    //             }         
    //         }
    //         this.map.delete(vertex)
            
    //     }
    // }

    // delete(vertex){
    //     if(!this.map.has(vertex)){
    //         let edges = this.map.get(vertex)
    //         for(let edge of edges){
    //             let edgeArray = this.map.get(edge)
    //             let index = edgeArray.indexOf(vertex)
    //             if(index>=0){
    //                 edgeArray.splice(index,1)
    //             }
    //         }
    //         this.map.delete(vertex)
    //     }
    // }

    // delete(vertex){
    //     if(!this.map.has(vertex)){
    //         let edges = this.map.get(vertex)
    //         for(let edge of edges){
    //             let edgeArray = this.map.get(edge)
    //             let index = edgeArray.indexOf(vertex)
    //             if(index>0){
    //                 edgeArray.splice(index,1)
    //             }
    //         }
    //         this.map.delete(vertex)
    //     }
    // }

//     delete(vertex){
//         if(this.map.has(vertex)){
//             let edges = this.map.get(vertex)

//             for(let edge of edges){
//                 let edgeArray=this.map.get(edge)
//                 let index = edgeArray.indexOf(vertex)
//                 if(index>0){
//                     edgeArray.splice(index,1)
//                 }
//             }
//             this.map.delete(vertex)
//         }
//     }

//     display(){
//         for(let vertex of this.map.keys()){
//             let temp =this.map.get(vertex)
//             console.log(vertex,temp);
//         }
//     }
// }

// let obj=new Graph()
// obj.insert("A",1)
// obj.insert("b",2)
// obj.insert("c",1,true)
// obj.insert("d","A",true)
// obj.display()
// console.log("----------------------------------");
// obj.delete("A")
// obj.display()