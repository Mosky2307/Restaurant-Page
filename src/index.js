const content = document.querySelector('#content');
const midContent = document.createElement('div');
midContent.id = 'midContent'
content.appendChild(midContent);
midContent.style.display = 'flex';
midContent.style.flexDirection = 'column';
midContent.style.alignItems = 'center';

import { displayHome } from './home.js';

displayHome()