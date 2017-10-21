const KernelRegistryProducer = require('../kernels/KernelRegistryProducer');

let kernelRegistry = new KernelRegistryProducer('./kernels');

describe('KRP integrity', ()=>{
    test('should be instantiated correctly', ()=>{
        expect(kernelRegistry).toBeInstanceOf(KernelRegistryProducer);
        expect(kernelRegistry.folderStructure).toBeDefined();
    });

    test('should have properties', ()=>{
        expect(kernelRegistry).toHaveProperty('folderStructure');
    })

    test('should have a scanKernelDir method', ()=>{
        expect(kernelRegistry.scanKernelDir).toBeDefined();
    });

    test('should have a produceRegistry method', ()=>{
        expect(kernelRegistry.produceRegistry).toBeDefined();
    });
});

describe('Dir scanning', ()=>{
    test('should scan the kernel dir', ()=>{
        expect(kernelRegistry.scanKernelDir()).toBe(true);
    });

    test('should produce an array', ()=>{
        expect(kernelRegistry.folderStructure.length).toBeGreaterThan(0);
    });
});



describe('should produce and save a json file', ()=>{
    test('should save the json file', ()=>{
        expect(kernelRegistry.produceRegistry()).toBe(true);
    });
});