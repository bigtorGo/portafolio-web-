
const sgMail= require('@sendgrid/mail');
require('dotenv').config();



sgMail.setApiKey(process.env.SENDGRID_K);



async function sendMessage (name,org,email,text){

    const message={
        to:'gomezatabales.v@gmail.com',
        from:'contacto@vihugodev.com',
        subject:'Contacto Portafolio',
        text,
        html:`<h1> ${email} </h1>
            <h2>${name}</h4>
            <h4>${org}</h4> 
            <p>${text}</p>`

    };

    const resPromise= await sgMail.send(message);
    return resPromise;
    
    
    
    /*.then(response=>
        {
            console.log('Email sent...',response)
            return response;
        })
    .catch(err=>{throw err})*/


}

module.exports={
    sendMessage
}