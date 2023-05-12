//variables que haven enfasis en etiquetas HTML se les coloca "$"

const   $submit = document.getElementById('submit'),
        $nombre = document.getElementById('nombre'),
        $email = document.getElementById('email'),
        $asunto = document.getElementById('asunto');

// Función !! 
function validateInputs () {
        //Expresión regular para el email:
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        
        //Expresión regular para el asunto (entre 1 y 30 caracteres):
        const asuntoRegex = /^.{1,30}$/;

        //Expresión regular para el nombre (entre 1 y 20 caracteres):
        const nombreRegex = /^[a-zA-Z ]{1,50}$/;

        //ALERTAS DE LOS CAMPOS
        if($email.value === "") {
                alert("Completar el campo de email.");
        }
        if($asunto.value === "") {
                alert("Completar el campo de asunto.");
        }
        if($nombre.value === "") {
                alert("Completar el nombre.");
        }
        
        //validación de los campos (color rojo!!)
        //validación nombre:
        if(!nombreRegex.test($nombre.value)) {
                alert("Ingrese el formato correcto en el nombre.");
                $nombre.style.border = "1px solid red";     
        }
        
        //validación email:
        if(!emailRegex.test($email.value)) {
                alert("Ingrese el formato correcto en el email.");
                $email.style.border = "1px solid red";  
        }

        //validación asunto:
        if(!asuntoRegex.test($asunto.value)) {
                alert("Ingrese el formato correcto en el asunto.");
                $asunto.style.border = "1px solid red";       
        }
}
// Evento !!
document.addEventListener("click", (e) => {
        if(e.target === $submit) {
                e.preventDefault();
                validateInputs(); 
                
        }
});

