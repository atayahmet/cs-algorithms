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
var QuadraticProbe = /** @class */ (function () {
    function QuadraticProbe(size) {
        this.table = {};
        this.size = 20;
        this.resize(size || this.size);
    }
    QuadraticProbe.prototype.insert = function (key, value) {
        var index = hash_1.hash(key, this.size);
        var h = 0;
        while (this.table[index] !== undefined && h <= this.size) {
            index = (index + Math.pow(h, 2)) % this.size;
            h++;
            if (h > this.size) {
                return false;
            }
        }
        this.table[index] = { key: key, value: value };
        return index;
    };
    QuadraticProbe.prototype.resize = function (size) {
        this.size = size;
        var table = __assign({}, this.table);
        this.table = {};
        for (var _i = 0, _a = Object.keys(table); _i < _a.length; _i++) {
            var hash_2 = _a[_i];
            var _b = table[hash_2], key = _b.key, value = _b.value;
            this.insert(key, value);
        }
    };
    QuadraticProbe.prototype.getTable = function () {
        return this.table;
    };
    QuadraticProbe.prototype.search = function (key) {
        var index = hash_1.hash(key, this.size);
        var h = 0;
        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = index + (Math.pow(h, 2)) % this.size;
            h++;
        }
        return this.table[index];
    };
    return QuadraticProbe;
}());
exports["default"] = QuadraticProbe;
