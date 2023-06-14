class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinerySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)

        let currentNode = this.root

        if (!currentNode) {
            this.root = newNode
        }
        else {
            while (true) {
                if (data < currentNode.data) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode
                        break
                    } else {
                        currentNode = currentNode.left
                    }
                } else {
                    if (currentNode.right == null) {
                        currentNode.right = newNode
                        break
                    }
                    else {
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }
    inOrder() {
        this.inOrderHelper(this.root)
    }

    inOrderHelper(node) {
        if (node) {
            this.inOrderHelper(node.left)
            console.log(node.data);
            this.inOrderHelper(node.right)
        }
    }

    preOrder() {
        this.preOrderHelper(this.root)
    }
    preOrderHelper(node) {
        if (node) {
            console.log(node.data);
            this.preOrderHelper(node.left)
            this.preOrderHelper(node.right)
        }
    }

    postOrder() {
        this.postOrderHelper(this.root)
    }

    postOrderHelper(node) {
        if (node) {
            this.postOrderHelper(node.left)
            this.postOrderHelper(node.right)
            console.log(node.data);
        }
    }
    contains(data){
        let currentNode=this.root
        while(currentNode!=null){
            if(data<currentNode.data){
                currentNode=currentNode.left
            }else if(data>currentNode.data){
                currentNode=currentNode.right
            }else{
                return true
            }
        }
        return false
    }
    min(root){
        if(!root.left){
            return root.data
        }else{
            return this.min(root.left)
        }
    }

}

const bst = new BinerySearchTree
bst.insert(80)
bst.insert(90)
bst.insert(70)
bst.insert(40)
bst.inOrder()
console.log("-----------------------------");

bst.preOrder()

console.log("-----------------------------");
 bst.postOrder()

 console.log( bst.contains(0));
 console.log(bst.min(bst.root),"is minimum value");




    