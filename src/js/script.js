{
  'use strict';

  const select = {
    templateOf: {
      templateBook: '#template-book', 
    },

    containerOf: {
      containerBooks: '.books-list',
    },

    all: {
      menuBooks: '.books-list > .book',
    },

    bookFavorite: {
      menuImage: '.books-list > .book__image',
    },

  };

  const template = {
    menuBook: Handlebars.compile(document.querySelector(select.templateOf.templateBook).innerHTML),
  };
  
  class BooksList {

    constructor(){
      const thisBooksList = this;

      thisBooksList.data = dataSource.books;
      thisBooksList.getElements();
      thisBooksList.render();
      thisBooksList.initActions();
    }
  
    getElements() {
      const thisBooksList = this;

      thisBooksList.dom = {};
      thisBooksList.dom.wrapper = document.querySelector(select.containerOf.containerBooks);
    
      
    }

    render() {
      const thisBooksList = this;

      for(let book of thisBooksList.data) {
        const generatedHTML = template.menuBook(book);
        const elem = utils.createDOMFromHTML(generatedHTML); 
        thisBooksList.dom.wrapper.appendChild(elem);
      }
    }

    initActions() {
      const thisBooksList = this;

      thisBooksList.favoriteBooks = {};
      thisBooksList.clickBooks = document.querySelector(select.bookFavorite.menuImage);

      for(let likeBooks of thisBooksList.clickBooks) {

        likeBooks.addEventListener('dbclick', function(event){
          event.preventDefault();
          thisBooksList.clickBooks.classList.add('favorite');
        });
      }
    }
  }

  new BooksList();
}
  