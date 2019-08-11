// had to remove proxy from package.json
// https://stackoverflow.com/a/52620241
// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(proxy('/api/v1',
    { target: 'http://localhost:3001' }
  ));
}
