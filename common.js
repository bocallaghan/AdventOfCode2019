var path = require('path');
var globalLogLevel = 0; // 0 = off, 1 = info, 2 = debug

function _log (message, logLevel){
    
    if (!logLevel){
        console.log(message);
    
    } else if (logLevel <= globalLogLevel){
        console.log(message);
    }
}

function runTest(){
    
    if(arguments.length !== 2){
        _log("E-02 - ERROR parsing test information - the generic test run function expctes two arguments [function, arguments[]].", 0);
        process.exit(-1);
    }
    var algorithm = arguments[0];
    var expectedResult = arguments[1][arguments[1].length - 1];
    var algorithm_args = arguments[1].slice(0, arguments[1].length - 1);

    _log("##################", 2);
    _log("Test input is " + JSON.stringify(algorithm_args) + " - starting test now expecting output of " + expectedResult, 1);
    
    var testOutput = algorithm(algorithm_args);
    _log("Test output is " + testOutput, 2);
    if(expectedResult === testOutput){
        _log("## TEST PASSED", 1);
        _log("##################", 2);
        return true;
    } else {
        _log("## TEST FAILED", 2);
        _log("#################", 2);
        _log("ERROR E-01: Test of input " + JSON.stringify(algorithm_args) + " failed - output expected was " + expectedResult + " which did not match " + testOutput, 0);
        return false;
    }
}

module.exports = {
    log: function (message, logLevel){
    
        _log(message, logLevel);
    },
    setLogLevel: function(newLogLevel){
        globalLogLevel = newLogLevel;
    },
    runTestSuite: function(algorithm, tests){

        this.log("Beginning the test of the algorithm", 1)
        var testFailed = false;
        tests.forEach(test => {
            if(!runTest(algorithm, test)){
                testFailed = true;
            }
        });
        
        if(testFailed){
            this.log("ABORT - All tests did NOT complete successfully", 0);
            return false;
        } else {
            this.log("All tests completed successfully", 1);
            return true;
        }
    },
    path: path
};