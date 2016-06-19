
// including gulp and its plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');


// compile and minify scss
gulp.task('sass', function () {
    return sass('src/sass/**/*.scss')
        .on('error', sass.logError)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('dist/css'));
});


// lint js
gulp.task('jshint', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


// concat and minify js
gulp.task('js-min', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});


// watch the files for changes
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['jshint', 'js-min']);
});


// default task
gulp.task('default', ['sass', 'jshint', 'js-min', 'watch']);
