
const { Observable, interval } = require('rxjs');
const { filter, map, take } = require('rxjs/operators');

/*
function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
}
*/

/*
const obs = interval(1000);

const subscriber = obs.subscribe((i) => {
    console.log(`${i}s`);
  });

setTimeout(() => {
  subscriber.unsubscribe();
}, 2500)
*/

interval(1000)
  .pipe(
    filter((i) => i % 2 === 0),
    map((i) => i + 1),
    take(5),
  )
  .subscribe((i) => {
    console.log(`${i}s`);
  });
