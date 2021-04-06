const T = require("./index");
const Node = T.Node;
const BSTNode = T.BSTNode;
const Tree = T.Tree;

describe("Node", () => {
  test("Node is a constructor", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node has a value and children properties", () => {
    const n = new Node("15");
    expect(n.value).toEqual("15");
    expect(n.children.length).toEqual(0);
  });

  test("Node can add children", () => {
    const n = new Node("15");
    n.add("10");
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });
});

describe("BSTNode", () => {
  test("BSTNode is a constructor", () => {
    expect(typeof BSTNode.prototype.constructor).toEqual("function");
  });

  test('BSTNode can add correctly', () => {
    const node = new BSTNode(15);
    node.add(10);
    node.add(25);
    node.add(7);
    node.add(13);
    node.add(22);
    node.add(27);
    /*
    "       15       ",
    "      /  \\     ",
    "     10   25    ",
    "    / \\   / \\ ",
    "   7  13 22  27 ",
    */
    expect(node.left.value).toEqual(10);
    expect(node.left.left.value).toEqual(7);
    expect(node.right.value).toEqual(25);
    expect(node.right.right.value).toEqual(27);
  });
});

describe("Tree", () => {
  test("starts empty", () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test("Can traverse bf", () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node("15");
    t.root.add("10");
    t.root.add("25");
    t.root.children[0].add("7");
    t.root.children[0].add("13");
    t.root.children[1].add("22");
    t.root.children[1].add("27");
    /*
    "       15       ",
    "      /  \\     ",
    "     10   25    ",
    "    / \\   / \\ ",
    "   7  13 22  27 ",
    */
    t.traverseBF((node) => {
      letters.push(node.value);
    });

    expect(letters).toEqual(["15", "10", "25", "7", "13", "22", "27"]);
  });

  test("Can traverse DF", () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node("15");
    t.root.add("10");
    t.root.add("25");
    t.root.children[0].add("7");
    t.root.children[0].add("13");
    t.root.children[1].add("22");
    t.root.children[1].add("27");
    /*
    "       15       ",
    "      /  \\     ",
    "     10   25    ",
    "    / \\   / \\ ",
    "   7  13 22  27 ",
    */
    t.traverseDF((node) => {
      letters.push(node.value);
    });

    expect(letters).toEqual(["15", "10", "7", "13", "25", "22", "27"]);
  });
});
