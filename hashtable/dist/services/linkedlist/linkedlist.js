"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.append = function (data) {
        if (this.head === undefined) {
            this.head = new node_1["default"](data);
            return this.head;
        }
        var current = this.head;
        while (current && current.next !== undefined) {
            current = current.next;
        }
        current.next = new node_1["default"](data);
        return current.next;
    };
    LinkedList.prototype.prepend = function (data) {
        var newHead = new node_1["default"](data);
        newHead.next = this.head;
        this.head = newHead;
    };
    LinkedList.prototype.deleteWithValue = function (data) {
        if (this.head === undefined)
            return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current && current.next !== undefined) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
