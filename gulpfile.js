var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');


gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function () {
    gulp.src('./src/*.scss')
        .pipe(watch('./src/**/*.scss'))
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});