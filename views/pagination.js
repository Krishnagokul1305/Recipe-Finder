import View from "./view.js";
import { state } from "../model.js";
class paginationView extends View{
    _parentElement=document.querySelector('.buttons')
    generateMarkup(){
        const pageNo=this._data
        const noOfPages=Math.ceil(state.searchResults.results.length/state.searchResults.resultsPerPage)
        console.log(noOfPages)
        // if(){

            if(pageNo==1){
                return `
                <div class="btn--inline btn-next" data-goto=${pageNo+1}>
               page ${pageNo+1} <img src="node_modules/bootstrap-icons/icons/arrow-right.svg" alt="">
               </div>
                `
            }
            if(pageNo==noOfPages){
                return `
                <div class="btn--inline btn-previous" data-goto=${pageNo-1}>
                <img src="node_modules/bootstrap-icons/icons/arrow-left.svg" alt="">  page ${pageNo-1} 
               </div>
                `
            }
            if(pageNo>1&&pageNo<noOfPages)
           { return `
             <div class="btn--inline btn-previous " data-goto=${pageNo-1}>
                <img src="node_modules/bootstrap-icons/icons/arrow-left.svg" alt="">  page ${pageNo-1}
               </div>
               <div class="btn--inline btn-next" data-goto=${pageNo+1}>
               page ${pageNo+1} <img src="node_modules/bootstrap-icons/icons/arrow-right.svg" alt=""> 
               </div>`}
    }
    addclickHandler(handler){
        document.querySelector('.buttons').addEventListener('click',function(e){
            const btn=e.target.closest('.btn--inline')
            const goto=+btn.dataset.goto
            handler(goto)
        })             
    }
}
export default new paginationView()