import linkedList from './linkedList.js'
import BST from './BinarySearchTree.js'
import BSTtraversal from './treeTraversal.js'

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


myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

console.log(myTree)
console.log(myTree.DFSInOrder())
