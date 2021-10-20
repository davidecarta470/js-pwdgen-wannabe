const firstname = prompt('Firstname?');
const lastname = prompt('Lastname?');
const favoriteColor = prompt('Favorite color?');

const pass= firstname + lastname + favoriteColor;

console.log(firstname);
console.log(lastname);
console.log(favoriteColor);
console.log(pass);

document.getElementById('passGenerator').innerHTML = 
`
<div class="pb-1">
  Nome:<span>${firstname}</span>
</div>
<div class="pb-1">
  Cognome:<span>${lastname}</span></div>
<div class="pb-1">
  Colore preferito: <span>${favoriteColor}</span>
</div>
<div class="pb-1">
   Pass: <span class="pass-css">${pass}21</span>
</div>
`;