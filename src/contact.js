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

}

export { displayContact }