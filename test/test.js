var assert = require('assert');
var validator = require('../lib');
var should = require('should');


var header = {};
var errors;

beforeEach( function (done) {
  header = {};
  done();
});

describe('SMTPAPI-Header', function () {
  describe('to header', function () {
    it('should identify when type is not array', function () {
      header.to = {};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) array');
    });
    it('should identify when array is empty', function () {
      header.to = [];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('does not meet minimum length of 1');
    });
    it('should identify when values are not unique', function () {
      header.to = ["1", "1"];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('contains duplicate item');
    });
    it('should identify when values are not strings', function () {
      header.to = [1];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) string');
    });
  });
  describe('category header', function () {
    it('should identify when type is not array', function () {
      header.category = {};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) array');
    });
    it('should identify when array is empty', function () {
      header.category = [];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('does not meet minimum length of 1');
    });
    it('should identify when values are not unique', function () {
      header.category = ["1", "1"];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('contains duplicate item');
    });
    it('should identify when values are not strings', function () {
      header.category = [1];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) string');
    });
  });
  describe('section header', function () {
    it('should identify when value is not an object', function () {
      header.section = [];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) object');
    });
    it('should identify when inner values are not strings', function () {
      header.section = {"test": 1};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) string');
    });
    it('should identify is object is empty');
  });
  describe('sub header', function () {
    it('should identify when value is not object', function () {
      header.sub = [];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) object');
    });
    it('should identify when inner values are not arrays', function () {
      header.sub = {test: {}};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) array');
    });
    it('should identify when inner array is empty', function () {
      header.sub = {test: []};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('does not meet minimum length of 1');
    });
    it('should identify when inner array value has duplicates', function () {
      header.sub = {test: ['1', '1']};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('contains duplicate item');
    });
    it('should identify when inner array value is not string', function () {
      header.sub = {test: [1]};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) string');
    });
  });
  describe('unique args header', function () {
    it('should identify when value is not an object', function () {
      header.unique_args = [];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) object');
    });
    it('should identify when inner values are not strings', function () {
      header.unique_args = {"test": 1};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) string');
    });
    it('should identify is object is empty');
  });
  describe('filter header', function () {
    it('should identify first level is an object', function () {
      header.filters = [];
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) object');
    });
    it('should identify the settings key', function () {
      header.filters = {test:{}};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is required');
    });
    it('should identify inside settings another object', function () {
      header.filters = {test:{settings:[]}};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) object');
    });
    it('should identify inner setting values can be strings or number', function () {
      header.filters = {test:{settings:{template:{}}}};
      errors = validator(header);
      errors.length.should.equal(1);
      errors[0].message.should.equal('is not of a type(s) string,number');
    });
  });
});
