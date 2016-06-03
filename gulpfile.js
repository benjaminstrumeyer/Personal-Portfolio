var gulp = require('gulp');

gulp.task('injectLib', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    
    var injectSrc = gulp.src(['./assets/css/*.css'], {read: false});
        
    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components'
    }
    
    return gulp.src('./*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc))
        .pipe(gulp.dest('./')); 
})
                     
gulp.task('style', function() {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./assets/css/**/*.css'], {read: false});
    
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
})

gulp.task('default', ['injectLib', 'style']);