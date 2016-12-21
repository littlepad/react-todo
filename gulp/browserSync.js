import gulp from 'gulp';
import PATH from './config';
import browserSync from 'browser-sync';

export default function server () {
  return gulp.task('server', () => {
    browserSync.init({
      server: PATH.public,
      notify: false,
    });
  });
}

