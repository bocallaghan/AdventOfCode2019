var common = require('../common');
common.setLogLevel(0);

// ############################## TESTS & INPUT ######################## 
/*
 * In this case, tests take the following arguments:
 * @arg1: input to the algorithm
 * @arg2: indicates whether to include the weight of fuel in the calculations
 * @arg3: the result expected
 */
var tests = [
    [14, true, 2],
    [1969, true, 966],
    [100756, true, 50346]
];

var puzzleInput = [
    148454,118001,98851,51106,113158,139801,126884,63241,71513,60490,131129,76176,74841,73589,130062,77999,140758,98182,101049,80951,75759,92666,142078,89196,124613,134713,75618,62680,141366,108899,88419,133385,90018,123521,51919,58191,109523,106012,94564,61103,72803,66309,143380,113708,146037,135176,131177,77109,108287,72170,87055,121407,126216,139520,120675,103833,130708,74029,149840,117122,105745,81186,51331,72686,52095,72612,76915,104859,114009,69714,130716,133106,73911,79766,56647,98035,103504,93728,111546,57637,68064,62803,72759,144845,80084,139247,139905,112807,87844,149388,76795,135703,120523,137422,108335,60206,133851,138574,141740,74398
];

// ############################## ALGORITHM ########################
function fuelForModuleWithMass(){

    var total = 0;
    var massToCalculateFuelFor = arguments[0][0];
    var shouldIncludeFuelInCalculation = arguments[0][1];

    var dividedAndRoundedMass = Math.round((massToCalculateFuelFor/3));
    if( dividedAndRoundedMass > (massToCalculateFuelFor/3)){
        dividedAndRoundedMass = dividedAndRoundedMass - 1;
    }
    total = dividedAndRoundedMass - 2;

    if(shouldIncludeFuelInCalculation){

        var additionalMassPositive = true;
        var nextMassToBeCalculated = total;
        while(additionalMassPositive){
            
            var fuelRequirement = fuelForModuleWithMass([nextMassToBeCalculated, false]);

            if(fuelRequirement >= 0){
                nextMassToBeCalculated = fuelRequirement;
                total = total + fuelRequirement;
            } else {
                additionalMassPositive = false;
            }
        }
    }

    return total;
}
// ############################## Execute ########################
common.log("###############################################################");
common.log("Welcome to Advent of Code 2019 - " + module.filename.slice(__filename.lastIndexOf(common.path.sep)+1, module.filename.length -3));
common.log("This script will now verify the solution algorithm and, if it passes the tests, utilize it to solve the puzzle.", 1);
common.log("###############################################################");
if (common.runTestSuite(fuelForModuleWithMass, tests)){
    var total = 0;

    puzzleInput.forEach(e => {
        total = total + fuelForModuleWithMass([e, true]);
    });

    common.log("Calculation complete - total fuel requirement is " + total);
}
common.log("Execution Complete", 1);
common.log("###############################################################");