class LinkedList {
    constructor(rootData) {
        this.head = new Node(rootData)
        this.root = this.head;
    }

    addNode(newNodeData) {
        while (this.head.next != null) {
            this.head = this.head.next;
        }
        this.head.next = new Node(newNodeData);
        this.head = this.root;
    }

    pop() {
        while (this.head.next.next != null) {
            this.head = this.head.next;
        }
        this.head.next = null;
        this.head = this.root;
    }

    printData() {
        console.log(this.head.data);
        while (this.head.next != null) {
            this.head = this.head.next;
            console.log(this.head.data)
        }
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let testList = new LinkedList("A");

testList.addNode("B");
testList.addNode("C");
testList.addNode("D");
testList.pop();
testList.printData();