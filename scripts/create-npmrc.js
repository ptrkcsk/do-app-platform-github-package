const fs = require('fs');

const contents = `@codertocat:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}
`;

fs.writeFileSync(`${__dirname}/../.npmrc`, contents);
