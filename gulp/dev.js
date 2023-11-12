const gulp = require('gulp')
const fileInclude = require('gulp-file-include')
const gulpPug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const server = require('gulp-server-livereload')
const clean = require('gulp-clean')
const fs = require('fs')
const maps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const webpack = require('webpack-stream')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const changed = require('gulp-changed')

const fileIncludeSettings = {
  prefix: '@@',
  basepath: '@file',
}

const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: 'Error <%= error.message %>',
      sound: false,
    }),
  }
}

// gulp.task('html:dev', function () {
//   return gulp
//     .src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
//     .pipe(changed('./build/', { hasChanged: changed.compareContents }))
//     .pipe(plumber(plumberNotify('HTML')))
//     .pipe(fileInclude(fileIncludeSettings))
//     .pipe(gulp.dest('./build/'))
// })

gulp.task('gulpPug:dev', function () {
  return gulp
    .src(['./src/pug/**/*.pug', '!./src/html/blocks/*.html'])
    .pipe(gulpPug())
    .pipe(changed('./build/', { hasChanged: changed.compareContents }))
    .pipe(plumber(plumberNotify('HTML')))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(gulp.dest('./build/'))
})

gulp.task('sass:dev', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(changed('./build/scss'))
    .pipe(plumber(plumberNotify('SASS')))
    .pipe(maps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(maps.write())
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('js:dev', function () {
  return (
    gulp
      .src('./src/js/*.js')
      .pipe(changed('./build/js'))
      .pipe(plumber(plumberNotify('JS')))
      // .pipe(babel())
      .pipe(webpack(require('./../webpack.config.js')))
      .pipe(gulp.dest('./build/js'))
  )
})

gulp.task('images:dev', function () {
  return (
    gulp
      .src('./src/img/**/*')
      .pipe(changed('./build/img'))
      // .pipe(imagemin({ verbose: true }))
      .pipe(gulp.dest('./build/img'))
  )
})

gulp.task('fonts:dev', function () {
  return gulp
    .src('./src/fonts/**/*')
    .pipe(changed('./build/fonts'))
    .pipe(gulp.dest('./build/fonts'))
})

gulp.task('files:dev', function () {
  return gulp
    .src('./src/files/**/*')
    .pipe(changed('./build/files'))
    .pipe(gulp.dest('./build/files'))
})

const serverOptions = {
  livereload: true,
  open: true,
}

gulp.task('server:dev', function () {
  return gulp.src('./build').pipe(server(serverOptions))
})

gulp.task('clean:dev', function (done) {
  if (fs.existsSync('./build/')) {
    return gulp.src('./build', { reade: false }).pipe(clean())
  }
  done()
})

gulp.task('watch:dev', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev'))
  gulp.watch('./src/**/*.pug', gulp.parallel('gulpPug:dev'))
  gulp.watch('./src/img/**/*', gulp.parallel('images:dev'))
  gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'))
  gulp.watch('./src/files/**/*', gulp.parallel('files:dev'))
  gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'))
})
