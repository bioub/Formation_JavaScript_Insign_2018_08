function bind(that, cb) {
  return function() {
    cb.call(that);
  };
}

var contactES3 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES3 Bonjour je suis ' + this.prenom);
  },
  helloAsync: function() {
    var that = this;
    setTimeout(function() {
      console.log('ES3 Bonjour je suis ' + that.prenom);
    }, 100);
  },
  helloMethodeAsync: function() {
    setTimeout(bind(this, this.helloSync), 100);
  },
};

contactES3.helloSync();
contactES3.helloAsync();
contactES3.helloMethodeAsync();




var contactES5 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES5 Bonjour je suis ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('ES5 Bonjour je suis ' + this.prenom);
    }.bind(this), 100);
  },
  helloMethodeAsync: function() {
    setTimeout(this.helloSync.bind(this), 100);
  },
};

contactES5.helloSync();
contactES5.helloAsync();
contactES5.helloMethodeAsync();


const contactES6 = {
  prenom: 'Romain',
  helloSync() {
    console.log(`ES6 Bonjour je suis ${this.prenom}`);
  },
  helloAsync() {
    setTimeout(() => {
      console.log(`ES6 Bonjour je suis ${this.prenom}`);
    }, 100);
  },
  helloMethodeAsync() {
    setTimeout(this.helloSync.bind(this), 100);
  },
};

contactES6.helloSync();
contactES6.helloAsync();
contactES6.helloMethodeAsync();

/*
Attention à ne plus utiliser this dans ce genre de cas
$('#myButton').click((event) => {
  $(event.target).html(Number($(event.target).html()) + 1));
});
document.querySelector('#myButton').addEventListener('click', (event) => {
  event.target.innerHTML = Number(event.target.innerHTML) + 1;
});
*/
