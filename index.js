
function JSONOutputPlugin(jsonObjs) {
  this.jsonObjs = jsonObjs;
}

JSONOutputPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, done) => {
    this.jsonObjs.forEach(function(jsonObj) {
      var json = JSON.stringify(jsonObj.obj);
      compilation.assets[jsonObj.path] = {
        source: function() { return json; },
        size: function() { return json.length; }
      };
    });
  });
};

module.exports = JSONOutputPlugin;
