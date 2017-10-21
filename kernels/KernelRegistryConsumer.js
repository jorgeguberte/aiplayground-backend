const fs = require('fs');

class KernelRegistryConsumer{
    constructor(){
        this.registryContainer = [];
    }

    getRegistry(){

        try{
            let _registry = fs.readFileSync('./kernel_registry.json', 'utf8');
            this.registryContainer = JSON.parse(_registry);
        }catch(e){
            return false;
        }

        return true;

    }
}

module.exports = KernelRegistryConsumer;