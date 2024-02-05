const { series } = require('gulp');

function clean(cb) {
  console.log('Clean task');
  cb();
}

function build(cb) {
  console.log('Build task');
  cb();
}

exports.build = build;
exports.default = series(clean, build);