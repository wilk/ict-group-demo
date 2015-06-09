var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sequence = require('gulp-run-sequence'),
    wiredep = require('wiredep').stream,
    replace = require('gulp-html-replace'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    karma = require('gulp-karma'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('dep', function () {
    var dfd = q.defer();
    gulp.src('index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('.'))
        .on('end', function () {
            dfd.resolve();
        });

    return dfd.promise;
});

gulp.task('lint', function (done) {
    return gulp.src(['app.js', 'wizard/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(jshint.reporter('fail'))
        .on('close', function () {
            done();
        });
});

gulp.task('html', function () {
    return gulp.src(['index.html', 'wizard/**/*.html'])
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src(['wizard/**/*.js', 'app.js'])
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    return gulp.watch(['index.html', 'app.js', 'wizard/**/*.[js|html]', 'bower.json'], ['html', 'js', 'lint', 'dep']);
});

gulp.task('build:js', function () {
    gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/ngstorage/ngStorage.js',
        'app.js',
        'wizard/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build:js'], function () {
    gulp.src('index.html')
        .pipe(replace({
            js: {
                src: './dist/app.js'
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('constant', function () {
    var url = process.env.NODE_ENV === 'production' ? 'https://localhost:12345' : 'http://localhost:12345';
    gulp.src('constants.js.tpl')
        .pipe(template({url: url}))
        .pipe(rename('./constants.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('test', function () {
    gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'app.js',
        'test/unit/**/*.js'
    ])
        .pipe(karma({
            configFile: 'test/karma.config.js',
            action: 'run'
        }));
});

gulp.task('serve', function () {
    sequence('connect', 'watch');
});