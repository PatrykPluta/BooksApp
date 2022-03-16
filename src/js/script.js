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

    bookFilters: {
      menuFilters: '.container .filters'
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
      thisBooksList.filters = [];
      
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
          if(event.target.offsetParent.classList.contains('.book__image'));
          const bookId = likeBook.getAttribute('data-id');
          likeBook.classList.toggle('favorite');
          if(!thisBooksList.favoriteBooks.includes(bookId)) {
            thisBooksList.favoriteBooks.push(bookId);
          } else {
            const index = thisBooksList.favoriteBooks.indexOf(bookId);
            thisBooksList.favoriteBooks.splice(index, 1);
          }
          console.log(thisBooksList.favoriteBooks);
        });
      }

      thisBooksList.clickFilters = document.querySelector(select.bookFilters.menuFilters);

      thisBooksList.clickFilters.addEventListener('click', function(event){
        if(event.target.tagName === 'INPUT' && event.target.type === 'checkbox' && event.target.name === 'filter');
        const bookValue = thisBooksList.clickFilters.getAttribute('value');
        if(!thisBooksList.clickFilters.includes(bookValue)) {
          thisBooksList.clickFilters.push(bookValue);
        } else {
          const indexValue = thisBooksList.favoriteBooks.indexOf(bookValue);
          thisBooksList.clickFilters.splice(indexValue, 1);
        }
        
        
        console.log('clickfilters', thisBooksList.clickFilters);
      });
      
    }
  }

  new BooksList();
}