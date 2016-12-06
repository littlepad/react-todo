const gulp = require('gulp');
const server = require('./gulp/browserSync').default;
const js = require('./gulp/webpack').default;
const { lint, devLint } = require('./gulp/eslint');

gulp.task('server', () => server());
gulp.task('js', () => js());
gulp.task('lint', () => lint());
gulp.task('devLint', () => devLint());
gulp.task('watch', () => {
  gulp.watch(`${PATH.js}**/*.js`, ['lint', 'js']);
});

gulp.task('default', ['server', 'watch']);
