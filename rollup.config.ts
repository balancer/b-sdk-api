import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'b-sdk-api',
        file: pkg.browser,
        format: 'umd',
        sourcemap: true,
        globals: {
          axios: 'axios',
        },
      },
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      nodeResolve(),
      json(),
      commonjs(),
      typescript({
        exclude: ['node_modules', '**/*.spec.ts'],
      }),
      terser({
        format: {
          comments: false,
        },
        compress: {
          pure_funcs: ['console.log', 'console.time', 'console.timeEnd'],
        },
      }),
    ],
    external: [...Object.keys(pkg.dependencies)],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts(), typescript({ exclude: ['node_modules', '**/*.spec.ts'] })],
  },
];
