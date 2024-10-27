const piropos = [
    "Hola mi amorcitoooooo",
    "Feliz Cumpleaños mi amor🥺",
    "No se como ha sido tu dia",
    "Se que este cumpleaños fue diferente",
    "Pero eso no quiere decir que debe de ser triste",
    "No se como estas ahorita mi amor",
    "No se como te sientes",
    "Pero solo quiero que sepas que eres muy importante para mi",
    "Que estoy siempre para ti",
    "dispuesto siempre a darte mi amor",
    "Solo te pido que tengas eso siempre presente",
    "Espero verte muy pronto mi amor",
    "Para poder celebrar tu pumpe🥺",
    "Sinceramente amor te extraño mucho",
    "Y te quiero ver🥺🥺🥺",
    "No se si la otra semana tengas el tiempo",
    "Para poder vernos amor",
    "Me encantaria que fueramos a un parque",
    "Asi como tu me lo pedistes",
    "Y poder pasar el dia juntos",
    "Pero aunque no puedas todo el dia",
    "Me encantaria poder verte asi sea un rato",
    "Porfis amor🥺",
    " y sabes, yo creo mucho en ti",
    "Creo en la capacidad que tienes",
    "Para todo en general amor",
    "Para poder trabajar a diario",
    "A pesar de madrugar y estar cansada",
    "Creo en que puedes ser una profesional",
    "Tienes una capacidad increible",
    "Tu eres muy inteligente",
    "Eres muy lista mi amor",
    "Eres muy fuerte",
    "Eres unica",
    "Se que tu hermano estaria muy orgulloso de ti",
    "Asi como yo estoy orgulloso de ti",
    "De la niña que eres",
    "Todas tus cualidades son muy hermosas",
    "Aparte de ser bonita fisicamente",
    "Osea, a aparte de tener una carita bonita",
    "Unos ojos muy hermososss😍",
    "Una boquita rica que deseo besar🤤",
    "Un cuerpo que me encanta🙈",
    "Porque eres muy sexy🙈",
    "Aparte de todo lo lindo que se puede ver en ti",
    "Tienes un lindo corazon",
    "Tus emociones son lindas, toda tu eres linda",
    "Y por eso no me gustaria que te sientas triste",
    "Porque dentro de ti hay una niña pequeña",
    "Porque a pesar de tener ya 19 añotes",
    "Siempre para mi seras mi niña pequeña",
    "Siempre seras muy sensible para mi",
    "Porque tienes el corazon mas lindo",
    "El corazon mas sensible",
    "Y solo mereces amor y muuucho amor",
    "Y yo te dare todo el amorrrr que pueda",
    "Por eso te hago cada cosita",
    "Tratando siempre de hacer algo diferente a lo anterior",
    "Para que tu siempre tengas algo bonito y unico",
    "Feliz cumpleaños princesa",
    "Por favor no olvides lo especial que eres para mi",
    "Lo mucho que me importas",
    "Lo mucho que te extraño y que te queyo ver",
    "Y lo mucho que te amo",
    "Con amor:",
    "De Bryan para Azu hermosa",
    "Bechito😽",
];

let index = 0;

function mostrarPiropo() {
    const piropoContainer = document.getElementById('piropo-container');
    piropoContainer.textContent = piropos[index];
    index = (index + 1) % piropos.length; // Avanzar al siguiente piropo
}

// Mostrar el primer piropo y cambiar cada 3 segundos
mostrarPiropo();
setInterval(mostrarPiropo, 3000);

// Configuración de música de fondo
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.5; // Volumen moderado

// Función para crear un globo
function crearGlobo() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.background = `radial-gradient(circle at 30% 30%, hsl(${Math.random() * 360}, 70%, 80%), hsl(${Math.random() * 360}, 70%, 60%))`;

    document.querySelector('.balloons-container').appendChild(balloon);
    
    // Eliminar el globo después de la animación
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Crear un globo cada segundo
setInterval(crearGlobo, 1000);