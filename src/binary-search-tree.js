const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (){
    this.rootData = null;
  }

  root() {
   // return this.root;
    return this.rootData;
    //const newNode = new Node (data);
   // if (this.root == null) return null;
   // return this.root; // = newNode;
    // remove line with error and write your code here
  }
  
  add(data) {
    const newNode = new Node (data)
    if (this.rootData === null) {
      this.rootData = newNode;
      return;
    }
    
    let countNode = this.rootData
    while (countNode) {
      if (countNode.data < newNode.data) {
        if (countNode.left === null) {
          countNode.left = newNode;
          return;
        }
        countNode = countNode.left
      } else {
        if (countNode.right === null) {
          countNode.right = newNode;
          return;
        }
        countNode = countNode.right
      }
    }    
      
  }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  has(data) {
    const newNode = new Node (data)
    if (this.rootData === null) {
      this.rootData = newNode;
      return;
    }
    //if (data = this.rootData) {
      //return true
    //}

    let current = this.rootData
    while (true) {
      //if (current.data === data) {
        //return true;
      //}
      if (data < current.data) {
        current = current.left;
        return;
      } else {
        current = current.right;
        return;
      }
      };
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};