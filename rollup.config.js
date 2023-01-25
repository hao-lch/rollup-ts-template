
import path from "path"
import typescript from "rollup-plugin-typescript2"
import babel from "@rollup/plugin-babel"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: "./src/index.ts",
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            entryFileNames: '[name].cjs.js',
        },
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].esm.js',
        },
        {
            dir: 'dist',
            format: 'umd',
            entryFileNames: '[name].umd.js',
        },
    ],
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        commonjs(),
        typescript({
            tsconfig: path.resolve(__dirname, "./tsconfig.json"),
        }),
        babel({
            exclude: "node_modules/**",
            babelHelpers: "bundled",
            // extensions: [".js", ".jsx", ".ts"]
        }),
        terser({
            maxWorkers: 4
        })
    ]
}
