'use strict';

const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  /**
   * Retourne un nombre entier aléatoire entre min et max (inclus)
   * @param min {number} Borne min
   * @param max {number} Borne max
   * @returns {number} Nombre entier aléatoire entre min et max (inclus)
   */
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const { createInterface } = require('readline');

class Jeu {
  /**
   *
   * @param options.min {number} La borne min
   * @param options.max {number} La borne max
   * @constructor
   */
  constructor(options = {}) {
    /*
    const min = options.min || 0;
    const max = options.max !== undefined ? options.max : 100;
    */
    const { min = 0, max = 100} = options;

    // const optionsWithDefault = Object.assign({}, {min: 0, max: 100}, options);

    this._rl = createInterface(process.stdin, process.stdout);
    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Veuillez saisir un nombre : ', (saisie) => {

      const entierSaisi = Number.parseInt(saisie);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur: il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();
    });

  }
}

const partie = new Jeu({
  min: 10,
});
partie.jouer();
