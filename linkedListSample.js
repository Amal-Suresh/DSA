class Node{
    constructor(data){
        this.value = data 
        this.next = null
    }
}

class Linkedlist{
    constructor(data){
        this.head=null
        // to tack the size of linked list (counting number of elements in list)
        this.size =0
    }

    isEmpty(){
        return this.size === 0
    }
    
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()==null){
            this.head = node
        }else{
            node.next=this.head
            this.head = node
        }

    }
    append(data){
                const newNode= new Node(data)
                
                if(!this.head){
                    this.head=newNode
                    this.tail=newNode
                    return
                }
                this.tail.next=newNode
                this.tail=newNode
            }


}

const list = new Linkedlist()
console.log("Is this Linked List Empty :",list.isEmpty());

console.log("Size of the LInked List",list.getSize());




