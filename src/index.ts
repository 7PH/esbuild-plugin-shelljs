import { Plugin } from 'esbuild';
import shell from 'shelljs';

const name = 'esbuild-plugin-shelljs';

export const shellJsPlugin: Plugin = {
    name: 'shelljs',

    setup(build) {
        function getCdCommand(): string | null {
            if (build.initialOptions.absWorkingDir) {
                return `cd ${build.initialOptions.absWorkingDir}`;
            }
            return null;
        }

        function getPatchCommand(reverse?: boolean): string {
            let command = `npx patch-package --patch-dir node_modules/${name}/patches`;
            if (reverse) {
                command += ' --reverse';
            }
            return command;
        }

        function getCommand(reverse?: boolean): string {
            return [getCdCommand(), getPatchCommand(reverse)].filter(Boolean).join(' && ');
        }

        // Patch on plugin setup
        shell.exec(getCommand());

        // Unpatch on build end
        build.onDispose(() => {
            shell.exec(getCommand(true));
        });
    },
};

export default shellJsPlugin;
