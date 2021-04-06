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
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(value) {
    this.children.push(new Node(value));
  }
}

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value < this.value && this.left) {
      this.left.add(value);
    } else if (value < this.value) {
      this.left = new BSTNode(value);
    } else if (value > this.value && this.right) {
      this.right.add(value);
    } else if (value > this.value) {
      this.right = new BSTNode(value);
    }
  }
}

module.exports = {Node, BSTNode, Tree}
