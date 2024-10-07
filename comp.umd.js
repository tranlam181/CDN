(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.umdModule = factory());
}(this, function () {
    function renderReactComponent(React, ReactDOM) {
        const element = React.createElement('h1', null, 'Hello from UMD.js React Component');
        ReactDOM.render(element, document.getElementById('root'));
    }

    return {
        renderReactComponent: renderReactComponent
    };
}));
