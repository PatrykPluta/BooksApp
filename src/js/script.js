{

//const { render } = require("sass");


    'use strict';

    const select = {
        books: '# books-panel > .books-list',
    }

    class Product{
        constructor(id, data){
          const thisProduct = this;
          thisProduct.id = id;
          thisProduct.data = data;
          thisProduct.render();
        }

    render(){
        const thisProduct = this;
        for(let id of dataSource.books) {
            const generatedHTML = template-book(thisProduct.data);
            thisProduct.element = utils.createDOMFromHTML(generatedHTML);
            const menuContainer = document.querySelector(select.books);
            menuContainer.appendChild(thisProduct.element);
        }
    }
}
}