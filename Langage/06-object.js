// En JS il y a plein d'objets prédéfinis
// au niveau du Langage
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// au niveau du Node.js
console.log('typeof process', typeof process); // object
console.log('typeof global', typeof global); // object

// au niveau du browser
console.log('typeof navigator', typeof navigator); // object
console.log('typeof document', typeof document); // object
console.log('typeof window', typeof window); // object

// au niveau de Node.js et du browser
console.log('typeof console', typeof console); // object

// Les objets JS, sont des dictionnaires
console.log('Math.sum', Math.sum); // undefined

// on peut ajouter des clés/valeurs (extension d'objet)
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2));

// on peut modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log('Math.sum(1, 2)', Math.sum(1, 2));

// on peut supprimer des clés/valeurs
delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// Mauvaise pratique d'étendre des objets qu'on a pas créé

// Pour accéder au contenu d'un objet au a 2 syntaxes
// L'opérateur .
console.log('Math.PI', Math.PI); // 3.141592653589793

// L'opérateur []
console['log']("Math['PI']", Math['PI']); // 3.141592653589793

const key = 'PI';
console.log('Math[key]', Math[key]); // 3.141592653589793

// Pour créer vos propres objets, 3 cas possibles

// 1 - un objet mono-instance
//   - un objet multi-instances mais très simple à créer (coords)
//     sans méthodes et pas de besoin d'un nouveau Type

// => object literal

// mono-instance
const myMath = {
  sum: (a, b) => a + b,
  substract: (a, b) => a - b,
};

// multi-instances (simple à créer, sans méthodes et sans types)
const coords1 = {
  x: 10,
  y: 20,
  // mauvaisePratique: () => 'Hello',
};

// nos objets sont égalements extensibles
coords1.z = 30;

const coords2 = {
  x: 20,
  y: 50,
  // mauvaisePratique: () => 'Hello',
};

/*
// a t'on 2 fonction en mémoire ou 1 seule ?
console.log(
  'coords1.mauvaisePratique === coords2.mauvaisePratique',
  coords1.mauvaisePratique === coords2.mauvaisePratique,
); // false
*/

console.log('coords1 instanceof String', coords1 instanceof String); // false
console.log('coords1 instanceof Array', coords1 instanceof Array); // false
console.log('coords1 instanceof Function', coords1 instanceof Function); // false

// tous les objets héritent de Object (on accès au propriétés et méthodes définies dans Object)
console.log('coords1 instanceof Object', coords1 instanceof Object); // true

// on peut boucler sur les clés d'un objet
for (const key in coords1) {
  console.log('key', key); // x, y, z
  console.log('value', coords1[key]);
}

// en transformant les clés en tableau
const keys = Object.keys(coords1);
for (const key of keys) {
  console.log('key', key); // x, y, z
  console.log('value', coords1[key]);
}

console.log('Object.entries(coords1)', Object.entries(coords1)); // [ , [ 'y', 20 ], [ 'z', 30 ] ]

// style ES8
for (const [key, value] of Object.entries(coords1)) {
  console.log('key', key); // x, y, z
  console.log('value', value);
}

// JSON sérialisation d'un objet
// boolean, number, literaux (string (double quotes), array, object (sans type), regex)
const json = JSON.stringify(coords1);
console.log('json', json); // {"x":10,"y":20,"z":30}

const coordsFromJson = JSON.parse(json);
console.log('coordsFromJson.z', coordsFromJson.z); // 30

// 2 - un objet multi-instances plus compliqués à créer
//     sans méthodes et pas de besoin d'un nouveau Type

// => factory (fabrique)

function coords3dFactory(x, y, z) {
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
  };
}

const coords3dFactoryES6 = (x, y, z = 0) => ({x, y, z});

const coordsA = coords3dFactory(10, 20);
console.log('coordsA.z', coordsA.z); // 0

// 3 - un objet multi-instances plus compliqués à créer
//     avec méthodes et/ou besoin d'un nouveau Type

// => constructor (fonction constructeur)
// pas de fonction fléchées (=>)

function Contact(prenom) {
  // this: l'objet en cours
  this._prenom = prenom;
}

Contact.getClass = function() {
  return 'Class';
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
console.log('typeof romain', typeof romain); // object
console.log('romain.prenom', romain._prenom); // Romain
console.log('romain.hello()', romain.hello()); // Romain
console.log("romain.hasOwnProperty('_prenom')", romain.hasOwnProperty('_prenom')); // true
console.log("romain.hasOwnProperty('hello')", romain.hasOwnProperty('hello')); // false
console.log('Contact.getClass()', Contact.getClass()); // Contact

console.log('romain instanceof Contact', romain instanceof Contact); // true
console.log('romain instanceof Object', romain instanceof Object); // true

for (const key in romain) {
  if (romain.hasOwnProperty(key)) {
    console.log(key); // _prenom
  }
}


const eric = new Contact('Eric');
console.log('romain.hello === eric.hello', romain.hello === eric.hello); // true
