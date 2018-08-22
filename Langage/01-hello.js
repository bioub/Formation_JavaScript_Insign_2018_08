/**
 * Additionne 2 paramètres (usejsdoc.org)
 * @param a {number} Le 1er nombre
 * @param b {number} Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
