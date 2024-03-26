export const state={
    recipe:{},
    searchResults:{
        qurrey:'',
        results:{},
        page:1,
        resultsPerPage:10
    }
}

export const recipeLoader=async function (id){
    try{
    const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    console.log(response)
    if(!response.ok) throw new Error('recipe not found')
    const data=await response.json()
    const{recipe:recipeData}=data.data
       state.recipe={
       recipeTitle:recipeData.title,
       recipeImage: recipeData.image_url,
       recipieIngridient:recipeData.ingredients,
       recipiePublisher:recipeData.publisher,
       recipeId:recipeData.id,
       sourceLink:recipeData.source_url,
       cookingTime:recipeData.cooking_time,
       serving:recipeData.servings
    }
}catch (err){
    console.log(err)
}
}

export const search=async function(qurrey){
    try{
    //   if(!qurrey) return
      state.searchResults.qurrey=qurrey
      const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${qurrey}`)
      const data=await response.json()
      const {recipes}=data.data
      console.log(recipes)
      state.searchResults.results= recipes.map(res=>{
        return {
            recipeId:res.id,
            recipiePublisher:res.publisher,
            recipeimg:res.image_url,
            recipeTitle:res.title
        }
      })
      state.searchResults.page=1
      console.log(state.searchResults.results)
    }
    catch (err){
        console.log(err)
    }
}

export function getpage(page=state.searchResults.page){
    state.searchResults.page=page
    const start=(page-1)*state.searchResults.resultsPerPage;
    const end=page*state.searchResults.resultsPerPage;
    return state.searchResults.results.slice(start,end)
}