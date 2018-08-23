'use strict';

const { createInterface } = require('readline');
const { getIntInclusive: getRandomIntInc } = require('./random');

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
    this._entierAlea = getRandomIntInc(min, max);
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

module.exports = Jeu;
