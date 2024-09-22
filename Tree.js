/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
        constructor() {
            this.root = null;
        }

        addNode(node) {
            if (this.root === null) {
                this.root = node;
            } else {
                this._insertNode(this.root, node);
            }
        }
        
        _insertNode(current, newNode) {
            if (newNode.data < current.data) {
                if (current.left === null) {
                    current.left = newNode;  
                } else {
                    this._insertNode(current.left, newNode);  
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;  
                } else {
                    this._insertNode(current.right, newNode);
                }
            }
        }
        hasNode(data) {
            return this._searchNode(this.root, data);
        }
    
        _searchNode(current, data) {
            if (current === null) {
                return false;  
            }
            if (data === current.data) {
                return true;
            } else if (data < current.data) {
                return this._searchNode(current.left, data);
            } else {
                return this._searchNode(current.right, data);
        }
    }
}



module.exports = { Node, Tree }
