
class Node{
    constructor(data){
        this.data =data
        this.next =null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    insert(data){

        const node =new Node(data)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }

    display(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }

}

const list = new LinkedList


//adding array of elements to linked list
let array=[1,2,3,4,5]
for(let i=0;i<array.length;i++){
    list.insert(array[i])
}

list.display()

