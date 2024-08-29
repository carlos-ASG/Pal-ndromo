function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas para ignorar mayúsculas
    const palabraMinuscula = palabra.toLowerCase();
  
    // Invertimos la palabra
    const palabraInvertida = palabraMinuscula.split('').reverse().join('');
  
    // Comparamos la palabra original con la invertida
    return palabraMinuscula === palabraInvertida;
  }
  
  // Ejemplo de uso:
  const palabra1 = "radar";
  const palabra2 = "Hola";
  
  console.log(palabra1 + " es un palíndromo:", esPalindromo(palabra1));
  console.log(palabra2 + " es un palíndromo:", esPalindromo(palabra2));