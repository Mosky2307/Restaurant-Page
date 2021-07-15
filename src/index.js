console.log('Huh!?!?')
const homeContent = document.querySelector('#homeContent');
const menuContent = document.querySelector('#menuContent');
const content = document.querySelector('#content');
content.style.display = 'flex';
content.style.alignItems = 'center';
content.style.flexDirection = 'column';

const topbar = document.createElement('div');
topbar.id = 'topbar';
content.appendChild(topbar);
topbar.style.backgroundColor = 'lightgreen';
topbar.style.height = '50px';
topbar.style.width = '100%';

const midContent = document.createElement('div');
midContent.id = 'midContent';
content.appendChild(midContent);
midContent.style.display = 'flex';
midContent.style.flexDirection = 'column';
midContent.style.alignItems = 'center';
midContent.style.backgroundColor ='black'
midContent.style.color = 'white';
midContent.style.width = '80%';






import { displayHome } from './home.js';
import { displayMenu } from './menu.js';
import { displayContact} from './contact.js';







const homeButton = document.createElement('button');
homeButton.id = 'homeButton'
homeButton.textContent = 'Home';

homeButton.addEventListener('click', () => {
    
    displayHome();
});
topbar.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.id = 'menuButton';
menuButton.textContent = 'Menu';

topbar.appendChild(menuButton);
menuButton.addEventListener('click', () => {
    
    displayMenu();
});

const contactButton = document.createElement('button');
contactButton.id = 'contactButton';
contactButton.textContent = 'Contact';

topbar.appendChild(contactButton);
contactButton.addEventListener('click', () => {
    
    displayMenu();
});
displayHome();
