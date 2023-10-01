export function adunare(a, b) {
return a + b ;
}

const suma = adunare(7, 9);

console.log(suma)


// 2



 export function NumePrenume(nume, prenume) {
  return `${nume} ${prenume}`;
}

const impreuneaza = NumePrenume(`Hirbu`, `Valeriu`);

console.log(impreuneaza)


// 3

 export function spread(...argumente) {
  return argumente;
}

const rezultat = spread('Valeriu', 91, true);

console.log(rezultat); 