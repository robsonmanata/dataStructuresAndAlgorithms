import linkedList from './linkedList.js'
import BST from './BinarySearchTree.js'
import BSTtraversal from './treeTraversal.js'
import batanidza from './mymerge.js'
import {merge,mergeSort} from './Mergesort.js'
let myLinkedlist = new linkedList(0);
let myBinarySearchTree = new BST();
let myTree = new BSTtraversal()

// myLinkedlist.push(5);
// myLinkedlist.push(10)
// myLinkedlist.push(15)
// myBinarySearchTree.insert(0)
//
// console.log(myLinkedlist)
// console.log(myBinarySearchTree)


// myTree.insert(47)
// myTree.insert(21)
// myTree.insert(76)
// myTree.insert(18)
// myTree.insert(27)
// myTree.insert(52)
// myTree.insert(82)
//
// console.log(myTree)
// console.log(myTree.DFSInOrder())
//
// let arr1 = [8,7,9,5,6,43,5]
// let arr2 = [1,3,4,67,8,2,9,99,66,77]
//
// console.log(merge(arr1,arr2))



const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
let count = 0
let fruitBasketcount = []

for(let i= 0;i<fruitBasket.length;i++){

    for(let j = 0;j<fruitBasket.length;j++){

        if(fruitBasket[i] === fruitBasket[j]){
            count++
        }

    }
    let n =fruitBasketcount.includes("banana")
    console.log(n)
    if(!n === true){
     fruitBasketcount.push(fruitBasket[i] +":"+count)
   }
     count=0;

}

console.log(fruitBasketcount)
