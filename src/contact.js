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
    
    
    midContent.appendChild(contactContent)

    const compliments = document.createElement('div')
    compliments.textContent = "Compliments, accolades or plaudits?"
compliments.style.textAlign = 'center'

    const noNeed = document.createElement('div')
    noNeed.textContent = "No need to contact us. We already know we're great"
noNeed.style.textAlign = 'center'

contactContent.appendChild(compliments)
contactContent.appendChild(noNeed)
}

export { displayContact }