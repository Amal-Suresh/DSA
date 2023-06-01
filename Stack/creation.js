class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top =null
    }

    push(data){
        const newNode=new Node(data)
        if(!this.top){
            this.top =newNode
        }else{
            newNode.next = this.top
            this.top= newNode
        }

    }
    display(){
        let currentNode = this.top
        while(currentNode!=null){
            console.log(currentNode.data);
            currentNode=currentNode.next
        }
    }
}

const stack =new Stack
stack.push(19)
stack.push(80)
stack.push(100)
stack.display()