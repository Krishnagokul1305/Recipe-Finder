export default class View {
    _parentElement;
    _data;

    render(data) {
        this._data = data;
        const markup = this.generateMarkup();
        this.clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data){
        this._data=data;
        const markup = this.generateMarkup();
        const newDOM=document.createRange().createContextualFragment(markup)
        const newEL=newDOM.querySelectorAll('*')
        const oldEl=this._parentElement.querySelectorAll('*')
        newEL.forEach((el,index)=>{
            let currentEl=oldEl[index]
            if(!el.isEqualNode(currentEl)) {
                currentEl.innerHTML=el.innerHTML
            }
            if(!el.isEqualNode(currentEl)) 
            Array.from(el.attributes).forEach(attr=>{
        currentEl.setAttribute(attr.name,attr.value)})
        })
        
    }
    clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const spinner = `<div class="spinner d-flex">
                            <img src="asset/images/icons8-spinner-50.png" alt="" class="mx-auto mt-5">
                        </div>`;
        this.clear();
        this._parentElement.insertAdjacentHTML('afterbegin', spinner);
    }
}