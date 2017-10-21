//#TODO: Parse directories
const fs = require('fs');

class KernelRegistryProducer{
    constructor(rootKernelFolder){
        this.folderStructure = [];
        this.kernelFolder = rootKernelFolder == null ? './' : rootKernelFolder;

        this.scanKernelDir();
        
    }

    scanKernelDir(){
        /**
         * Scans the folder searching for python files
         */
        try{
            let files = fs.readdirSync(this.kernelFolder);
            for(var file of files){
                if(file.slice(-3) == '.py'){
                    this.folderStructure.push(file.slice(0,-3));
                }
            }
        }catch(e){
            console.log(e);
        }
        finally{
            return true;
        }

        return false;
    }

    produceRegistry(){
        let registryContainer = {kernels: this.folderStructure};
        let registryData = JSON.stringify(registryContainer);
        try{
            fs.writeFileSync('./kernel_registry.json', registryData, 'utf8');
            return true;
        }catch(e){
            let error = e;
            console.log(`Error producing registry: ${e}`)
        }
        return false;
    }
}

module.exports = KernelRegistryProducer;