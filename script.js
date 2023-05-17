//Creo la variable de Las respuestas y preguntas
var preguntasRespuestas;

// Función para cargar el archivo JSON
function cargarPreguntasRespuestas() {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'preguntasRespuestas.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      preguntasRespuestas = JSON.parse(xhr.responseText);
    }
  };
  xhr.send(null);
}



// Función para responder preguntas
function responderPregunta(pregunta) {
  var respuesta = preguntasRespuestas[pregunta];
  if (respuesta) {
    return respuesta;
  } else {
    return "Lo siento, no tengo la respuesta a esa pregunta.";
  }
}

// Llamo a la función para cargar el archivo JSON
cargarPreguntasRespuestas();





// Funcion Enviar  con preguntas de conversacion rutinarias
function enviar() {
  var nombreUsuario = document.getElementById("nombre").value;
  var mensaje = document.getElementById("input").value;
  document.getElementById("chatlog").innerHTML += "<div class='chat-message'><strong>" + nombreUsuario + ": </strong> " + mensaje + "</div>";

  var respuesta = responderPregunta(mensaje);
  if (respuesta) {
    document.getElementById("chatlog").innerHTML += "<div class='chat-message'><strong>Alphabot:</strong> " + respuesta + "</div>";
  } else { 
    }
   
    document.getElementById("input").value = "";
 
  }


//Codigo para la accion del Boton ENTER al enviar el mensaje
  window.addEventListener("load", function() {
    document.getElementById("input").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        enviar();
      }
    });
  });
  