'use strict';


var gulp = require('gulp'),
    size = require('gulp-size'),
    // browserify = require('browserify'),
    // reactify = require('reactify'),
    // jsx = require('gulp-jsx'),
    // react = require('gulp-react'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');


// Tasks
gulp.task('default', function(){
 gulp.start('transform');
 gulp.watch('static/scripts/jsx/main.jsx', ['transform']);
});

gulp.task('transform', ['clean'], function(){
  // The transformer is not working for me .. I'm just using the client side transformer
  return gulp.src('static/scripts/jsx/main.jsx')
    // .pipe(browserify({transform: [reactify]}))
    // .pipe(jsx({factory: 'React.createClass'}))
    // .pipe(react({harmony: false,}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('static/scripts/js/compiled'))
    .pipe(size());
});

gulp.task('clean', function(){
  return gulp.src(
      [
        'static/scripts/js/compiled'
      ], {read: false})
    .pipe(clean());
});

