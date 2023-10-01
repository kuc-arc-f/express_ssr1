"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ssr = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var i = 0;
function Ssr() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "SSR" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("p", { children: "welcome" })] }));
}
exports.Ssr = Ssr;
