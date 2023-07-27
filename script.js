console.log('Loading JavaScript');

function validacion(){
    console.log('Validando');
    let name= document.getElementById('nombre').value;
    let email= document.getElementById('email').value;
    let tel= document.getElementById('telefono').value;
    datos = [name,email,tel];
    
    if(datos){
        alert('sus datos fueron enviados');
        console.log('datos enviados', datos);       
    }else{
        console.log('faltan datos');
        
        
    }
}