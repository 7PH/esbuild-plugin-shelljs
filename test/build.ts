import esbuild from 'esbuild';
import shellJsPlugin from '../src';

(async () => {
    await esbuild.build({
        entryPoints: ['build/test/app.js'],
        bundle: true,
        outfile: 'build/test/out.js',
        plugins: [shellJsPlugin],
        platform: 'node',
    });
})();
