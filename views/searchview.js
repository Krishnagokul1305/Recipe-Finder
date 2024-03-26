// Module 1
import View from "./view.js";

class SearchResults extends View {
    _parentElement = document.querySelector('.recipes');
    
    query() {
        return document.querySelector('#qurrey').value;
    }

    generateMarkup() {
    //    console.log(this._data)
       return this._data.map(res=>this.markupUi(res)).join('')
    }
    markupUi(result){
        return `<div class="recipe row m-0" href="#${result.recipeId}">
        <div class="img-container col-3 d-flex align-items-center justify-content-center">
            <img src="${result.recipeimg}" alt="" id="recipeimg" class="mt-1 me-2">
        </div>
        <div class="recipe-details col-9">
            <h5 id="recipeTitle">${result.recipeTitle}</h5>
            <p id="recipePublisher" class="text-body-secondary">${result.recipiePublisher}</p>
        </div>
    </div>`;
    }

    addSearchHandler(handler) {
        document.querySelector('#searchBtn').addEventListener('click', handler);
    }
}

export default new SearchResults();

