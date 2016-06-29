var gulp = require('gulp');
var sass = require('gulp-sass');
var superstatic = require('superstatic');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref')

gulp.task('sass', function () {
  return gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app',
      middleware: [superstatic({stack: 'strict'})]
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/style.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
});

// gulp.task('useref', function () {
//   return gulp.src('index.html')
//   .pipe(useref())
//   .pipe(gulp.dest('public'))
// });
