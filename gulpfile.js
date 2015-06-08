var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
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

gulp.task('build', function () {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['connect', 'watch']);