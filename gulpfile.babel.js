import gulp from "gulp";
import rimraf from "rimraf";
import webpack from "webpack";
import webpackStream from "webpack-stream"
import browserSync from "browser-sync";
import * as webpackConfig from "./webpack.config.js";

const pathsToWatch = [
	"./src/scripts/**/*.js",
	"./src/styles/**/*.less",
	"./index.html"
]

const reload = browserSync.reload;


gulp.task("build:clean", cb => {
	rimraf("./build", () => cb());
});

gulp.task("build:compile", () => {
	console.log("helooo");
	// gulp.src("./src/**/*")
	// 		.pipe(webpackStream(webpackConfig), webpack)
			// .pipe(gulp.dest("./build"))
});

gulp.task("build:watch", () => {

		browserSync.init({
			server: {
				baseDir: "./"
			}
		});

		gulp.watch("./build", () => {
			browserSync.reload();
		});

		gulp.watch(pathsToWatch, function watchCompil(done) {
			console.log("hello");
			gulp.series(
				"build:compile"
			);
			reload();
			done();
		})

});