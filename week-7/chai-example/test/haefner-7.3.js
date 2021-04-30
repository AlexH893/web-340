var fruits = require("../haefner-fruits.js");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});