const gulp = require('gulp')
const htmllint = require('gulp-htmllint')
const stylelint = require('gulp-stylelint')
const eslint = require('gulp-eslint-new')

gulp.task('lint:html', function () {
  return gulp.src('*/solution/*.html').pipe(htmllint())
})

gulp.task('lint:css', function () {
  return gulp.src('*/solution/**/*.{css,scss}').pipe(
    stylelint({
      failAfterError: true,
      reporters: [{ formatter: 'string', console: true }]
    })
  )
})

gulp.task('lint:js', function () {
  return gulp.src(['*/solution.js', '*/solution/**/*.js', '!**/*.compiled.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('default', gulp.series('lint:html', 'lint:css', 'lint:js'))
