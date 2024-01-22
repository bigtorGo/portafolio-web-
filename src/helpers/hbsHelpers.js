const {readJobsExp}= require('./jsonDB.js');

function RegisterHelpers(hbs) {
    hbs.registerHelper('getFirstJobData', ((data) => {
        const jobExp = readJobsExp();
        return jobExp[0][data];

    }))
    hbs.registerHelper('getSecondJobData', ((data) => {
        const jobExp = readJobsExp();
        return jobExp[1][data];

    }))
    hbs.registerHelper('getThirdJobData', ((data) => {
        const jobExp = readJobsExp();
        return jobExp[2][data];

    }))
    hbs.registerHelper('getFourthJobData', ((data) => {
        const jobExp = readJobsExp();
        return jobExp[3][data];

    }))
}

module.exports = {
    RegisterHelpers
}