
var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: false,
  electronPath: './node_modules/electron/dist/electron'
});

const loginBtn = document.getElementById('login-button')
const loginName = document.getElementById('login-name')
const loginPassword = document.getElementById('login-password')
const alertArea = document.getElementById('alert-area')
const alertText = document.getElementById('alert-area-box-text')

loginBtn.addEventListener('click', function () {
  if (!loginName.value || !loginPassword.value) {
    alertArea.style.display = 'inherit';
    alertText.textContent = "Please enter Username and Password!";
    return;
  }

  // Logging in
  nightmare
    .goto('http://yahoo.com')
    .type('form[action*="/search"] [name=p]', 'github nightmare')
    .click('form[action*="/search"] [type=submit]')
    .wait('#main')
    .evaluate(function () {
      return document.querySelector('#main .searchCenterMiddle li a').href
    })
    .end()
    .then(function (result) {
      alertArea.style.display = 'inherit';
      alertText.textContent = result;
    })
    .catch(function (error) {
      alertArea.style.display = 'inherit';
      alertText.textContent = result;
    });
})


