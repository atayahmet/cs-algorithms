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
var LinearProbe = /** @class */ (function () {
    function LinearProbe(size) {
        if (size === void 0) { size = 0; }
        this.table = {};
        this.size = 0;
        this.resize(size);
    }
    LinearProbe.prototype.insert = function (key, value) {
        // generate hash via passed key
        var index = hash_1.hash(key, this.size);
        var count = Object.keys(this.getTable()).length;
        // iterate the all rows in table
        while (this.table[index] !== undefined && count < this.size) {
            // generate hash again
            index = (index + 1) % this.size;
        }
        this.table[index] = { key: key, value: value };
        return this.table[index] ? index : false;
    };
    LinearProbe.prototype.search = function (key) {
        // generate hash via passed key
        var index = hash_1.hash(key, this.size);
        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = (index + 1) % this.size;
        }
        return this.table[index];
    };
    LinearProbe.prototype.resize = function (size) {
        this.size = size;
        var table = __assign({}, this.table);
        this.table = {};
        for (var _i = 0, _a = Object.keys(table); _i < _a.length; _i++) {
            var hash_2 = _a[_i];
            var _b = table[hash_2], key = _b.key, value = _b.value;
            this.insert(key, value);
        }
    };
    LinearProbe.prototype.getTable = function () {
        return this.table;
    };
    return LinearProbe;
}());
exports["default"] = LinearProbe;
