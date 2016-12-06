const gulp = require('gulp');
const PATH = require('./config').default;
const browserSync = require('browser-sync');

export default function server() {
  return gulp.task('server', () => {
      browserSync.init({
        server: PATH.public,
        notify: false,
      });
    });
}

