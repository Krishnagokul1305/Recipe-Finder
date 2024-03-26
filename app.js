import * as model from './model.js'
import recipeview from './views/recipeview.js'
import searchview from './views/searchview.js'
import pagination from './views/pagination.js'

async function recipeLoading(){
try{
   const recipeid=window.location.hash.slice(1)
   if(!recipeid) return;
   recipeview.renderSpinner()
   await model.recipeLoader(recipeid)
   recipeview.render(model.state.recipe)
   console.log(recipeview) 
   }catch(err){
   alert(err.message)
   }
}
recipeLoading()
recipeview.addHandler(recipeLoading)

async function searchresult(){
   try{
     if(!searchview.query()) return
    const res= searchview.query()
    searchview.renderSpinner()
    await model.search(res)
    searchview.render(model.getpage(model.state.searchResults.page))
    pagination.render(model.state.searchResults.page)
   }
   catch(err){
     console.log(err)
   }
}
searchresult()
searchview.addSearchHandler(searchresult)
pagination.addclickHandler(gotoPage)

function gotoPage(goto){
   console.log(goto)
   searchview.render(model.getpage(goto))
   pagination.render(model.state.searchResults.page)
}
