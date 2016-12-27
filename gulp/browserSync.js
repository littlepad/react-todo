import gulp from 'gulp';
import browserSync from 'browser-sync';
import PATH from './config';

export default function server() {
  return gulp.task('server', () => {
    browserSync.init({
      server: PATH.public,
      notify: false,
    });
  });
}

