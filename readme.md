This is a freshly-generated Express app which depends on an npm package hosted on GitHub Packages.

To test locally:

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
