setTimeout(() => console.log('0'), 0);
setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 300);
setTimeout(() => console.log('C'), 500);

/*
La plupart du temps on ne pourra pas prédire l'ordre des appels, ex :
setTimeout(() => console.log('D'), Math.random() * 1000);
setTimeout(() => console.log('E'), Math.random() * 1000);
*/

console.log('Fin');

// call stack
// ^
// |
// |
// |
// |                               log           log  log
// |st - st - st - log ........... =>  ......... => - =>
// +-------------------------------300-----------------------> temps
// output :        Fin             B             A    C

// file d'attente 299ms :
// file d'attente 300ms : =>
// file d'attente 301ms :
// file d'attente 500ms : => - =>
// file d'attente 501ms : =>
// file d'attente 502ms :
