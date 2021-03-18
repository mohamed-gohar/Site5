var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var imagemin = require("gulp-imagemin");

sass.compiler = require("sass");

//sass
gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("all.css"))
    .pipe(autoprefixer({ grid: "no-autoplace" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"));
});

//css libs concat
gulp.task("css", function () {
  return gulp
    .src("./sass/libs/*")
    .pipe(concat("libs.css"))
    .pipe(gulp.dest("./dist/css"));
});

//imagemin
gulp.task("imagemin", function () {
  return gulp
    .src("./imgs/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/imgsmin"));
});

//watch tasks
gulp.task("default", function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});
