console.log('Huh!?!?!!!')

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
topbar.style.display = 'flex';
topbar.style.justifyContent = 'space-evenly';

const realContent = document.createElement('div');
realContent.id = 'realContent'
const leftContent = document.createElement('div');
const rightContent = document.createElement('div');
const midContent = document.createElement('div');
midContent.id = 'midContent';
content.appendChild(realContent)
realContent.appendChild(leftContent)
realContent.appendChild(midContent);
realContent.appendChild(rightContent)

leftContent.classList.add('sideContent')
rightContent.classList.add('sideContent')
leftContent.textContent = 'TASTE'
rightContent.textContent = 'CITY'


midContent.style.display = 'flex';
midContent.style.flexDirection = 'column';
midContent.style.alignItems = 'center';
midContent.style.backgroundColor ='black'
midContent.style.color = 'white';







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
    
    displayContact();
});
displayHome();
