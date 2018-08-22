const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function jouer() {
  rl.question('Veuillez saisir un nombre : ', (saisie) => {

    console.log('Vous avez écrit : ', saisie);

    jouer();
    /* en fin de partie
    rl.close();
    process.exit(0); // kill le process
     */
  });

}

jouer();


// call stack
// ^
// |
// |
// |                                     question      question
// |                      question       jouer         jouer
// |require - createInt - jouer    ..... =>       .... =>       ...
// +-------------------------------------------------------------> temps
// output :

