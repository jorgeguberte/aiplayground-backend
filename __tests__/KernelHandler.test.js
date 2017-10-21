const KernelHandler = require('../kernels/KernelHandler');

const KernelRegistryProducer = require('../kernels/KernelRegistryProducer');
const PythonWrapper = require('../python-wrapper/PythonWrapper');

const kernelName = 'parity';
const kh = new KernelHandler(kernelName);

describe('Class integrity', ()=>{
    test('Should be instantiated correctly', ()=>{
        expect(kh).toBeInstanceOf(KernelHandler);
    });

    test('should have an instance of KernelRegistryProducer', ()=>{
        expect(kh.kernelRegistry).toBeInstanceOf(KernelRegistryProducer);
    });

    test('should have an instance of PythonWrapper', ()=>{
        expect(kh.pythonWrapper).toBeInstanceOf(PythonWrapper);
    });
});


describe('Kernel acquisition', ()=>{
    test('should validate a kernel', ()=>{
        expect(kh.validateKernel()).toBe(true);
    });
    /*test('should get a kernel', ()=>{
        expect(kh.getKernel()).toBe(true);
    })*/
})

