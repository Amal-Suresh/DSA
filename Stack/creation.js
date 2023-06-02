class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top =null
        this.size=0
        this.limit=3
    }
    push(data){
        const newNode=new Node(data)
        if(!this.top){
            this.top =newNode
            this.size++
        }else if(this.size<this.limit){
            newNode.next = this.top
            this.top= newNode
            this.size++
        }else{
            console.log("stack overflow");
            return
        }
    }
    display(){
        let currentNode = this.top
        while(currentNode!=null){
            console.log(currentNode.data);
            currentNode=currentNode.next
        }
    }
    pop(){
        if(!this.top){
            console.log("stack underflow");
            return
        }else{
             this.top =this.top.next

        }
        
    }
    peek(){
        if(!this.top){
            console.log("Stack underflow")
        }else{
            console.log(this.top.data);
        }
    }

}
const stack =new Stack
stack.push(19)
stack.push(80)
stack.push(100)
stack.push(400)

stack.display()
console.log("-----------------------");
stack.pop()
stack.display()
console.log("-----------------------");
stack.peek()

