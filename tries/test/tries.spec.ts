import TrieNode from "../src/node";

describe("Tries tests", function() {
  it("should insert words to tries", function() {
    const node = new TrieNode();
    node.insert("hello");
    const lastNode1 = node.getRoot().nodes["h"].nodes["e"].nodes["l"].nodes["l"].nodes["o"];
    expect(lastNode1.endOfTheWord).toBeTrue();

    node.insert("hello world");
    const lastNode2 = node.getRoot().nodes["h"].nodes["e"].nodes["l"].nodes["l"]
      .nodes["o"].nodes['w'].nodes['o'].nodes['r'].nodes['l'].nodes['d'];
    expect(lastNode2.endOfTheWord).toBeTrue();
  });

  it("should search keyword", function() {
    const node = new TrieNode();
    node.insert("hello world");
    let lastNode = node.getRoot().nodes["h"].nodes["e"].nodes["l"].nodes["l"]
      .nodes["o"];
    expect(lastNode.endOfTheWord).toBeFalse();

    lastNode = lastNode.nodes['w'].nodes['o'].nodes['r'].nodes['l'].nodes['d'];
    expect(lastNode.endOfTheWord).toBeTrue();
  });
});
