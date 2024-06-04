import { Plugin, PluginBuild } from 'esbuild';
import shell from 'shelljs';
import { name } from '../package.json';


export const shellJsPlugin: Plugin = {
    name: 'shelljs',

    setup(build: PluginBuild) {
        build.onStart(() => {
            shell.exec(`npx patch-package --patch-dir node_modules/${name}/patches`);
        });

        build.onEnd(() => {
            shell.exec(`npx patch-package --reverse --patch-dir node_modules/${name}/patches`);
        });
    },
};

export default shellJsPlugin;
