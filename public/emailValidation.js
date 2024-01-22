/*
Este archivo ahora tendrá dos funcionalidades, validar el mail y controlar la respuesta AJAXjj
*/

const emailInput= document.getElementById('emailInput');
const nameInput= document.getElementById('nameInput');
const organizationInput= document.getElementById('organizationInput');
const messageInput= document.getElementById('messageInput');
//const messageInput= document.getElementById('message');
const form= document.getElementById('contactForm');
const submitBtn=document.getElementById('submitBtn');
submitBtn.disabled=true;




const elementsReadys={
    name:'',
    email:'',
    organization :'',
    message:'',
    
    clear:function(){
        this.name='';
        this.email='';
        this.message='';
        this.organization ='';

    },
    
};

const isAllValidated=()=>{
    if(elementsReadys.name!=='' && elementsReadys.email!=='' && elementsReadys.message!=='')
        submitBtn.disabled=false;
    else
        submitBtn.disabled=true;
 
    
}

const messageValidation = (e)=>{
    elementsReadys.message=e.target.value.toString().trim();
    if(elementsReadys.message.length < 5)
        elementsReadys.message='';
    isAllValidated();

}



const nameValidation=(e)=>{
    const onlyLettersExp= /^[ÁÉÍÓÚáéíóúa-zA-Z\s]+$/
    elementsReadys.name= e.target.value.toString().trim();
    console.log(elementsReadys.name)
    elementsReadys.name=validator(onlyLettersExp,e.target,'El nombre no puede tener números.');
    isAllValidated();
   
    

}

            

const emailValidation= (e)=>{
    //console.log(e.target.value);//target es la referencia
   // const regExp= new RegExp("^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{3,10})+$");
    const emailExp=/^([\w_\.-]+)@([\w\.-]+)\.([a-z\.]{2,6})$/
    elementsReadys.email= e.target.value.toString().trim()
    elementsReadys.email=validator(emailExp,e.target,'Debe ingresar un email valido.');
    isAllValidated();
     
    
    
    //return regExp.test(email)
}
//agregar validador con expresión regular que solo permita letras, espacios y puntos. Para el nombre y la organización
//
const validator =(regex,target,tooltip) =>{
    const label = target.nextElementSibling.nextElementSibling;
    const valueToTest= target.value.toString().trim()
    if(valueToTest.length==0) return '';
    if(regex.test(valueToTest)){
        label.classList.add('hidden');
        target.classList.remove('border-red-500');
        return valueToTest.toLowerCase();

    }else{
        label.classList.remove('hidden');
        target.classList.add('border-red-500');
        label.textContent= tooltip;
        return '';
    }
}


emailInput.addEventListener('change',emailValidation);
nameInput.addEventListener('change',nameValidation);
messageInput.addEventListener('input',messageValidation);



