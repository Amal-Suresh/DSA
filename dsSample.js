class Node{
    constructor(data){
        this.data =data;
        this.next= null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(data){
        let node = new Node(data)
        if(this.head==null){
            this.head=node
        }else{
          this.tail.next=node  
        }
        this.tail=node
    }
}


const list = new Linkedlist()
list.add(10)
list.add(20)
list.add(30)
list.add(40)