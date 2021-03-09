module.exports = function reverse(n) {
    let result = ''
    for (let i = String(n).length - 1; i >= 0; i--) {
        result += String(n)[i];
    }
    return parseInt(result);
}

