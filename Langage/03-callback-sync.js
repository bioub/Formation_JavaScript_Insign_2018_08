const nbs = [2, 3, 4];

// ES5 (IE9+)
// programmation functionnelle (paradigme = style de programmation)
nbs.filter((nb) => nb % 2 === 0)
   .map((nb) => nb ** 2)
   .forEach((nb, i) => console.log(nb, i));

// RxJS : programmation functionnelle sur des events

console.log('Fin');


// call stack
// ^
// |
// |
// |                         log   log
// |=> - => - =>   => - =>   =>  - =>
// |filter       - map     - forEach   - log
// +------------------------------------------------------> temps
// output :                  4     16    Fin

