class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  get(position) {
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current;
  }
  add(position, value) {
    let node={
        value,
        next:null
    }
    if(position == 0){
        node.next = this.head;
        this.head = node;
    }
    else{
        let previous = this.get(position-1);
        let current = previous.next;
        node.next = current;
    }
    this.length++;
  }
}
