var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
  });
  gulp.task('prefixer', () =>
  gulp.src('css/style.css')
    .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('public/css'))
);
//автоперезагрузка браузера
gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: "./public"
      }
  });
});
//Задача, после запуска которой, gulp будет следить за изменениями файлов
gulp.task('start', function () {
  gulp.watch('sass/style.sass', gulp.series('sass'));
  gulp.watch('css/style.css', gulp.series('prefixer'));
  gulp.watch("public/css/*.css", gulp.series('serve')).on('change', browserSync.reload);
});
