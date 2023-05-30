class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class doublyLinkedlist{
   constructor(){
    this.head = null
    this.tail = null
   }
   add(data){
    const node = new Node(data)
    if(!this.head){
        this.head =node
    }else{
        node.prev=this.tail
        this.tail.next =node  
    }
    this.tail = node
   }

   display(){
    if(!this.head){
        return
    }
    let currentNode = this.head
    while(currentNode){
        console.log(currentNode.data);
        currentNode=currentNode.next
    }

   }

   reverse(){
    if(!this.tail){
        return
    }
    let currentNode=this.tail
    while(currentNode){
        console.log(currentNode.data);
        currentNode=currentNode.prev
    }

   }
}

const Dlist = new doublyLinkedlist

Dlist.add(90)
Dlist.add(80)
Dlist.add(70)
Dlist.display()
console.log("-----------------------");
Dlist.reverse()