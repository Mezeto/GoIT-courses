var gulp         = require('gulp'),
	 autoprefixer = require('gulp-autoprefixer'),
	 sass         = require('gulp-sass'),
	 browserSync  = require('browser-sync'),
	 sourcemaps   = require('gulp-sourcemaps'),
	 concat       = require('gulp-concat'),
	 uglify       = require('gulp-uglify'),
	 cssnano      = require('gulp-cssnano'),
	 imagemin     = require('gulp-imagemin'),
	 rigger       = require('gulp-rigger'),
	 pngquant     = require('imagemin-pngquant');


gulp.task('sass', function() {
	return gulp.src('sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
	return gulp.src('./index.html')
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
	return gulp.src('js/*.js')
		.pipe(rigger())
		.pipe(gulp.dest('js/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('webServer', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});


// Сборка
gulp.task('build:js', function() {
	return gulp.src('src/js/main.js')
		.pipe(rigger())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('build:css', function() {
	return gulp.src('src/css/main.css')
		.pipe(cssnano())
		.pipe(gulp.dest('build/css'));
});

gulp.task('build:img', function() {
	return gulp.src('src/img/**/*')
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
			}))
			.pipe(gulp.dest('build/img'));
});

gulp.task('build:html', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('build/'));
});

gulp.task('build:fonts', function() {
	return gulp.src('src/fonts/**/*')
			.pipe(gulp.dest('build/fonts/'));
});


gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['webServer', 'sass']);
	gulp.watch('./index.html', ['webServer', 'html']);
	gulp.watch('js/*.js', ['webServer', 'js']);
});

gulp.task('build', ['build:html', 'build:js', 'build:css', 'build:img', 'build:fonts']);

