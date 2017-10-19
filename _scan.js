const testFolder = './';
const fs = require('fs');


fs.readdir(testFolder, (err, files)=>{
    files.forEach(file=>{
        //console.log(file);
    });
    var outputJson = JSON.stringify(files);
    
    fs.writeFile('kernels.json', outputJson, 'utf8', ()=>{console.log("WRitten")});
});