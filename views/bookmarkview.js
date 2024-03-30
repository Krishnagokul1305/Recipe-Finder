import View from "./view.js";
class bookmarkview extends View{
    _parentElement=document.querySelector('.bookMarkcontainer')
    _data;
    generateMarkup() {
        console.log(this._data)
        return this._data.map(res=>this.markupUi(res)).join('')
     }
     markupUi(result){
         return `<div class="recipe m-0">
         <a href="#${result.recipeId}" class="row">
         <div class="img-container col-3 d-flex align-items-center justify-content-center">
             <img src="${result.recipeImage}" alt="" id="recipeimg" class="mt-1 me-2">
         </div>
         <div class="recipe-details col-9">
             <h5 id="recipeTitle">${result.recipeTitle}</h5>
             <p id="recipePublisher" class="text-body-secondary">${result.recipiePublisher}</p>
         </div>
         </a>
     </div>`;
     }
}
export default new bookmarkview()