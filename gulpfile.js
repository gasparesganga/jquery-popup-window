var gulp = require('gulp');
var uglifyjs = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var header = require('gulp-header');
var package = require('./package');

var moduleName = 'popupwindow';
var signature = `/***************************************************************************************************
PopupWindow - The ultimate popup/dialog/modal jQuery plugin
    Author          : Gaspare Sganga
    Version         : ${package.version}
    License         : MIT
    Documentation   : http://gasparesganga.com/labs/jquery-popup-window/
***************************************************************************************************/`

gulp.task('compress-js', function () {
  return gulp.src('src/*.js')
    .pipe(uglifyjs())
    .pipe(header(signature))
    .pipe(rename(moduleName + '.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress-css', function () {
  return gulp.src('src/*.css')
    .pipe(uglifycss({maxLineLen: 80, uglyComments: true}))
    .pipe(header(signature))
    .pipe(rename(moduleName + '.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function(){
  return gulp.src('src/*')
    .pipe(header(signature))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel(['compress-js', 'compress-css', 'copy']));