{
  'use strict';

  const select = {
    templateOf: {
      templateBook: '#template-book', 
    },

    containerOf: {
      containerBook: '#book-list',
    },

    all: {
      menuBooks: '#book-list > .book',
    }

  };

  const template = {
    menuBook: Handlebars.complie(document.querySelector(select.templateOf.templateBook).innerHTML),
  };
  
  class Book {
    constructor(id, data){
      const thisBook = this;
      thisBook.id = id;
      thisBook.data = data;
      thisBook.render();
    }
  

    render() {
      const thisBook = this;

      for(let id of dataSource.books) {
        const generatedHTML = template.menuBook(thisBook.data);
        thisBook.element = utils.createDOMFromHTML(generatedHTML);
        const menuContainer = document.querySelector(select.all.menuBooks);
        menuContainer.appendChild(thisBook.element);
      }
    }
  }
}
  
