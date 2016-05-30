var gulp = require('gulp');

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    
    var injectSrc = gulp.src(['./assets/css/*.css'], {read: false});
    
    var injectOptions = {
      ignorePath: '/assets'  
    }; 
        
    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components',
        ignorePath: '../../'
    }
    
    return gulp.src('./*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));
})