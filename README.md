# json-output-webpack-plugin

```js
// webpack.config.js
var JsonOutputPlugin = require('json-output-webpack-plugin');

module.exports = {
  plugins: [
    new JsonOutputPlugin([
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
