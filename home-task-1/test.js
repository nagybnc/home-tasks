const T = require("./index");
const Node = T.Node;
const Tree = T.Tree;

describe("Node", () => {
  test("Node is a constructor", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node has a data and children properties", () => {
    const n = new Node("a");
    expect(n.data).toEqual("a");
    expect(n.children.length).toEqual(0);
  });

  test("Node can add children", () => {
    const n = new Node("a");
    n.add("b");
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
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
      letters.push(node.data);
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
      letters.push(node.data);
    });

    expect(letters).toEqual(["15", "10", "7", "13", "25", "22", "27"]);
  });
});
