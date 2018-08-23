setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log('3s')
    }, 1000);
  }, 1000);
}, 1000);

function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

timeout(1000)
  .then(() => timeout(1000))
  .then(() => timeout(1000))
  .then(() => {
    console.log('3s');
  });


function ajax(url) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 1001);
    setTimeout(() => {
      resolve(delay);
    }, );
  });
}


// bluebird bibliothèque de Promise avec encore de fonctionnalités
Promise.all([
  ajax('/api/contacts'),
  ajax('/api/societes'),
  ajax('/api/users'),
]).then(([delayContacts, delaySocietes, delayUsers]) => {
  console.log(`Req AJAX /api/contacts ${delayContacts}ms`);
  console.log(`Req AJAX /api/societes ${delaySocietes}ms`);
  console.log(`Req AJAX /api/users ${delayUsers}ms`);
});

/*
ajax('/api/contact')
  .then((delay) => {
    console.log(`Req AJAX /api/contact ${delay}ms`)
  });
*/


