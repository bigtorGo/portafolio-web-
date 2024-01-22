const express= require('express');
const hbs=require('hbs');
const path= require('path');
const app= express()

const {readProfile}= require('./src/helpers/jsonDB.js');
const {RegisterHelpers}= require('./src/helpers/hbsHelpers.js')
const{sendMessage}=require('./src/email.js');

//import {readJobsExp,readProfile} from './src/helpers/jsonDB.js');
const port = 3000

app.set('view engine','hbs');

app.use(express.static(path.join(__dirname,'public')))
app.use('/node_modules', express.static(path.join(__dirname,'node_modules')));
//app.use(express.urlencoded({extended:false}))//con esto configuramos el servidor para que transforme los datos enviados por el formulario, en un objeto que se pueda leer
app.use(express.json({limit:'1mb'}));

RegisterHelpers(hbs);
hbs.registerPartials(__dirname+'/views/partials',function(err){});


app.post('/send-email',(req,res)=>{
    
    const{name,email,message,organization}=req.body;
    sendMessage(name,organization,email,message)
        .then(sendgridResponse =>{
            res.sendStatus(sendgridResponse[0].statusCode);
        })
        .catch(err =>{
            
            //enviar a una pagina de error.

        })
       

})

app.get('/line',(req,res)=>{
    res.render('timeline');
})


app.get('/',(req,res)=>{//esto es un controlador
    
    const profileData=readProfile();
    
    res.render('index',{
        profileData:profileData,
        
        
   
    })
        //job1Data,
        //job2Data,
       /* job2Object:readJobExp()[1],
        job3Object:readJobExp()[2],
        job4Object:readJobExp()[3]*/
   

})
app.get('/contact',(req,res)=>{
    res.render('contact',{
        
    })

})

app.get('/works',(req,res)=>{
    res.render('works',{
        
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