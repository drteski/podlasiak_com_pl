require('dotenv').config();

const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const minify = require('gulp-js-minify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('js', () => {
	return gulp
		.src('public/javascripts/dev.js')
		.pipe(rename('index.js'))
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: [
					[
						'@babel/preset-env',
						{
							bugfixes: true,
							corejs: 3,
							modules: false,
							targets: 'safari > 13.1',
							useBuiltIns: 'usage',
						},
					],
				],
			})
		)
		.pipe(minify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/javascripts/'));
});

gulp.task('style', () => {
	const plugins = [autoprefixer(), cssnano()];
	return gulp
		.src('public/stylesheets/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/stylesheets/'));
});

gulp.task(
	'watch',
	gulp.series('style', 'js', (done) => {
		gulp.watch('public/javascripts/dev.js', gulp.series('js'));
		gulp.watch('public/stylesheets/*/**.scss', gulp.series('style'));
		done();
	})
);

gulp.task('nodemon', (cb) => {
	let started = false;
	return nodemon({
		ext: 'js html css scss hbs',
		script: './bin/www',
	}).on('start', () => {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task(
	'browser-sync',
	gulp.series('nodemon', () => {
		browserSync.init(null, {
			proxy: `${process.env.BASE_URL}:${process.env.PORT}`,
			files: ['../'],
			port: process.env.PROXY_PORT,
		});
	})
);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));
