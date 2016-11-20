var gulp = require('gulp');
var babel = require("gulp-babel");
var eslint = require('gulp-eslint');
var less = require('gulp-less');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleanCss = new LessPluginCleanCSS({ advanced: true });
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglifyJs = require('gulp-uglify');
var karmaServer = require('karma').Server;
var inject = require('gulp-inject');
var gulpIf = require('gulp-if');

var path = {
    css: 'content/*.less',
    js: ['app/**/*.module.js', 'app/**/*.js'],
    dest: {
        local: '.',
        base:'./dist',
        css: './dist/css',
        js: './dist/js'
    },
    lint: ['app/**/*.module.js', 'app/**/*.js']
};

gulp.task('build', function () {
    gulp.start('bundleJsRelease', 'bundleCss', 'jasmine-runner');
});

gulp.task('default', function (){
    gulp.start('bundleJsDev', 'watchJs', 'bundleCss', 'watchCss', 'jasmine-watcher', 'eslint-watch');
});

gulp.task('bundleCss', function (){
    gulp.src(path.css)
        .pipe(less({
            plugins: [cleanCss]
        }))
        .pipe(concatCss("1764Attendance.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.dest.css));

});

gulp.task('watchCss', function (){
    gulp.watch(path.css, ['bundleCss']);
});

gulp.task('bundleJsDev', function (){
    updateIndexPage(false);
});

gulp.task('bundleJsRelease', function (){
    updateIndexPage(true);
});

gulp.task('watchJs', function (){
    gulp.watch(path.js, ['bundleJsDev']);
});

gulp.task('eslint-watch', function () {
    // Lint only files that change after this watch starts
    var lintAndPrint = eslint();
    // format results with each file, since this stream won't end.
    lintAndPrint.pipe(eslint.formatEach());

    return gulp.watch(path.lint, function(event) {
        if (event.type !== 'deleted') {
            gulp.src(event.path)
				.pipe(lintAndPrint, { end: false });
        }
    });
});

gulp.task('eslint', function () {
    var MAX_WARNINGS = 1;
    var count = 0;
    return gulp.src(path.lint)
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.result( function(result){
            count += result.warningCount;

            if (count > MAX_WARNINGS) {
            // Report which file exceeded the limit
            // The error will be wraped in a gulp PluginError
            throw {
                name: 'TooManyWarnings',
                fileName: result.filePath,
                message: 'Too many warnings!',
                showStack: false
            };
        }
    }));
});

gulp.task('jasmine-runner', function(){
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('jasmine-watcher', function(){
    new karmaServer({
        configFile: __dirname + '/karma.conf.js'
    }).start();
});

function updateIndexPage(uglify) {
        var target = gulp.src('index.html');

        return target
            .pipe(inject(bundle1764AttendanceScripts(uglify), { starttag: '<!-- inject:1764Attendance:{{ext}} -->' }))
            .pipe(gulp.dest(path.dest.base))
            .pipe(gulp.dest(path.dest.local));
}

function bundle1764AttendanceScripts(uglify) {

    var sources = gulp.src(path.js)
        .pipe(gulpIf(uglify, concat('1764Attendance.min.js')))
        .pipe(babel())
        .pipe(gulpIf(uglify, uglifyJs()))
        .pipe(gulp.dest(path.dest.js));

    return sources;
}