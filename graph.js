
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>graph  >>>>>>>>>>>>>>>>>>>>>>>>>>


class Graph {
    constructor() {
        this.map = new Map();
    }
    addVertex(vertex) {
        this.map.set(vertex, []);
    }
    insert(vertex, edge, isbidirection = false) {
        if (!this.map.has(vertex)) {
            this.addVertex(vertex);
        }
        if (!this.map.has(edge)) {
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);
        if (isbidirection) {
            this.map.get(edge).push(vertex);
        }
    }
    delete(vertex) {
        if (this.map.has(vertex)) {
            let edges = this.map.get(vertex);
            // console.log(edges);
            for (let edge of edges) {
                const edgeArray = this.map.get(edge);
                const index = edgeArray.indexOf(vertex);
                if (index >= 0) {
                    edgeArray.splice(index, 1);
                }
            }
            this.map.delete(vertex);
        }
    }
    
    display() {
        for (let vertex of this.map.keys()) {
            let temp = this.map.get(vertex);
            console.log(vertex, temp);
        }
    }
  }
  let obj = new Graph();
  obj.insert("A", 1);
  obj.insert("B", 2);
  obj.insert("C", 1,true);
  obj.insert("D", 'A',true);
  obj.delete("A");
  obj.display();
  
  