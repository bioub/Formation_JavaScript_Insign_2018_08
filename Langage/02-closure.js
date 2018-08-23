function externe(message) {
  function interne() {
    console.log(message);
  }

  return interne;
}

const helloFct = externe('Hello');
helloFct();

// call stack
// ^
// |
// |
// |
// |          log()
// |externe - interne
// +---------------------------> temps

// dans 1 sec 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// call stack
// ^
// |
// |
// |
// |                                log(i) log(i) log(i)
// |for { st - st - st } .......... fct -  fct -  fct
// +--------------------------------1000----------------------> temps
// output :                         3     3     3

// Dans 1 sec 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// call stack
// ^
// |
// |
// |
// |                                log(0) log(1) log(2)
// |for { st - st - st } .......... int1 - int2 - int3
// +--------------------------------1000----------------------> temps
// output :                         0      1      2
