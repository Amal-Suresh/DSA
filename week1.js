class Node{
    constructor(data){
        this.data= data
        this.next= null
    }
}

class linkedlist{
    constructor(){
        this.head= null
        this.tail=null
        this.size=0
    }

    add(data){
        const node =new Node(data)
        if(!this.head){
            this.head=node
            
        }else{
            this.tail.next=node
        }
        this.tail=node
        this.size++
    }
    display(){
        let currentNode= this.head
        while(currentNode){
            console.log(currentNode.data);
            currentNode=currentNode.next
        }

    }

    findmiddle(){
        let mid =Math.floor(this.size/2)
        console.log(mid);
        let currentNode = this.head
        let count=1
        while(currentNode){
            if(count==mid){
                return currentNode.data
            }
            count++
            currentNode=currentNode.next
        }
    }
}

const list = new linkedlist
list.add(10)
list.add(20)
list.add(40)    
list.add(50)


console.log(list.findmiddle());
