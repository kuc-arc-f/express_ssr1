"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Csr = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = require("./layout");
function Csr() {
    return ((0, jsx_runtime_1.jsx)(layout_1.Layout, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "CSR" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("div", { id: "root" }), (0, jsx_runtime_1.jsx)("script", { type: "text/babel", src: "/js/csr.js" })] }) }));
}
exports.Csr = Csr;
