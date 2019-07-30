"use strict";
exports.__esModule = true;
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.nodes = new Array(TrieNode.ALPHABET_SIZE);
        this.endOfTheWord = false;
    }
    TrieNode.prototype.insert = function (key) {
        var chars = this.split(key);
        var peek = this.root || this.setRoot();
        while (chars.length > 0) {
            var char = chars.shift();
            if (!Boolean(peek.nodes[char])) {
                peek.nodes[char] = new TrieNode;
            }
            peek = peek.nodes[char];
        }
        peek.setEndOfWord(true);
    };
    TrieNode.prototype.search = function (key) {
        var chars = this.split(key);
        var peek = this.root || this.setRoot(), match = true;
        while (chars.length > 0) {
            var char = chars.shift();
            if (!Boolean(peek.nodes[char])) {
                match = false;
                break;
            }
            peek = peek.nodes[char];
        }
        return match === true && peek.isEnd() === true;
    };
    TrieNode.prototype.split = function (key) {
        return key.split('').map(function (i) { return i.trim(); }).filter(Boolean);
    };
    TrieNode.prototype.setEndOfWord = function (val) {
        this.endOfTheWord = val;
    };
    TrieNode.prototype.isEnd = function () {
        return this.endOfTheWord;
    };
    TrieNode.prototype.setRoot = function () {
        return this.root = new TrieNode;
    };
    TrieNode.prototype.getRoot = function () {
        return this.root;
    };
    TrieNode.ALPHABET_SIZE = 26;
    return TrieNode;
}());
exports["default"] = TrieNode;
