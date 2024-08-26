
export class LinkedList{
    constructor(){
        this.head = null,
        this.length = 0
    }

    insertAtBeginning(data){
        let newNode = new Node(data,this.head);
        this.head = newNode;
        this.length++;
    }
}

class Node{
    constructor(value,next){
        this.value = value,
        this.next = next
    }
}