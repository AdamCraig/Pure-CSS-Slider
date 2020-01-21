var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('main/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('main/css'))
});

gulp.task('default', function(){
  return gulp.src('main/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('main/css'))
});

gulp.task('watch', function(){
  gulp.watch('main/scss/*.scss', gulp.series(['sass']));
})
