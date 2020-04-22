import gulp from "gulp";
import sass from "gulp-sass";

const path = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles"
  }
};

export function styles() {
  return gulp
    .src(path.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(path.styles.dest));
}
