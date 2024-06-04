#!/bin/bash

# Build the package
npm run build

# Create a tarball of the package
rm -f test/*.tgz test/out.js
npm pack --pack-destination test

# Clean the test directory and install the package
cd test
npm run clean
npm i
npm i --no-save *.tgz

# Build with esbuild
node build.js

# Run the output
node out.js
