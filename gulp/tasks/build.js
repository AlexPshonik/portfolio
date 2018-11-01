var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

function build() {
  runSequence(
    'clean',
    'copy',
    'pug',
    'sass',
    'webpack'
  );
}

gulp.task('build', function (cb) {
  config.setEnv('development');
  config.logEnv();
  build(cb);
});

gulp.task('build:prod', function (cb) {
  config.setEnv('production');
  config.logEnv();
  build(cb);
});
