global.prenom = 'Globule';

const contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
    return `Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`;
}

console.log(hello('Jean', 'Eric'));
console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));
