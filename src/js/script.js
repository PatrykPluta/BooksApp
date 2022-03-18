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
      thisBooksList.dom.filters = document.querySelector(select.bookFilters.menuFilters);
      
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
      
      thisBooksList.dom.wrapper.addEventListener('dblclick', function(event) {
        event.preventDefault();
        
        const elem = event.target.offsetParent;
        if(elem.classList.contains('.book__image')) {
          const bookId = elem.getAttribute('data-id');
          elem.classList.toggle('favorite');
          if(!thisBooksList.favoriteBooks.includes(bookId)) {
            thisBooksList.favoriteBooks.push(bookId);
          } else {
            const index = thisBooksList.favoriteBooks.indexOf(bookId);
            thisBooksList.favoriteBooks.splice(index, 1);
          }
        }
      });
   

      thisBooksList.dom.filters.addEventListener('change', function(event){
        event.preventDefault();
        
        if(event.target.tagName === 'INPUT' && event.target.type === 'checkbox' && event.target.name === 'filter') {
          
          const bookValue = event.target.getAttribute('value');
          if(!thisBooksList.filters.includes(bookValue)) {
            thisBooksList.filters.push(bookValue);
          } else {
            const indexValue = thisBooksList.filters.indexOf(bookValue);
            thisBooksList.filters.splice(indexValue, 1);
          }

          thisBooksList.filterBooks();
        
        }
        
      });
    }


    filterBooks() {
      const thisBooksList = this;

      for(let book of thisBooksList.data) {
        const bookElem = document.querySelector('.book__image[data-id="' + book.id + '"]');
        bookElem.classList.remove('hidden');

        for(let filter of thisBooksList.filters) {
          if(!book.details[filter]) {
            bookElem.classList.add('hidden');
          }
        }
  
      }
    }

    determineRatingBgc() {
      const thisBooksList = this;

      
    }

  }

  new BooksList();
}

