const KernelRegistryProducer = require('./KernelRegistryProducer');
const PythonWrapper = require('../python-wrapper/PythonWrapper');


class KernelHandler{
    constructor(targetKernel){
        if(targetKernel == undefined)
            throw 'No kernel has been defined';
        this.kernelRegistry = new KernelRegistryProducer();
        this.pythonWrapper = new PythonWrapper();
    }

    validateKernel(){
        try{
            
        }catch(e){
            return false
        }
        return false;
    }

}

module.exports = KernelHandler;