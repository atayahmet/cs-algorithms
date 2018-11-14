"use strict";
exports.__esModule = true;
var HashTable = /** @class */ (function () {
    function HashTable() {
    }
    HashTable.prototype.insert = function (key, value) {
        return this.implementer.insert(key, value);
    };
    HashTable.prototype.search = function (key) {
        return this.implementer.search(key);
    };
    HashTable.prototype.use = function (implementer) {
        this.implementer = implementer;
    };
    HashTable.prototype.resize = function (size) {
        this.implementer.resize(size);
    };
    HashTable.prototype.getTable = function () {
        return this.implementer.getTable();
    };
    return HashTable;
}());
exports["default"] = HashTable;
