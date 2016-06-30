var gulp         = require('gulp'), 
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps');


gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
    	.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('webserver', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['webserver', 'sass']);
    gulp.watch('./index.html', ['webserver', 'html']);
    gulp.watch('js/*.js', ['webserver', 'js']);
});

