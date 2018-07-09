import gulp from "gulp";
import rimraf from "rimraf";
import webpack from "webpack";
import browserSync from "browser-sync";
import config from "./webpack.config.js";

const pathsToWatch = [
	"./src/**/*",
	"./index.html"
]

browserSync.init({
	server: {
		baseDir: "./"
	}
});

const log = (cb) => {console.log("gjlfs"); cb()}
const clean = (cb) => {
	rimraf("./build", err => {
		console.log(err);
	});
	cb();
}

const watch = () => {
	return gulp.watch(pathsToWatch, gulp.series(compile, reload))
}

const reload = (cb) => {
	browserSync.reload();
	cb();
}

const compile = (cb) => {
	webpack(config, (err, stat) => {
		if(err){
			console.log(err);
		}
	});
	cb();
}

const inject = () => {
	return gulp.src("./build/*")
		.pipe(browserSync.stream());
}

gulp.task(inject);
gulp.task(clean);
gulp.task(reload);
gulp.task(compile);
gulp.task(watch);
gulp.task(log);