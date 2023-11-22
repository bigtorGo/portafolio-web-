const express= require('express');
const hbs=require('hbs');

const app= express()

app.set('view engine','hbs');
app.use(express.static('dist'))

hbs.registerPartials(__dirname+'/views/partials',function(err){});

app.get('/',(req,res)=>{//esto es un controlador
    res.render('home',{
        titulo:'Titulo dínamico',
        nombre:'titulo'
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


app.listen(8081)