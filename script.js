

// Definir lista de preguntas y respuestas
const preguntasRespuestas = {
  "¿Cuál es la capital de Honduras?": "La capital de Honduras es Tegucigalpa.",
  "¿En qué año se fundó Google?": "Google fue fundado en 1998.",
  "¿Cuál es la página web oficial de la Casa Blanca?": "La página web oficial de la Casa Blanca es https://www.whitehouse.gov/",
  "¿Cuántos planetas hay en el sistema solar?": "Hay ocho planetas en el sistema solar.",
  "¿Qué es un algoritmo?": "Un algoritmo es un conjunto ordenado de instrucciones que se utilizan para realizar una tarea o resolver un problema.",
  "¿Cuál es el río más largo del mundo?": "El río más largo del mundo es el Nilo.",
  "¿Quién escribió el Quijote?": "El Quijote fue escrito por Miguel de Cervantes.",
  "¿Cual es la capital de Argentina?": "La Capital de Argentina es Buenos Aires.",
  "¿Que lenguajes se utilizan en la Programacion Web?": "Se utilizan HTML, CSS, PHP, JavaScript, etc.",
  
}; 

function enviar() {
    var nombreUsuario = document.getElementById("nombre").value;
    var mensaje = document.getElementById("input").value;
    document.getElementById("chatlog").innerHTML += "<div class='chat-message'><strong>" + nombreUsuario + ": </strong> " + mensaje + "</div>";

    var respuesta = preguntasRespuestas[mensaje];
    if (respuesta) {
      document.getElementById("chatlog").innerHTML += "<div class='chat-message'><strong>Alphabot:</strong> " + respuesta + "</div>";
    } else {
    switch (mensaje.toLowerCase()) {
      case "hola":
        respuesta = "Hola, ¿cómo estás?";
        break;
      case "que eres tu":
        respuesta = "Hola, soy un chatbot para interaccion basica.";
        break;
      case "¿que eres tu?":
        respuesta = "Hola, soy un chatbot para interaccion basica.";
        break;
      case "que eres tu?":
          respuesta = "Hola, soy un chatbot para interaccion basica.";
          break;
      case "¿que eres tu":
            respuesta = "Hola, soy un chatbot para interaccion basica.";
            break;
      case "quien eres tu":
        respuesta = "Hola, soy Alphabot, un chatbot para interaccion basica.";
        break;
        case "¿quien eres tu?":
        respuesta = "Hola, soy Alphabot, un chatbot para interaccion basica.";
        break;
        case "ola":
          respuesta = "Tienes un error ortografico, le hace falta la H, pero, en que te puedo ayudar";
          break;
       case "en que pais me encuentro":
        respuesta = "Me Encuentro en Honduras";
        break;
      case "hola, que tal":
        respuesta = "Hola, Que tal, ¿En Que te Puedo ayudar hoy?  ";
        break;
      case "bien y tu":
        respuesta = "Muy bien, gracias por Preguntar ;)";
        break;
      case "tu me amas":
        respuesta = "Como modelo de lenguaje no tengo la capacidad de tener sentimientos";
        break;
      case "adios":
        respuesta = "¡Adiós, que tengas un buen día!";
        break;
      case "¿quien es francisco morazan?":
        respuesta = "Jose Francisco Morazan Quesada fue fue un militar y político hondureño que gobernó a la República Federal de Centro América durante el turbulento periodo de 1830 a 1839. <br> Para mas información haga click aqui: <span>https://es.wikipedia.org/wiki/Francisco_Morazán</span>";
        break;
      case "quien es messi":
        respuesta = "Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. <br><img style= height: 40px;  width:40px;' src='https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' alt='Imagen de Messi'> <br> Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.";
        break;
        case "que es google":
          respuesta = "Google es un motor de búsqueda y una compañía multinacional de tecnología estadounidense especializada en servicios y productos en línea. <br><img style='height: 50px;  width:80px;'  src='img/googleImage.jpg' alt='Logo de Google'> <br> Para más información, visita <a href='https://www.google.com' style='color:blue;text-decoration:underline;'>google.com</a>";
          break;        
       case "cuanto es 2 + 2":
            respuesta = "La Respuesta es sencilla, 2+2 es = 4";
            break;
        case "cuanto es dos mas dos":
            respuesta = "La Respuesta es sencilla, 2+2 es = 4";
            break;


          
        
        case "como esta el clima hoy?":
            navigator.geolocation.getCurrentPosition(function(position) {
              var latitud = position.coords.latitude;
              var longitud = position.coords.longitude;
              var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&appid=" + api_key + "&units=metric";
              respuesta = "Obteniendo información del clima...";
              document.getElementById("chatlog").innerHTML += "<p><strong>Alphabot:</strong> " + respuesta + "</p>";
              fetch(url)
                .then(response => response.json())
                .then(data => {
                  var temperatura = data.main.temp;
                  var descripcion = data.weather[0].description;
                  respuesta = "El clima actual es " + descripcion + " con una temperatura de " + temperatura + "°C.";
                  document.getElementById("chatlog").innerHTML += "<p><strong>Alphabot:</strong> " + respuesta + "</p>";
                })
                .catch(function(error) {
                  if (error instanceof GeolocationPositionError) {
                    respuesta = "Lo siento, no pude obtener tu ubicación.";
                  } else {
                    respuesta = "Lo siento, no pude obtener la información del clima.";
                  }
                  document.getElementById("chatlog").innerHTML += "<p><strong>Alphabot:</strong> " + respuesta + "</p>";
                });
            });
            break;  
           

      default:
        respuesta = "Lo siento :(, no entiendo lo que quieres decir.";
        break;
        
    }
   
    document.getElementById("chatlog").innerHTML += "<div class='chat-message'><strong>Alphabot:</strong> " + respuesta + "</div>";

    document.getElementById("input").value = "";

    
  }
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
  