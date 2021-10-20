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
  Nome:${firstname}
</div>
<div class="pb-1>
  Cognome:${lastname}
</div>
<div class="pb-1>
  Colore preferito: ${favoriteColor}
</div>
<div class="pb-1">
   Pass: <strong class="pass-css">${pass}21</strong>
</div>
`;