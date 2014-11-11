

var gulp = require('gulp');

//look at the documentation for this plugin at https://github.com/sindresorhus/gulp-ruby-sass
var sass = require('gulp-ruby-sass');



gulp.task('process-scss', function () {
    return gulp.src('./assets/scss/main-style.scss')
    	.pipe(sass())
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('result/css'));
});

gulp.task('watch', function() {
  
  // watch scss files for changes
  //then runs the process-scss change.
  gulp.watch('./assets/scss/**/*.scss', function() {
  	gulp.run('process-scss');
  });


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





