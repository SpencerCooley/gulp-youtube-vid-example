var gulp = require('gulp');


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');



gulp.task('process-js', function() {
  //concatenates a number of javascript files, then runs uglify and putst the final result  in ./result/js/
  gulp.src(js_order)
    .pipe(concat('app.js'))
    .pipe(uglify({"mangle":true}))
    .pipe(gulp.dest('./result/js/'))
});





gulp.task('hello-world', function() {
  console.log("hello world")
  console.log("hello world")
  console.log("hello world")
  console.log("hello world")
  console.log("hello world")
  console.log("hello world")
  console.log("hello world")
});

