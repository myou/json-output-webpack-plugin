# json-output-webpack-plugin

```js
// webpack.config.js
var JSONOutputPlugin = require('json-output-webpack-plugin');

module.exports = {
  plugins: [
    new JSONOutputPlugin([
      {
        path: 'custom-path/a/b/c/d.json',
        obj: {
          foo: 'bar'
        }
      },
      {
        path: 'custom-path/a/b/c/e.json',
        obj: {
          bar: 'baz'
        }
      }
    ])
  ]
};
```
