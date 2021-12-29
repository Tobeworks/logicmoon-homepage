import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import livereload from 'rollup-plugin-livereload';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const sourcemaps = production === true ? true : false;

export default {
    input: ['src/app.js'],
    output: {
        name:'build',
        file: 'public/dist/js/bundle.umd.js',
        format: 'umd',
        sourcemap: sourcemaps,
        globals:{}
    },
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' }),
        scss({ output: 'public/dist/css/style.css', sourceMap: sourcemaps, outputStyle: 'compressed'}),
        !production &&  livereload(),
        production && terser()
    ]
};