import {task,src,series} from 'gulp'

import {source} from '../config'

import * as clean from 'gulp-clean'
import * as deleteEmpty from 'delete-empty'

function cleanOutput(){
    return src([
        `${source}/**/*.js`,
        `${source}/**/*.d.ts`,
        `${source}/**/*.js.map`,
        `${source}/**/*.d.ts.map`,
    ],{
        read:false
    }).pipe(clean())
}

function cleanDirs(done:()=>void){
    deleteEmpty.sync(`${source}/`);
    done();
}

task('clean:output',cleanOutput);
task('clean:dirs',cleanDirs);
task('clean:bundle',series('clean:output','clean:dirs'));