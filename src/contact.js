const displayContact = () => {
    homeButton.addEventListener ('click', () => {
        if (midContent.contains(contactContent) === true) {midContent.removeChild(contactContent)};
          });
          menuButton.addEventListener ('click', () => {
            if (midContent.contains(contactContent) === true) {midContent.removeChild(contactContent)};
              });
        
          contactButton.addEventListener ('click', () => {
                if (midContent.contains(contactContent) === true) {midContent.removeChild(contactContent)};
                  });


const contactContent = document.createElement('div');
    contactContent.id = 'contactContent'
    contactContent.classList.add('midContent');
    contactContent.appendChild(menuContent);
    
    midContent.appendChild(contactContent)

}

export { displayContact }