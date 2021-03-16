const { src, dest, series, task} = require('gulp');
const gulp = require('gulp');

const deployPage = () => {
    return src('*/*').pipe(dest('../tmp/'));
}

//exports.deployPage   = deploy;
exports.default = series(deployPage);
