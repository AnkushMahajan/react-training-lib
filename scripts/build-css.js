const path = require('path');
const gulp = require('gulp');
const debug = require('gulp-debug');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');

const basePath = path.join(__dirname, '..');
const srcPath = path.join(basePath, 'src');
const outputPath = path.join(basePath, 'dist');

gulp.src(path.join(srcPath, '**/*.styl'))
  .pipe(debug())
  .pipe(stylus())
  .pipe(rename({
    extname: '.css'
  }))
  .pipe(gulp.dest(outputPath));


gulp.src(path.join(srcPath, '**/*.css'))
  .pipe(debug())
  .pipe(gulp.dest(outputPath));
