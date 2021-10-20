const firstname = prompt('Firstname?');
const lastname = prompt('Lastname?');
const favoriteColor = prompt('Favorite color?');

const pass= firstname+lastname+favoriteColor;
const passLength =(`${pass.length}`)

console.log(firstname);
console.log(lastname);
console.log(favoriteColor);
console.log(pass);
console.log(`${pass.length}`)
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

document.getElementById('pass-length').innerHTML =
`
${passLength} 
`;