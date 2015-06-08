var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function () {
	return gulp.src('app.js')
		.pipe(jshint())
		.pipe(jshint.reporter());
});

gulp.task('server', ['lint']);
