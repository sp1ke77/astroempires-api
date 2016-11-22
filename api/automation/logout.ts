let Nightmare = require('nightmare');
let nightmare = new Nightmare({
    show: false,
    waitTimeout: 3000 // in ms
});

export default function(token: string) : any {

    return nightmare
        .useragent('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0')
        .cookies.set(token)
        .goto('hydra.astroempires.com/account.aspx')
        .click('a[class="btn-normal"][href^="home.aspx?session=logout"]')
        .wait('a[class="btn-normal"][href^="login.aspx"]')
        .then(function () {
            //queue ending the Nightmare instance along with the Electron instance it wraps
            //again, return the instance to leverage the internal `.then()`
            return nightmare.end();
        })
        .then(() => {return "logged out"; });
}
