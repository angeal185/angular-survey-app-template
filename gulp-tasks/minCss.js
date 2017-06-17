var gulp 	= require("gulp"),
minifyCSS 	= require("gulp-minify-css"), 			
concatCss = require("gulp-concat-css"), 		
notify 		= require("gulp-notify");

gulp.task("minCss", function () {
  return gulp.src(["app/css/style.min.css","app/css/keyframes.min.css"])
    .pipe(concatCss("app/css/style.min.css"))
	.pipe(minifyCSS())
    .pipe(gulp.dest("./"))
	.pipe(notify("Task ConcatCss complete."));
});