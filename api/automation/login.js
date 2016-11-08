
var ele  = require('electron')

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .useragent('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0')
  // .goto('http://localhost:8000/dump.html');
  .goto('http://hydra.astroempires.com/home.aspx')
  .type('form[action="login.aspx"] [name=email]')
  .type('form[action="login.aspx"] [name=email]', 'mail')
  .type('form[action="login.aspx"] [name=pass]')
  .type('form[action="login.aspx"] [name=pass]', 'pw')
  .click('form[action="login.aspx"] [type=submit]')
  .wait('a[class="btn-normal"][href^="home.aspx?session=logout"]')
  .evaluate(function () {
    return document.querySelector('table[class="layout listing tbllisting2"]').innerHTML
  })
  .then(function (result) {
    console.log(result)
  })
  .then(function() {
    //since Nightmare has an internal `.then()`, return the instance returned by the final call in the chain
    return nightmare
    //click the logout button to get the next page of search results
      .click('a[class="btn-normal"][href^="home.aspx?session=logout"]')
      .wait('a[class="btn-normal"][href^="login.aspx"]')
  })
  .then(function(result) {
    //queue ending the Nightmare instance along with the Electron instance it wraps
    //again, return the instance to leverage the internal `.then()`
    return nightmare.end();
  })
  //run the queue of commands specified
  //in this case, `.end()`
  .then(function() {
    console.log('done');
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
