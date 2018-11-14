"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var linkedlist_1 = require("../services/linkedlist/linkedlist");
var hash_1 = require("../hash");
var LinkedList = /** @class */ (function () {
    function LinkedList(size) {
        this.table = {};
        this.size = 20;
        this.resize(size || this.size);
    }
    LinkedList.prototype.insert = function (key, value) {
        // generate hash via passed key
        var index = hash_1.hash(key, this.size);
        var count = Object.keys(this.getTable()).length;
        if (!this.table[index] && !(count < this.size)) {
            return false;
        }
        // create new linkedlist instance to new bucket
        if (!(this.table[index] instanceof linkedlist_1["default"])) {
            this.table[index] = new linkedlist_1["default"];
        }
        return !!this.table[index].append({ key: key, value: value }) ? index : false;
    };
    LinkedList.prototype.search = function (key) {
        // generate hash via passed key
        var index = hash_1.hash(key, this.size);
        // get the bucket with hash
        var node = this.table[index];
        if (!node)
            return;
        // if the node, head in the current node and data key have exists
        // contunies the loop
        while (node && node.head !== undefined && node.head.data.key !== key) {
            node = node.next;
        }
        return node ? node.head : node;
    };
    LinkedList.prototype.resize = function (size) {
        // assign the new size of table
        this.size = size;
        // clone hash table to new local variablle
        var table = __assign({}, this.table);
        // set empty object
        this.table = {};
        // iterate the all buckets
        for (var _i = 0, _a = Object.keys(table); _i < _a.length; _i++) {
            var hash_2 = _a[_i];
            // get head node
            var node = table[hash_2].head;
            // iterate the all nodes to till the end
            while (node && node.next) {
                // get key and value
                var _b = node.data, key = _b.key, value = _b.value;
                // re-send key and value to hash table
                this.insert(key, value);
                // get next node
                node = node.next;
            }
        }
    };
    LinkedList.prototype.getTable = function () {
        return this.table;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
