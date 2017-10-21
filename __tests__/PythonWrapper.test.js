const PythonWrapper = require('../python-wrapper/PythonWrapper');
const PythonShell = require('python-shell');

let pyWrapper = new PythonWrapper();

describe('class integrity', ()=>{   
    test('should be instantiated correctly', ()=>{
        expect(pyWrapper).toBeInstanceOf(PythonWrapper);
    })

    describe('kernel property integrity', ()=>{
        /**
         * The kernel property is declared in the class scope, but initialized
         * as `null` because it will be defined later on, when `PythonWrapper.runKernel` is called.
         */
        test('should have a kernel property', ()=>{
            expect(pyWrapper.kernel).toBeDefined();
        });
        test('kernel property should be null', ()=>{
            expect(pyWrapper.kernel).toBeNull();
        })
    })
    
    
    test('should have a runKernel method', ()=>{
        expect(pyWrapper.runKernel).toBeDefined();
    });

    test('should have a validKernel method', ()=>{
        expect(pyWrapper._validKernel).toBeDefined();
    });

    test('should have a closeKernel method', ()=>{
        expect(pyWrapper.closeKernel).toBeDefined();
    });

    test('should have a readKernelRegistry method', ()=>{
        expect(pyWrapper._readKernelRegistry).toBeDefined();
    })
});



