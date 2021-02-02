module.exports = function reverse(n) {
    const nString = n.toString();

    function rev(s) {
        if (s == "") {
            return "";
        } else {
            return rev(s.substr(1)) + s.charAt(0);
        }
    }

    return parseInt(rev(nString));
};
