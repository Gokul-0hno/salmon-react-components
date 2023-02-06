import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import packageJSON from "./package.json" assert { type: "json" };

export default [
    {
        input: "src/index.js",
        output: [
            {
                file: packageJSON.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJSON.module,
                format: "esm",
                sourcemap: true,
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({ babelHelpers: 'bundled' }),
        ]
    }
];