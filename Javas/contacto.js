//variables que haven enfasis en etiquetas HTML se les coloca "$"

const   $submit = document.getElementById('submit'),
        $nombre = document.getElementById('nombre'),
        $email = document.getElementById('email'),
        $asunto = document.getElementById('asunto');

// Función !! 
function validateInputs () {
        const emailRegex = /^[a-zA-Z0-9/; 
        if($email.value === "") {
                alert("Completar el campo de email.");
                return false;
        }
        if($asunto.value === "") {
                alert("Completar el campo de asunto.");
                return false;
        }
        if($nombre.value === "") {
                alert("Completar el nombre.");
                return false;
        }
        return true;
}
// Evento !!
document.addEventListener("click", (e) => {
        if(e.target === $submit) {
                e.preventDefault();
                validateInputs(); 
                
        }
});

