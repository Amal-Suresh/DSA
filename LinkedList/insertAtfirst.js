class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    insert(data){
        const node = new Node(data)
        if(!this.head){
            this.head=node
            this.tail=node
            console.log(node);
        }else{
            this.tail.next=node
            this.tail=node
            console.log(node);

        }

    }

    display(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }

//--------------insert at HEAD--------------
    insertAtHead(data){
        const node = new Node(data)
        node.next = this.head
        this.head = node

    }
    
}

const list = new LinkedList

list.insert(90)
list.insert(80)
list.insert(70)
list.display()
console.log("-------------------------------");
//---------------------------------------------
list.insertAtHead(10)
list.display()