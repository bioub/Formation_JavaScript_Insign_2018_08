'use strict';

const Jeu = require('./jeu');

const partie = new Jeu({
  min: 10,
});

partie.jouer();
