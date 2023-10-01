"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Layout = function (props) {
    return ((0, jsx_runtime_1.jsxs)("html", { children: [(0, jsx_runtime_1.jsxs)("head", { children: [(0, jsx_runtime_1.jsx)("title", { children: "welcome" }), (0, jsx_runtime_1.jsx)("script", { crossOrigin: "", src: "https://unpkg.com/react@18/umd/react.development.js" }), (0, jsx_runtime_1.jsx)("script", { crossOrigin: "", src: "https://unpkg.com/react-dom@18/umd/react-dom.development.js" }), (0, jsx_runtime_1.jsx)("script", { src: "https://unpkg.com/babel-standalone@6/babel.min.js" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: "/", children: "[ home ]" }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("body", { children: (0, jsx_runtime_1.jsx)("div", { children: props.children }) })] }));
};
exports.Layout = Layout;
