const KernelRegistryConsumer = require('../kernels/KernelRegistryConsumer');

const krc = new KernelRegistryConsumer();

describe('Class integrity', ()=>{
    test('should be instantiated', ()=>{
        expect(krc).toBeInstanceOf(KernelRegistryConsumer);
    });

    test('should have a registry container', ()=>{
        expect(krc.registryContainer).toBeDefined();
    })
});

describe('Retrieval', ()=>{
    test('should open the registry json file', ()=>{
        expect(krc.getRegistry()).toBe(true);
    });

    test('registry container should have been populated', ()=>{
        expect(krc.registryContainer.hasOwnProperty('kernels')).toBe(true);
    })
})