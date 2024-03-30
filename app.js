import * as model from './model.js'
import recipeview from './views/recipeview.js'
import searchview from './views/searchview.js'
import pagination from './views/pagination.js'
import bookmarkview from './views/bookmarkview.js'

async function recipeLoading(){
try{
   const recipeid=window.location.hash.slice(1)
   if(!recipeid) return;
   recipeview.renderSpinner()
   searchview.update(model.getpage())
   await model.recipeLoader(recipeid)
   recipeview.render(model.state.recipe)
   }catch(err){
   console.log(err.message)
   }
}
recipeLoading()
recipeview.addBookmark(bookMarkhandler)
recipeview.addHandler(recipeLoading)

async function searchresult(){
   try{
     if(!searchview.query()) return
    const res= searchview.query()
    searchview.renderSpinner()
    await model.search(res)
    searchview.render(model.getpage())
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
   searchview.render(model.getpage(goto))
   pagination.render(model.state.searchResults.page)
}

function bookMarkhandler(){
   bookmarkview.render(model.state.bookMarks)
   recipeview.update(model.state.recipe)
   bookmarkview.update(model.state.bookMarks)
}
