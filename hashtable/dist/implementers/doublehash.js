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
var hash_1 = require("../hash");
var DoubleHash = /** @class */ (function () {
    function DoubleHash(size) {
        this.table = {};
        this.size = 20;
        this.resize(size || this.size);
    }
    DoubleHash.prototype.insert = function (key, value) {
        // generate hash via passed key
        var index = hash_1.hash(key, this.size);
        // generate second hash via passed key
        var index2 = hash_1.hash(key, this.size);
        var h = 0;
        // iterate the all rows in table
        while (this.table[index] !== undefined && h <= this.size) {
            // generate double hash
            index = (index + h * index2) % this.size;
            h++;
            // if loop count great than hash table size
            // stop the loop and return false.
            if (h > this.size) {
                return false;
            }
        }
        // push new data
        this.table[index] = { key: key, value: value };
        return index;
    };
    DoubleHash.prototype.search = function (key) {
        // generate hash via passed key
        var index = hash_1.hash(key, this.size);
        // generate second hash via passed key
        var indexH = hash_1.hash(key, this.size);
        var h = 0;
        while (this.table[index] !== undefined && this.table[index].key !== key) {
            // make double hash
            index = (index + h * indexH) % this.size;
            h++;
        }
        return this.table[index];
    };
    DoubleHash.prototype.resize = function (size) {
        // assign the new size of table
        this.size = size;
        // clone hash table to new local variablle
        var table = __assign({}, this.table);
        // set empty object
        this.table = {};
        // iterate the all rows
        for (var _i = 0, _a = Object.keys(table); _i < _a.length; _i++) {
            var hash_2 = _a[_i];
            // get key and value
            var _b = table[hash_2], key = _b.key, value = _b.value;
            // re-send key and value to hash table
            this.insert(key, value);
        }
    };
    DoubleHash.prototype.getTable = function () {
        return this.table;
    };
    return DoubleHash;
}());
exports["default"] = DoubleHash;
