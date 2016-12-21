import gulp from 'gulp';
import PATH from './gulp/config';
import server from './gulp/browserSync';
import js from './gulp/webpack';
import { lint, devLint } from './gulp/eslint';

gulp.task('server', () => server());
gulp.task('js', () => js());
gulp.task('lint', () => lint());
gulp.task('devLint', () => devLint());
gulp.task('watch', () => {
  gulp.watch(`${PATH.js}**/*.js`, ['lint', 'js']);
});

gulp.task('default', ['server', 'watch']);
