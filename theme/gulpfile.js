/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-14 09:18:40
 * @LastEditTime: 2019-03-14 09:18:40
 */
'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('../lib/theme'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('../lib/theme/fonts'));
}

exports.build = series(compile, copyfont);

