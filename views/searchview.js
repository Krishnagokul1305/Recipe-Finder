// Module 1
import View from "./view.js";

class SearchResults extends View {
    _parentElement = document.querySelector('.recipes');
    
    query() {
        return document.querySelector('#qurrey').value;
    }

    generateMarkup() {
       return this._data.map(res=>this.markupUi(res)).join('')
    }
    markupUi(result){
        const id=window.location.hash.slice(1)
        return `<div class="recipe m-0 ${result.recipeId==id?'search-active':''}">
        <a href="#${result.recipeId}" class="row">
        <div class="img-container col-3 d-flex align-items-center justify-content-center">
            <img src="${result.recipeimg}" alt="" id="recipeimg" class="mt-1 me-2">
        </div>
        <div class="recipe-details col-9">
            <h5 id="recipeTitle">${result.recipeTitle}</h5>
            <p id="recipePublisher" class="text-body-secondary">${result.recipiePublisher}</p>
        </div>
        </a>
    </div>`;
    }

    addSearchHandler(handler) {
        document.querySelector('#searchBtn').addEventListener('click', handler);
    }
}

export default new SearchResults();

