const gulp = require('gulp');
const webpack = require('gulp-webpack');
const config = require('../webpack.config');

export default function js() {
  return gulp.src(config.entry.app)
    .pipe(webpack(config))
    .pipe(gulp.dest(config.output.path));
}
