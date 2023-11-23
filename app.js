const express= require('express');
const hbs=require('hbs');
const {readJobsExp,readProfile}= require('./src/helpers/jsonDB.js');

const app= express()

app.set('view engine','hbs');
app.use(express.static('public'))
const port = 3000

hbs.registerPartials(__dirname+'/views/partials',function(err){});

app.get('/',(req,res)=>{//esto es un controlador
    const job1Data=readJobsExp()[0];
    const profileData=readProfile();
    res.render('index',{
        profileData,
        job1Data,
       /* job2Object:readJobExp()[1],
        job3Object:readJobExp()[2],
        job4Object:readJobExp()[3]*/
    })

})

app.get('/generic',(req,res)=>{
    res.render('generic',{
        
    })

})
app.get('/elements',(req,res)=>{
    res.render('elements',{
        
    })

})
/*app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')

})*/

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/ `)
  })