
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

    add(data){
        const node = new Node(data)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node 
        }
        this.tail = node
    }
    mergeTwoLinkedlist (list1,list2){

        if(!list1){
            return list2
        }
        if(!list2){
            return list1
        }
        console.log(list1,list2);
        let currentNode = list1.head 
        while(currentNode){
            if(currentNode.next==null){
                currentNode.next =list2.head
                this.tail =list2.tail
                return
            }
            
            currentNode=currentNode.next
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

const list1 = new LinkedList
const list2 = new LinkedList

list1.add(30)
list1.add(40)
list2.add(90)
list2.add(80)
list1.display()
console.log("----------------------------------------");
list2.display()

list2.mergeTwoLinkedlist(list1,list2)
console.log("...................................................");
list1.display()
console.log(list1);