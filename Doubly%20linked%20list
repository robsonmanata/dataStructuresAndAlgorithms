class Node  {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length= 1;

    }

    Push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode

        }
        else{
            this.tail.next = newNode
            newNode.prev =this.tail
            this.tail= newNode

        }
        this.length++
        return this

    }
    pop(){
        let temp = this.tail
        if(this.length === 0) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
        
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
        }
        this.length--
        return temp


    }
    unshift(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head =newNode
        }
        this.length++
        return this
    }
    shift(){
        if(this.length === 0) return undefined
        let temp = this.head
        if(this.length ===1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
            
        }
        this.length--
        return temp
    }
    Get(index){
        if(index < 0 || index >= this.length) return undefined
      let temp = this.head;
     if(index < this.length/2){

         for(let i = 0;i<index;i++){

            temp = temp.next
         }
        
     
     }
     else{
         temp= this.tail
         for(let i = this.length-1;i>index;i--){
             temp = temp.prev
         }
     }
     return temp
 }

Set(index,value){
   
    let temp = this.Get(index)
    if(temp){
    temp.value =value
    return true
    }
    else false
}
Insert(index,value){
     if(index === 0) return this.unshift(value)
     if(index === this.length) return this.Push(value)
     if(index < 0 || index >this.length) return false
     const newNode = new Node(value)
     let before = this.Get(index-1)
     let after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
         this.length++
         return true
    
     
 }
  remove(index){
       if(index === 0) return this.shift(value)
     if(index === this.length) return this.pop(value)
     if(index < 0 || index >this.length) return false
      let temp = this.Get(index)
     
          let before = temp.prev
          let after = temp.next
          before.next = after
          after.prev = before
          temp.next = null
          temp.prev = null
      this.length--
      return  true
  }

}
let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.Push(1)
myDoublyLinkedList.Push(2)
// myDoublyLinkedList.Push(3)
