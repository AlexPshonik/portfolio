var gulp = require('gulp');

gulp.task('watch',
  [
    'copy:watch',
    'pug:watch',
    'sass:watch',
    'webpack:watch'
  ]
);