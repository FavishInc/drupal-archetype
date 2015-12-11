var assert  = require('assert');
var fs      = require('fs');

describe('directory', function() {
  describe('modules', function () {
    it('should exist', function () {
      assert(fs.lstatSync('modules/custom').isDirectory());
      assert(fs.lstatSync('modules/contrib').isDirectory());
    });
  });
  describe('themes', function () {
    it('should exist', function () {
      assert(fs.lstatSync('themes').isDirectory());
      //assert(fs.lstatSync('sites/all/themes/contrib').isDirectory());
      describe('en', function () {
        it('should exist', function() {
          assert(fs.lstatSync('themes/en').isDirectory());
        });
      });
    });
  });
});