  
// .............................trie ...........................


class TrieNode{ 
    constructor(){ 
        this.children=new Map(); 
    } 
} 
 
 
class Trie{ 
    constructor(str){ 
        this.root=new TrieNode(); 
        this.endSymbol='*'; 
        this.populateSuffixTrie(str) 
    } 
 
    populateSuffixTrie(str){ 
        for(let i=0;i<str.length;i++){ 
            this.insertSubstring(i,str) 
        } 
    } 
 
 
    insertSubstring(index,str){ 
        let node=this.root; 
        for(let i=index;i<str.length;i++){ 
       
            const letter=str.charAt(i); 
            if(!node.children.has(letter)){ 
                node.children.set(letter,new TrieNode()) 
            } 
            node=node.children.get(letter) 
        } 
        node.children.set(this.endSymbol,null); 
    } 
 
    contains(str){ 
        let node=this.root; 
        for(let i=0;i<str.length;i++){ 
            const letter=str.charAt(i); 
            if(!node.children.has(letter)){ 
                return false 
            } 
            node=node.children.get(letter) 
        } 
        return node.children.has(this.endSymbol) 
    } 
 
} 
 
 
const tr=new Trie("tree"); 
console.log(tr.contains("tre"))
console.log(tr.contains("tree"))
