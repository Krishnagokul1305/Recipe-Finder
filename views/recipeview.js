import view from "./view.js";
import * as model from '../model.js'
class recipeView extends view{
    _parentElement=document.querySelector('.recipieDescription');
    // _data;
    generateMarkup(){
       return  ` <div class="recipe-img">
       <img src="${this._data.recipeImage} " alt="" class="img-fluid">
      </div>
      <div class="recipe-title mx-auto">
      ${this._data.recipeTitle}
      </div>
       <div class="recipeDuration d-flex">
           <div class="d-flex">
           <h4 class="duration text-body-secondary me-4">
               <img src="node_modules/bootstrap-icons/icons/clock.svg" alt="" class="me-2"><span id="recipe-duration">${this._data.cookingTime} mins</span></h4>
             <h4 class="servings text-body-secondary">
               <img src="node_modules/bootstrap-icons/icons/person.svg" alt="" class="me-1">
                   <span id="noOfServings">${this._data.serving}</span> s 
                   <img src="node_modules/bootstrap-icons/icons/plus-circle.svg" alt="" class="me-1 controler">
                   <img src="node_modules/bootstrap-icons/icons/dash-circle.svg" alt="" class="me-1 controler">                                   
               </h4>
           </div>
           <div id="bookmarkbtn">
               <img src="node_modules/bootstrap-icons/icons/${this._data.bookMarked?"bookmark-fill.svg":"bookmark.svg"}" alt="">
           </div>
       </div>
       <!--  -->
       <div id="recipeIngrident">
          <h4 class="text-center title">RECIPE INGREDIENTS</h4> 
          <ul id="recipe-steps" class="mt-4 list-unstyled">
          ${this._data.recipieIngridient.map(ingrident=>{
             return `<li class="recipe-steps-list">
             <img src="node_modules/bootstrap-icons/icons/check.svg" alt="">
               <p>${ingrident.quantity + ingrident.unit}</p>
               <p>${ingrident.description}</p>
          </li>`
          }).join('')}
          </ul>
       </div>
       <!--  -->
       <a class="publiserlink mx-auto my-3 d-block" href="${this._data.sourceLink}">how to cook<img src="node_modules/bootstrap-icons/icons/arrow-right.svg" alt="" class="ms-2"></a>
    </div>`
    }
    addHandler(handler){
        window.addEventListener('hashchange',handler)
    }
    addBookmark(handler){
      this._parentElement.addEventListener('click',(e)=>{
        const bookmarkbtn=e.target.closest('#bookmarkbtn')
        if(!bookmarkbtn) return;
        console.log(bookmarkbtn)
        if(!model.state.recipe.bookMarked){
            model.Bookmark(model.state.recipe)
            handler()
        }
        else{
            model.state.recipe.bookMarked=false
            this.deleteBookMark(model.state.recipe.id)
            handler()
        }
       })
       
    }
    deleteBookMark(id){
      const deleteIndex=model.state.bookMarks.findIndex(recipe=>recipe.recipeId==id)
      model.state.bookMarks.splice(deleteIndex,1)
    }
    }
    
    export default new recipeView()