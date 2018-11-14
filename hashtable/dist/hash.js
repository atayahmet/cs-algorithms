"use strict";
exports.__esModule = true;
function hash(key, size) {
    var length = key.length;
    var chars = key.split('');
    var sum = chars[length - 1].charCodeAt(0);
    chars.forEach(function (char, i) { return sum = (chars[length - i - 1].charCodeAt(0)) + i + (size * sum); });
    return (sum % size);
}
exports.hash = hash;
