console.log('Loading JavaScript');
//Validaciones del formaulario

function validacion(){
    console.log('Validando');
    let name= document.getElementById('nombre').value;
    let email= document.getElementById('email').value;
    let tel= document.getElementById('telefono').value;
    datos = [
            'Nombre =>',name,
             'email=>', email,
             'telefono=>', tel];
    
    if(datos[0]=="" || datos[1]=="" || datos[2]==""){
        alert('faltan datos');      
    }else{
        alert('sus datos fueron enviados'); 
        console.log('datos enviados', datos);   
    }
}