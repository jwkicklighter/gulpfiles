var gulp  = require('gulp');
var watch = require('gulp-watch');
var ctags = require('gulp-ctags');

gulp.task('ctags', function() {
  var dirs = [
    'app/**',
    'spec/**',
    'config/**',
    'features/**',
    'fixtures/**',
    'public/**'
  ];

  return watch(dirs, function() {
    var ctagOpts = {
      name: 'tags',
      concurrency: 4
    };

    gulp.src(dirs)
      .pipe(ctags(ctagOpts))
      .pipe(gulp.dest('./'));
  });
});

gulp.task('default', ['ctags']);

gulp.task('tags', ['ctags']);
