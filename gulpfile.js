var gulp   = require('gulp');
var gutil  = require('gulp-util');
var coffee = require('gulp-coffee');


gulp.task('coffee', function () {
    gulp.src('public/coffee/**/*.coffee')
        .pipe( coffee() )
				.pipe( gulp.dest('public/js') );
});

gulp.task('watch', function () {
    gulp.watch('public/coffee/**', function ( event ) {
        // event type is added or changed or deleted
        gulp.run('coffee');
		});
});

gulp.task('default', function () {
    gulp.run('watch');
});

