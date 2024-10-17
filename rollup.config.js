import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json')

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins:[
            peerDepsExternal(),
            resolve(),
            commonjs(),
            terser(),
            postcss(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
                babelHelpers: 'bundled',
            }),
        ],
        external:["react", "react-dom"],
    },
];