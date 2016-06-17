var gulp         = require('gulp'), 
    browserSync  = require('browser-sync'), 
    concat       = require('gulp-concat'), 
    uglify       = require('gulp-uglify'), 
    cssnano      = require('gulp-cssnano'), 
    autoprefixer = require('gulp-autoprefixer');
    imagemin     = require('gulp-imagemin'), 
    pngquant     = require('imagemin-pngquant'), 
    del          = require('del'), 

gulp.task('js', function () {
	return gulp.src('src/js/*.js')
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('css', function () {
	return gulp.src('src/css/*.css')
		.pipe(concat('style.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('build/css'));
});

gulp.task('img', function () {
	return gulp.src('src/img/*')
		.pipe(imagemin({
			interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
		}))
		.pipe(gulp.dest('build/img'));	
});

gulp.task('html', function () {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('build/'));
});

gulp.task('default', ['html', 'js', 'css', 'img']);