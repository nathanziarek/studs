var gulp = require('gulp'),
    less = require('gulp-less');
    prefix = require('gulp-autoprefixer');

  gulp.task( 'default', ['build-less', 'auto-prefix'])

gulp.task( 'build-less', function(cb){
  gulp.src('studs*.less')
    .pipe(less())
    .pipe(gulp.dest('build'))
    .on("end", cb);
});

gulp.task( 'auto-prefix', ['build-less'], function(cb){
  gulp.src('build/*.css')
    .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"], { cascade: true }))
    .pipe(gulp.dest('build'))
    .on("end", cb);
});
