

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

// add element to linked list

    add (data){
        const node = new Node(data)
        if(!this.head){
            this.head = node;
            this.tail = node;
            return 
        }else{
            this.tail.next = node;
            this.tail = node
        }
    }

//display all elements

    display(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }

  //insert after an element  
    insertAfter(data, newData) {
        const node = new Node(newData)
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.data == data) {
                node.next = currentNode.next
                currentNode.next = node
            }
            if (currentNode.next == null) {
                this.tail = currentNode
                return
            }

            currentNode = currentNode.next
        }
        console.log("element not found");
    }

    //remove an element from 
    remove(data){
        if(!this.head){
            return
        }
        if(this.head.data==data){
            this.head=this.head.next
        }
        let currentNode = this.head
        while(currentNode.next){
            if(currentNode.next.data == data){
                currentNode.next=currentNode.next.next;
                if(!currentNode.next){
                    this.tail = currentNode
                }
                return
            }
            currentNode = currentNode.next
        }

    }


    


}


const list = new LinkedList
list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.insertAfter(40,111)
list.display()
list.remove(90)

//adding array of elements to linked list
let array=[1,2,3,4,5]
for(let i=0;i<array.length;i++){
    list.add(array[i])
}