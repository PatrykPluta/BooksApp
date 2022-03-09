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
      menuImage: '.books-list .book__image',
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
      thisBooksList.favoriteBooks = [];
      
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

      
      thisBooksList.clickBooks = document.querySelectorAll(select.bookFavorite.menuImage);
       
       
      for(let likeBook of thisBooksList.clickBooks) {

        likeBook.addEventListener('dblclick', function(event){
          event.preventDefault();
          likeBook.classList.add('favorite');
          
        });
      }
      
    }
  }

  new BooksList();
}
  