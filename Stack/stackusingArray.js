class Stack{
    constructor(){
        this.stack=[]
    }

    push(data){
        this.stack.push(data)
    }

    display(){
        console.log(this.stack);
    }
    pop(){
        this.stack.pop()
    }

    middle(){
        let mid=Math.floor((this.stack.length)/2)
        let tempStack =new Stack
        let i=0

        while(i<mid){
            tempStack.push(this.stack.pop())
            i++
        }
        this.stack.pop()
        while(tempStack.length!=0){
            this.stack.push(tempStack.pop())
        }
    }
}

let stack =new Stack
stack.push(90)
stack.push(80)
stack.push(70)
stack.push(60)
stack.display()
console.log("---------------------");
stack.middle()
stack.display()