const T = require('./index');
const Node = T.Node;

describe('Node', () => {
  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Node can insert correctly', () => {
    const node = new Node(15);
    node.insert(10);
    node.insert(25);
    node.insert(27);
  
    expect(node.left.data).toEqual(10);
    expect(node.right.data).toEqual(25);
    expect(node.right.right.data).toEqual(27);
  });

})