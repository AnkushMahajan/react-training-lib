const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const debug = require('gulp-debug');
const through = require('through2');
const jsStringEscape = require('js-string-escape');

const basePath = path.join(__dirname, '..');
const exercisesPath = path.join(basePath, '../../instructions');
const outputPath = path.join(basePath, 'src/instructions/exercises');

gulp.src(path.join(exercisesPath, '*'))
  .pipe(debug())
  .pipe(through.obj(function (chunk, enc, cb) {
    const contents = chunk.contents.toString();
    const mod = `module.exports = "${ jsStringEscape(contents) }";`;

    chunk.contents = new Buffer(mod);

    cb(null, chunk);
  }))
  .pipe(rename({
    extname: '.js'
  }))
  .pipe(gulp.dest(outputPath));
