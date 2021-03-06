const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
	return gulp.src('./scss/**/*.scss')
				.pipe(sass())
				.pipe(gulp.dest('./dist/css'))
				.pipe(browserSync.stream())
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./dist",
			index: "index.html"
		}
	});

	gulp.watch("./scss/**/*.scss", style);
	gulp.watch("./dist/js/**/*.js").on("change", browserSync.reload);
	gulp.watch("./dist/*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
