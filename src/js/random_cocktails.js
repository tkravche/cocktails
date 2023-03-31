import axios from 'axios';

const gallery = document.querySelector('.gallery');
BASE_URL = '//www.thecocktaildb.com/api/json/v1/1/random.php';

async function fetchRandomCoctail() {
  const response = await axios.get(`${BASE_URL}`);
  return response;
}
const coctailA = fetchRandomCoctail();
const coctailB = fetchRandomCoctail();
const coctailC = fetchRandomCoctail();
const coctailD = fetchRandomCoctail();
const coctailE = fetchRandomCoctail();
const coctailF = fetchRandomCoctail();
const coctailG = fetchRandomCoctail();
const coctailH = fetchRandomCoctail();
const coctailI = fetchRandomCoctail();

Promise.all([
  coctailA,
  coctailB,
  coctailC,
  coctailD,
  coctailE,
  coctailF,
  coctailG,
  coctailH,
  coctailI,
])
  .then(cocktails => {
    const markupCocktails = createMarkupCocktails(cocktails);
    updateMarkup(markupCocktails);
  })
  .catch(error => console.log(error));

function createMarkupCocktails(cocktails) {
  return cocktails
    .map(cocktail => {
      console.log(cocktail.data.drinks[0].strDrink);
      return ` <div class = "cocktail-card">
          <img class="gallery-image" src="${cocktail.data.drinks[0].strDrinkThumb}" alt="${cocktail.data.drinks[0].strDrink}" width="395" height="395" loading="lazy"/>
<p class = "cocktail-name">${cocktail.data.drinks[0].strDrink}</p>`;
    })
    .join('');
}

function updateMarkup(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}
