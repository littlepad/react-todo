import gulp from 'gulp';
import webpack from 'gulp-webpack';
import config from '../webpack.config.babel';

export default function js() {
  return gulp.src(config.entry.app)
    .pipe(webpack(config))
    .pipe(gulp.dest(config.output.path));
}
