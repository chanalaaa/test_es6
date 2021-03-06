var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
//var browserSync = require('browser-sync');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 1%', 'Firefox ESR', "ie 8", "ie 7"]
};
gulp.task('sass', function() {
    return sass('scss/**/*.scss',{noCache: true})
        .on('error', sass.logError)
        .pipe(minifycss())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('css')).on('error', sass.logError);

});

gulp.task('babel', function () {
  return gulp.src("build/main.js")
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest("js"));
});
/*
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
        }
    });
});
*/


gulp.task('default', ['sass','babel'], function() {
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("build/**/*.js", ['babel']);
    //gulp.watch(['**/*.html'], browserSync.reload);
    //gulp.watch(['**/*.php'], browserSync.reload);
    //gulp.watch(['css/**/*.css'], browserSync.reload);
});

/*
gulp.task('default', ['sass'], function() {
   
});

gulp.task('watch', function() {
    
})
*/
