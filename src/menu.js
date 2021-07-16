const displayMenu = () => {
    
    homeButton.addEventListener ('click', () => {
        if (midContent.contains(menuContent) === true) {midContent.removeChild(menuContent)};
          });
          menuButton.addEventListener ('click', () => {
            if (midContent.contains(menuContent) === true) {midContent.removeChild(menuContent)};
              });
        
          contactButton.addEventListener ('click', () => {
            midContent.removeChild(menuContent);
                  });

    const menuContent = document.createElement('div');
    menuContent.id = 'menuContent'
    menuContent.classList.add('midContent');
    midContent.appendChild(menuContent);
    
const foodMenu = document.createElement('div');
foodMenu.style.display = 'grid';
foodMenu.style.gridTemplateColumns = 'repeat(2, 1fr)';
foodMenu.style.gridTemplateRows = 'repeat(2, 1fr)';
foodMenu.style.width = '100%'
foodMenu.style.height = '100%'

const food = document.createElement('h1');
food.textContent = 'Food:'

const drinks = document.createElement('h2');
drinks.textContent = 'Drinks:'

menuContent.appendChild(food);
menuContent.appendChild(foodMenu);

const pizzaCard = document.createElement('div');
const burgerCard = document.createElement('div');
const steakCard = document.createElement('div');
const salmonCard = document.createElement('div');

pizzaCard.classList.add('foodCard');
burgerCard.classList.add('foodCard');
steakCard.classList.add('foodCard');
salmonCard.classList.add('foodCard');

const pizzaWords = document.createElement('div');
const salmonWords = document.createElement('div');
const steakWords = document.createElement('div');
const burgerWords = document.createElement('div');


const pizzaPic = document.createElement('img');
pizzaPic.src = './dist/images/pizza.jpg';
pizzaPic.style.height = '200px';
pizzaPic.style.width = 'auto'
pizzaCard.appendChild(pizzaPic);
pizzaCard.appendChild(pizzaWords);
pizzaWords.textContent = 'You know what this is. You know you like it. buy it';

const salmonPic = document.createElement('img');
salmonPic.src = './dist/images/salmon.jpeg';
salmonPic.style.height = '200px';
salmonPic.style.width = 'auto'
salmonPic.style.float = 'left'

salmonCard.appendChild(salmonPic);
salmonCard.appendChild(salmonWords);
salmonWords.textContent = 'There\'s something fishy about how good this tastes'
salmonWords.style.color = 'green'

const burgerPic = document.createElement('img');
burgerPic.src = 'https://raw.githubusercontent.com/Mosky2307/Restaurant-Page/main/dist/images/hamburger.jpeg';
burgerPic.style.height = '200px';
burgerPic.style.width = 'auto';

burgerPic.style.float = 'right'
burgerCard.appendChild(burgerPic);
burgerCard.appendChild(burgerWords);
burgerWords.textContent = 'Burger. You can\'t go wrong'
burgerWords.style.color = 'green'

const steakPic = document.createElement('img');
steakPic.src = './dist/images/pizza2.jpg';
steakPic.style.height = '200px';
steakPic.style.width = 'auto'
steakCard.appendChild(steakPic);
steakCard.appendChild(steakWords);
steakWords.textContent = 'ʇᴉ ʎnq ˙ʇᴉ ǝʞᴉl noʎ ʍouʞ no⅄ ˙sᴉ sᴉɥʇ ʇɐɥʍ ʍouʞ no⅄'
steakWords.style.textAlign = 'center'
pizzaWords.style.textAlign = 'center'
burgerWords.style.textAlign = 'center'
salmonWords.style.textAlign = 'center'

foodMenu.appendChild(pizzaCard);
foodMenu.appendChild(burgerCard);
foodMenu.appendChild(salmonCard);
foodMenu.appendChild(steakCard);

const water = document.createElement('img');
water.src = './dist/images/water.jpeg'

menuContent.appendChild(drinks);
menuContent.appendChild(water);








}

export { displayMenu }