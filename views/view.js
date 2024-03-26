export default class View {
    _parentElement;
    _data;

    render(data) {
        this._data = data;
        const markup = this.generateMarkup();
        this.clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        console.log(this._data)
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