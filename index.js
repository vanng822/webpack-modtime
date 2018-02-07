var path = require('path');
var touch = require('touch');

function WebpackModTime(options) {
  this.options = options;
  if (!this.options) {
    throw new Error('See options in https://www.npmjs.com/package/touch');
  }
}

WebpackModTime.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('done', function(stats) {
    if (stats.compilation.errors.length > 0) {
      return;
    }
    if (compiler.options.output.path) {
      stats.compilation.chunks.forEach(function(chunk) {
        chunk.files.forEach(function(file) {
          var filename = path.join(compiler.options.output.path, file);
          touch.sync(filename, self.options);
        });
      });
    } else {
      console.log('No output path found');
    }
  });
};

module.exports = WebpackModTime;
