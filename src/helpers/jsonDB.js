const fs = require('fs')
const jobExpPath = './database/jobsExp.json';

const saveToJobExp = (data) =>{

    
    fs.writeFileSync(jobExpPath,JSON.stringify(data));
}

const readJobExp=()=>{
    if(!fs.existsSync(jobExpPath)) return null;

    const info= fs.readFileSync(jobExpPath,{encoding:'utf-8'});
    
    return JSON.parse(info);

}


module.exports={
    saveToFile,readFile
}