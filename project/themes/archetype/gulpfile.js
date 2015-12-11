var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
var babel = require("gulp-babel");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("js", function () {
    return gulp.src("es6/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("js"));
});

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen({host: null});
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('es6/**/*.js', ['js']);
    gulp.watch('css/**/*.css').on('change', livereload.changed);
});

// Default task
gulp.task('default', ['sass', 'watch', 'js']);

// Build without watch
gulp.task('build', ['sass', 'js']);
