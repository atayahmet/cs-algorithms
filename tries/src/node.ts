export default class TrieNode {
  public nodes: TrieNode[] = new Array(TrieNode.ALPHABET_SIZE);
  private static ALPHABET_SIZE = 26;
  private endOfTheWord: boolean = false;
  private root: TrieNode;

  public insert(key: string): void {
    const chars = this.split(key);
    let peek: TrieNode = this.root || this.setRoot();

    while (chars.length > 0) {
      const char = chars.shift();

      if (!Boolean(peek.nodes[char])) {
        peek.nodes[char] = new TrieNode;
      }

      peek = peek.nodes[char];
    }

    peek.setEndOfWord(true);
  }

  public search(key: string): boolean {
    const chars = this.split(key);
    let peek: TrieNode = this.root || this.setRoot(), match: boolean = true;

    while (chars.length > 0) {
      const char = chars.shift();

      if (!Boolean(peek.nodes[char])) {
        match = false;
        break;
      }

      peek = peek.nodes[char];
    }

    return match === true && peek.isEnd() === true;
  }

  private split(key: string): string[] {
    return key.split('').map(i => i.trim()).filter(Boolean);
  }

  public setEndOfWord(val: boolean): void {
    this.endOfTheWord = val;
  }

  public isEnd(): boolean {
    return this.endOfTheWord;
  }

  public setRoot(): TrieNode {
    return this.root = new TrieNode;
  }

  public getRoot(): TrieNode {
    return this.root;
  }
}
