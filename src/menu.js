const displayMenu = () => {
    
    homeButton.addEventListener ('click', () => {
        if (midContent.contains(menuContent) === true) {midContent.removeChild(menuContent)};
          });
          menuButton.addEventListener ('click', () => {
            if (midContent.contains(menuContent) === true) {midContent.removeChild(menuContent)};
              });
        
          contactButton.addEventListener ('click', () => {
                if (midContent.contains(menuContent) === true) {midContent.removeChild(menuContent)};
                  });

    const menuContent = document.createElement('div');
    menuContent.id = 'menuContent'
    menuContent.classList.add('midContent');
    midContent.appendChild(menuContent);
    
const foodMenu = document.createElement('div');
foodMenu.style.display = 'grid';
foodMenu.style.gridTemplateColumns = '2';
foodMenu.style.gridTemplateRows = '2';
foodMenu.style.backgroundColor = 'green'
menuContent.appendChild(foodMenu);













}

export { displayMenu }