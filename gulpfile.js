var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var paths = {
    popupscripts: [
      './node_modules/jquery/dist/jquery.min.js',
      './assets/js/popup.js',
    ],
    mainscript: './assets/js/main.js',
    css: './assets/css/main.css'
}

gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('popup-scripts', function() {
  return gulp.src(paths.popupscripts)
    .pipe(concat('popup.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('main-script', function() {
  return gulp.src(paths.mainscript)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['css', 'popup-scripts', 'main-script']);
