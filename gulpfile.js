var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src('app/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    return gulp.watch(['index.html', 'app/**/*.js'], ['html', 'js']);
});

gulp.task('serve', ['connect', 'watch']);