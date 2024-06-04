# esbuild-plugin-shelljs

Plugin for esbuild to be able to bundle [shelljs](https://github.com/shelljs/shelljs). Without this fix, bundling shelljs gives error:

```text
Error: Module not found in bundle: ./src/cat
```

### Install

```bash
npm i -D esbuild-plugin-shelljs
```

```javascript
import { shellJsPlugin } from "esbuild-plugin-shelljs";

esbuild.build({
  // [..]
  plugins: [shellJsPlugin],
});
```

### How does it work

This plugin patches the `shelljs` dependency before bundling it. Esbuild knows the path of `shelljs` local dependencies with `.js` suffixes, but a dynamic import which omits the extension makes esbuild fail to resolve dependencies. The patch adds `.js` to the dynamic imports.
