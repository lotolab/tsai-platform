import { task, src, dest } from 'gulp';
import { packagePaths } from '../config';

/**
 * Copies static files to publish libs
 * @returns NodeJS.ReadWriteStream
 */
function copyMisc():NodeJS.ReadWriteStream {
    const miscFiles = src(['README.md','LICENSE','.npmignore']);


    return packagePaths.reduce(
        (stream,packagePath)=>stream.pipe(dest(packagePath)),
        miscFiles,
    );
}

task('copy-misc',copyMisc);