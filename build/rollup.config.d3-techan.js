import node from "rollup-plugin-node-resolve";

export default {
    entry: "build/index.d3-techan.js",
    format: "umd",
    moduleName: "d3",
    plugins: [node()],
    dest: "build/d3-techan.js"
};
