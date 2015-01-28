///////////////////////////////////////////////
// NODE MODULES
// =========================

var	gulp = require('gulp'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename'),
	compass = require('gulp-compass'),
	minifyCSS = require('gulp-minify-css');

// Default gulp tasks
gulp.task('default', function() {

});

// Compile SASS and Minify CSS
gulp.task('compass', function() {
	gulp.src('architecture/sass/**/*.sass')
		.pipe(compass({
			css: 'architecture/css',
			sass: 'architecture/sass'
		}))
		.pipe(gulp.dest('architecture/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('architecture/css'));
});

// Watch Task
gulp.task('watch', function(){
	gulp.watch('architecture/sass/*.sass', ['compass']);
});