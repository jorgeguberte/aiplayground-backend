const PythonShell = require('python-shell');

class PythonWrapper{

    constructor(){
        console.log("PythonWrapper");
        this.kernel = null;
    }
    
    runKernel(kernelName){
        /**
         * Executes the correspondent .py script
         */
        false;
    }

    closeKernel(){
        /**
         * Ends execution of the .py file
         */
        false;
    }

    _validKernel(kernelName){
        /**
         * Verify that the script exists and is whitelisted
         */
        false;
    }

    _readKernelRegistry(kernelName){
        /**
         * Reads from the json file that lists the existing and whitelisted python scripts
         */
        false;
    }
}

module.exports = PythonWrapper;