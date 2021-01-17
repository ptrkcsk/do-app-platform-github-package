This is a freshly-generated Express app which depends on an npm package hosted on GitHub Packages.

# Local test procedure

1. Install dependencies from a clean slate
    ```sh
    rm -fr node_modules package-lock.json .npmrc && npm cache clean --force && npm install
    ```
   
    Notice that `@codertocat/hello-world-npm` failed to install:
   
    ```
    npm ERR! code E404
    npm ERR! 404 Not Found - GET https://registry.npmjs.org/@codertocat%2fhello-world-npm - Not found
    npm ERR! 404
    npm ERR! 404  '@codertocat/hello-world-npm@^1.0.2' is not in the npm registry.
    npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
    npm ERR! 404
    npm ERR! 404 Note that you can also install from a
    npm ERR! 404 tarball, folder, http url, or git url.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/patrikcsak/.npm/_logs/2021-01-17T17_16_46_858Z-debug.log
    ```
1. Generate a new GitHub personal access token with `write:packages` and `read:packages` permissions
    ![Generate new personal access token](./docs/new-token.png)
1. Generate `.npmrc`
   ```sh
   GITHUB_TOKEN={{token}} npm run create-npmrc
   ```
1. Install again
    ```sh
    rm -fr node_modules package-lock.json && npm cache clean --force && npm install
    ```
   
   Notice that `npm install` succeeded:

   ```
   npm WARN using --force Recommended protections disabled.
   npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
   npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
   npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade

   added 100 packages, and audited 101 packages in 6s

   5 vulnerabilities (3 low, 2 critical)

   To address all issues (including breaking changes), run:
   npm audit fix --force

   Run `npm audit` for details.
   ```

# Digital Ocean App Platform test procedure

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/ptrkcsk/do-app-platform-github-package/tree/main)

