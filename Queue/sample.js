class Node{
    constructor(data){
        this.data = data
    }
}
class Queue{
    constructor(){
        this.front =null
        this.rear =null
    }
    enqueue(data){
        const newNode = new Node(data)

        if(!this.rear){
            this.front=newNode  
        }else{
            this.rear.next =newNode
        }
        this.rear = newNode
    }
    dequeue(){
        if(!this.front){
        console.log("list is empty");
        }else{
            this.front = this.front.next
        }
        if(this.front==null){
            this.rear=null
        }
    }
    display(){
      if(!this.front){
        console.log("list is empty");
        return
      }else{
        let currentNode = this.front
        while(currentNode){
            console.log(currentNode.data);
            currentNode=currentNode.next
        }
      }
    }
}

const queue = new Queue
queue.enqueue(90)
queue.enqueue(1000)
queue.enqueue(40)
queue.enqueue(900)
queue.display()
console.log("-------------------------------------");
queue.dequeue()
queue.display()