let Nightmare = require('nightmare');
let nightmare = new Nightmare({
    show: false,
    waitTimeout: 3000 // in ms
});

export default function(email: string, password: string) : any {

    var cookiePromise = nightmare
        .useragent('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0')
        // .goto('http://localhost:8000/dump.html');
        .goto('http://hydra.astroempires.com/home.aspx')
        .type('form[action="login.aspx"] [name=email]')
        .type('form[action="login.aspx"] [name=email]', email)
        .type('form[action="login.aspx"] [name=pass]')
        .type('form[action="login.aspx"] [name=pass]', password)
        .click('form[action="login.aspx"] [type=submit]')
        .wait('a[class="btn-normal"][href^="home.aspx?session=logout"]')
        .evaluate(function () {
            return document.querySelector('table[class="layout listing tbllisting2"]').innerHTML
        })
        .then(function (result) {
            // console.log(result); // account info
            return nightmare.cookies.get();
        })
        .then(function (cookies){
            return cookies;
        });

    var endPromise = cookiePromise
        .then(function (cookies) {

            //queue ending the Nightmare instance along with the Electron instance it wraps
            //again, return the instance to leverage the internal `.then()`
            return nightmare.end();
        });

    return Promise.all([cookiePromise, endPromise])
        .then(values => {
        return values[0];
    });
}
