const displayHome = () => {
  homeButton.addEventListener ('click', () => {
if (midContent.contains(homeContent) === true) {midContent.removeChild(homeContent)};
  });
  menuButton.addEventListener ('click', () => {
    if (midContent.contains(homeContent) === true) {midContent.removeChild(homeContent)};
      });

  contactButton.addEventListener ('click', () => {
        if (midContent.contains(homeContent) === true) {midContent.removeChild(homeContent)};
          });

  const homeContent = document.createElement('div');
  homeContent.id = 'homeContent';
  homeContent.classList.add('midContent');
  midContent.appendChild(homeContent);

  const homePic = document.createElement('img');
homePic.src = https://github.com/Mosky2307/Restaurant-Page/blob/main/dist/images/pizza.jpg?raw=true'
const welcome = document.createElement('h1');
welcome.textContent = 'Welcome to Taste City!';
const homeInfo = document.createElement('div');
homeInfo.style.width = '20%'
homeInfo.style.textAlign = 'center'
homeInfo.textContent = 'We serve pretty good food, for fairly decent prices and you can, like, come here with friends or family, get food and a drink, idk, it\'s all worth it, you wanna eat here'
homeContent.appendChild(homePic);
homeContent.appendChild(welcome);
homeContent.appendChild(homeInfo);

 }
export { displayHome }