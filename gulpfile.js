var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    wiredep = require('wiredep').stream,
    replace = require('gulp-html-replace'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

/*gulp.task('dependencies', function () {
    return gulp.src('index.html')
        .pipe(replace({
            bower: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'
                ]
            }
        }))
        .pipe(gulp.dest('index.html'));
});*/

gulp.task('dep', function () {
    return gulp.src('index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('.'));
});

gulp.task('lint', function () {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('html', function () {
    return gulp.src(['index.html', 'app/**/*.html'])
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src('app/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    return gulp.watch(['index.html', 'app/**/*.js', 'app/**/*.html', 'bower.json'], ['html', 'js', 'lint', 'dep']);
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

gulp.task('serve', ['lint', 'connect', 'watch']);