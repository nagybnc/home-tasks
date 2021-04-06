class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}

class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data) {
    if (data < this.data && this.left) {
      this.left.add(data);
    } else if (data < this.data) {
      this.left = new BSTNode(data);
    } else if (data > this.data && this.right) {
      this.right.add(data);
    } else if (data > this.data) {
      this.right = new BSTNode(data);
    }
  }
}

module.exports = {Node, BSTNode, Tree}
