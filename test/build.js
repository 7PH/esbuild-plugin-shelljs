/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const { shellJsPlugin } = require('esbuild-plugin-shelljs');

(async () => {
    await esbuild.build({
        entryPoints: ['app.js'],
        bundle: true,
        outfile: 'out.js',
        platform: 'node',
        plugins: [shellJsPlugin],
    });
})();
