var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('./lib/*.js')
  .pipe(browserify({
    insertGlobals: true
  }))
  .pipe(uglify())
  .pipe(rename({
    basename: "validator",
    suffix: ".min",
    extname: ".js"
  }))
  .pipe(gulp.dest('assets'));
});