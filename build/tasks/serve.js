var gulp = require('gulp'),
	proxy = require('http-proxy-middleware'),
	browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:8000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: true,
    open: 'local',
    browser: "google chrome",
    port: 8000,
    server: {
      baseDir: ['.'],
      middleware: [
      				proxy('!/src/**', {
	                    target: 'http://127.0.0.1:8081',
	                    changeOrigin: false,
	                    ws: true
               		})
                ]
    }
  }, done);


});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:8000
gulp.task('serve-bundle', ['bundle'], function(done) {
  browserSync({
    online: true,
    open: 'local',
    browser: "google chrome",
    port: 8000,
    server: {
      baseDir: ['.'],
      middleware: [
      				proxy('!/src/**', {
	                    target: 'http://127.0.0.1:8081',
	                    changeOrigin: false,
	                    ws: true
               		})
                ]
    }
  }, done);
});
