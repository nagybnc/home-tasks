const T = require('./index');
const Node = T.Node;

describe('Node', () => {
  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });
})