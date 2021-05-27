class Node  {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length= 1;

    }
push(value){
    const newNode= new Node(value)
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    else{
    this.tail.next = newNode;
    this.tail =newNode;
    }
   this.length++
 return this;
}

pop(){

    if(!this.head) return undefined
    let temp = this.head
    let pre = this.head

    while(temp.next){
        pre = temp
        temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if(this.length === 0){
        this.head = null
        this.tail = null
    }
    return temp
}

unshift(value){
    const newNode= new Node(value)
if(!this.head){
    this.head =newNode
    this.tail = newNode
} else{

    newNode.next = this.head
    this.head = newNode
}
  this.length++
  return this;
}

 shift(){

     if(!this.head){return undefined}
   else{
         let temp = this.head
          this.head = this.head.next
          temp.next = null
          this.length--

     if(this.length === 0){
         this.tail = null
     }
      return temp;
   }


 }

 Get(index){
     let temp = this.head;
     if(this.length > index && index >= 0){

         for(let i = 0;i<index;i++){

            temp = temp.next
         }
         return temp

     }
     else undefined
 }

 Set(index, value){
    let temp = this.Get(index)
    if(temp){
        temp.value = value
        return true
    }
    return false
 }
 Insert(index,value){
     if(index === 0) return this.unshift(value)
     if(index === this.length) return this.push(value)
     if(index < 0 || index >this.length) return false
     const newNode = new Node(value)
     let previous = this.Get(index-1)
     if(previous){
         newNode.next= previous.next
         previous.next = newNode
         this.length++
         return true
     }

 }
 Remove(index){
     if(index === this.length-1) return this. pop()
     if(index === 0) return this.shift()
     if(index < 0 || index >= this.length) return undefined
     let temp = this.Get(index-1)
     if(!temp) return false

         let remove = temp.next
         temp.next = remove.next
         remove.next = null
         this.length--
         return remove


 }
 Reverse(){
     let temp = this.head
      this.head = this.tail
      this.tail = temp
      let prev = null
      let next = temp.next
      for(let i=0;i<this.length;i++){
          next= temp.next
          temp.next = prev
          prev = temp
          temp = next

      }
      return this
 }
}

export default linkedList

// let myLinkedlist = new linkedList(0);
//
// myLinkedlist.push(5);
// myLinkedlist.push(10)
// myLinkedlist.push(15)
