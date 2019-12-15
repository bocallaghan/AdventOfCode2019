var expect = require("chai").expect;
var step_1a = require("../1/1a");
var step_1b = require("../1/1b");

// ############################## 1a ########################
describe("AOC-1A -> calculate the amount of fuel required for the given payload mass.", function () {
    describe("Fuel load calculator for given mass", function () {

        tests = [
            [12, 2],
            [14, 2],
            [1969, 654],
            [100756, 33583]
        ];

        tests.forEach(e => {
            it("Should require fuel of value " + e[1] + " for a mass of " + e[0], function () {
                expect(step_1a.test(e[0])).to.equal(e[1]);
            });
        });
    });
});

// ############################## 1b ########################
describe("AOC-1B -> calculate the amount of fuel required for the given payload mass as well as the fuel required for that fuel weight.", function () {
    describe("Fuel load calculator for given mass and its fuel", function () {

        tests = [
            [14, 2],
            [1969, 966],
            [100756, 50346]
        ];

        tests.forEach(e => {
            it("Should require fuel of value " + e[1] + " for a mass of " + e[0], function () {
                expect(step_1b.test(e[0])).to.equal(e[1]);
            });
        });
    });
});