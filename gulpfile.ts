import * as gulp from "gulp";
import * as ts from "gulp-typescript";
import * as runSequence from "run-sequence";

var tsProject = ts.createProject('tsconfig.json');

gulp.task("typescript", (done: any) => {
    gulp.src(['typings/index.d.ts', 'app/*.ts'])
        .pipe(ts(tsProject))
        .pipe(gulp.dest('dist/'));
    done();
});

gulp.task("html", (done: any) => {
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));
    done();
});

gulp.task("build", (done: any) => {
    runSequence(
        'typescript',
        'html',
        done
    );
})
