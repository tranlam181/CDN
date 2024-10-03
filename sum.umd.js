(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.umdModule = factory());
}(this, function () {
    function sum(a, b) {
        return a + b;
    }

    return {
        sum: sum
    };
}));
