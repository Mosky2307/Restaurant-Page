const displayHome = () => {
  
 
  const homePic = document.createElement('img');
homePic.src = 'https://c0.wallpaperflare.com/preview/177/685/219/pizza-supreme-cheese-food.jpg'
const welcome = document.createElement('h1');
welcome.textContent = 'Welcome to Taste City!';
const homeInfo = document.createElement('div');
homeInfo.style.width = '20%'
homeInfo.style.textAlign = 'center'
homeInfo.textContent = 'We serve pretty good food, for fairly decent prices and you can, like, come here with friends or family, get food and a drink, idk, it\'s all worth it, you wanna eat here'
midContent.appendChild(homePic);
midContent.appendChild(welcome);
midContent.appendChild(homeInfo);

 }
export { displayHome }