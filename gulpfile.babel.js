import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import liveReactLoad from 'livereactload';

gulp.task('asd', function () {
    console.log('bbb');
});

gulp.task('browserSync', function (done) {
    browserSync({
        server: {
            baseDir: 'static'
        },
        open: true,
        online: false,
        notify: false,
        middleware: [
            function(req, res, next) {
                if (/^(.*\.(?!(htm|html|css|js|ico|map)$))?[^.]*$/.test(req.url) && req.url !== '/') {
                    // logInfo(req.url);
                    res.writeHead(302, {
                        'Location': '/'
                    });
                    res.end();
                }
                next();
            }
        ]
    });

    done();
});

gulp.task('browserify', function () {
    const bundler = watchify(
        browserify({
            entries: 'site.js',
            transform: [[ babelify, {}]],
            plugin: [[ liveReactLoad ]],
            cache: {}, packageCache: {}, fullPaths: true, debug: true
        })
    );

    function bundle() {
        return bundler
            .bundle()
            .on('error', function (err) {
                console.log(err)
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./static/'));
    }

    bundler.on('update', bundle);

    return bundle();
});

gulp.task('default', gulp.parallel('browserSync', 'browserify'));
