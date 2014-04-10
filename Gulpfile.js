// Gulpfile.js 
// -- soulselection

// Module Dependencies.
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jade = require('gulp-jade');
var sass = require('gulp-ruby-sass');
var express = require('express');
var TinyLR = require('tiny-lr');
var CLR = require('connect-livereload');
var path = require('path');

// Tasks
gulp.task('build', function () {

  gulp.src(['scss/app.scss'])
      .pipe(sass({ style: 'compressed' }))
      .pipe(gulp.dest('css'));
});

gulp.task('hint', function () {
  gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {

  gulp.watch('scss/*.scss', ['build']);
});

gulp.task('default', ['build', 'watch'], function () {

  startExpress();
  startLivereload();

  gulp.watch(['*.html', 
              'css/*.css', 
              'scss/*.scss'], notifyLivereload);
});


// Server Configuration.
// Helper Variables.
var EXPRESS_PORT = 9090;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;

function startExpress() {

  var app = express();

  app.use(CLR());
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
}

// We'll need a reference to the tinylr
// object to send notifications of file changes.
var lr;
function startLivereload() {

  lr = TinyLR();
  lr.listen(LIVERELOAD_PORT);
}

function notifyLivereload(event) {

  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = path.relative(EXPRESS_ROOT, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });

  console.log('Updated: ' + fileName);
}