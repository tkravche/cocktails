import axios from 'axios';

const gallery = document.querySelector('.gallery');
BASE_URL = '//www.thecocktaildb.com/api/json/v1/1/random.php';

async function fetchRandomCoctail() {
  const response = await axios.get(`${BASE_URL}`);
  return response;
}
const numberOfCocktails = 3;
const randomCocktails = [];
for (let i = 0; i < numberOfCocktails; i++){
  randomCocktails.push(fetchRandomCoctail());
}

Promise.all(randomCocktails)
  .then(cocktails => {
    const markupCocktails = createMarkupCocktails(cocktails);
    updateMarkup(markupCocktails);
  })
  .catch(error => console.log(error));

function createMarkupCocktails(cocktails) {
  return cocktails
    .map(cocktail => {
      console.log(cocktail.data.drinks[0].strDrink);
      return ` <div class="container">
                 <li class="coctails__item">
                <img class="coctails__img" src="${cocktail.data.drinks[0].strDrinkThumb}" "${cocktail.data.drinks[0].strDrink}">
                <div class="coctails__descr">
                    <h3 class="coctails__name">${cocktail.data.drinks[0].strDrink}</h3>
                    <div class="coctails__btns">
                        <button class="btn__learn" type="button">Learn more</button>
                        <button class="btn__delete" type="button">Remove</button>
                    </div>
                </div>
            </li><div class = "cocktail-card">
          `;
    })
    .join('');
}

function updateMarkup(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}
