const fs = require('fs')
const jobExpPath = './database/jobsExp.json';
const profilePath = './database/profile.json';

const saveToJobExp = (data) =>{

    
    fs.writeFileSync(jobExpPath,JSON.stringify(data));
}

const readJobsExp=()=>{
    if(!fs.existsSync(jobExpPath)) return null;

    const info= JSON.parse(fs.readFileSync(jobExpPath,{encoding:'utf-8'}));
    return info;

}
const readProfile=()=>{
    if(!fs.existsSync(profilePath)) return null;

    const info= JSON.parse(fs.readFileSync(profilePath,{encoding:'utf-8'}));
    return info;

}


module.exports={
    saveToJobExp,readJobsExp,readProfile
}