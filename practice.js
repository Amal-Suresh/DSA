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

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(data) {
        const newNode = new Node(data)
        if (!this.top) {
            this.top = newNode
        } else {
            newNode.next = this.top

        }
        this.top = newNode
        this.size++
    }

    pop() {
        let currentNode = this.top
        if (currentNode != null) {
            this.top = this.top.next
        }
    }

    display() {
        let currentNode = this.top
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next
        }

    }

    isEmpty() {
        return this.size
    }

    removemiddle() {
        let mid = Math.floor((this.size) / 2)
        const tempStack = new Stack
        let i = 1
        let currentNode=this.top
        while(currentNode){
            if(i==mid-1){ 
                currentNode.next =currentNode.next.next
                i++
            }
            currentNode =currentNode.next
        }

    }
}

const stack = new Stack

stack.push(90)
stack.push(80)
stack.push(70)
stack.push(69)
// stack.pop()
// stack.pop()

stack.display()
console.log("---------------------------------");
stack.removemiddle()
stack.display()
