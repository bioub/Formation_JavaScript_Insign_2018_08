import { Horloge } from './Horloge'

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();

document.addEventListener('click', () => {
  /*
  const { getRandomIntInclusive } = await import('./random');
  console.log(getRandomIntInclusive(0, 100));
  */
  import('./random').then(({getRandomIntInclusive}) => {
    console.log(getRandomIntInclusive(0, 100));
  });
});
