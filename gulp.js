var gutil = require('gulp-util');
var test = require('tap').test;
var fs = require('fs');
var path = require('path');

var cssAdjuster = require('./gulp_min');

var read = function(name) {
  return fs.readFileSync(path.join(__dirname, name));
};

var testContents = read('public/common.css');

test('prepends url', function(t) {
  var stream = cssAdjuster({
    prepend: 'prepend/'
  });

  stream.write(new gutil.File({
    contents: read('public/common.css')
  }));

  stream.once('data', function(file) {
    t.equal(file.contents.toString('utf8').trim(),
            read('public/expected-prepend.css').toString().trim(),
           'prepend');
  });

  stream.end();

  t.end();

});
