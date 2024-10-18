// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual() {
  const fecha = new Date();
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
  return (Math.PI * Math.pow(radio, 2)).toFixed(2);
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  const vocales = cadena.match(/[aeiouáéíóú]/gi);
  return vocales ? vocales.length : 0;
}

// Convierte una temperatura de grados Celsius a Fahrenheit
const celsiusAFahrenheit = (celsius) => (celsius * 9/5 + 32).toFixed(2);

// Crea una función que formatee un número agregando puntos como separadores de miles.
function formatearNumero(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
  const [dia, mes, anio] = fecha.split('/').map(Number);
  const fechaReyes = new Date(anio + 1, 0, 6); // 6 de enero del año siguiente
  const fechaActual = new Date(anio, mes - 1, dia);
  
  const diferencia = Math.ceil((fechaReyes - fechaActual) / (1000 * 60 * 60 * 24));
  return diferencia >= 0 ? diferencia : null;
}


// Convertir a lowerCamelCase
function camelCase(cadena) {
  return cadena.split(' ')
      .map((palabra, index) => index === 0 ? palabra.charAt(0).toLowerCase() + palabra.slice(1) : palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join('');
}

// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin) {
  return Math.floor(Math.random() * (fin - comienzo + 1)) + comienzo;
}

// función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
  cadena = cadena.replace(/\s+/g, '').toLowerCase();
  return cadena === cadena.split('').reverse().join('');
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
  const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas = ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  if (num < 10) return unidades[num];
  if (num < 100) {
    const d = Math.floor(num / 10);
    const u = num % 10;
    return u === 0 ? decenas[d - 1] : `${decenas[d - 1]} y ${unidades[u]}`;
  }
  if (num < 1000) {
    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;

    const centenaPalabras = c === 1 && d === 0 && u === 0 ? 'cien' : (c === 1 ? 'ciento' : centenas[c - 1]);
    const decenaPalabras = d > 0 ? decenas[d - 1] : '';
    const unidadPalabras = u > 0 ? ` y ${unidades[u]}` : '';

    return `${centenaPalabras}${decenaPalabras ? ' ' + decenaPalabras : ''}${unidadPalabras}`.trim();
  }

  if (num < 1000000) {
    const mil = Math.floor(num / 1000);
    const remainder = num % 1000;

    const milPalabras = mil === 1 ? 'mil' : numberToWords(mil) + ' mil';
    
    const restoPalabras = remainder > 0 ? ' ' + numberToWords(remainder) : '';

    return `${milPalabras}${restoPalabras}`.trim();
  }

  return 'Número fuera de rango';
}

