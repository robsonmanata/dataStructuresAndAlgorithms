class Node  {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = this.first;
        this.length= 1;

    }
    Enqueue(value){
      const newNode = new Node(value)
      if(this.lenght == 0) {
          this.first = newNode
          this.last = newNode

      }
      else{
          this.last.next = newNode
          this.last = newNode
      }
      this.length++
      return this
    }
    Dequeue(){
        if(this.length === 0)return undefined
        let temp = this.first
        if(this.length ===1){
            this.first = null
            this.last = null
        }else{
        this.first =this.first.next
        temp.next = null
        }
        this.lenght++
        return temp


    }
}

let myQueue = new Queue(1)
myQueue.Enqueue(2)
myQueue.Enqueue(3)