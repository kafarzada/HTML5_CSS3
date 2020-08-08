class Select {
    constructor(options) {
        this.$el = document.getElementById(options.selector)
        this.label = options.label
        this.list = options.list;
        this.selected = 'undefined'
        this.#render()
    }

    #render  = function() {
          const listElem = `<div class="select__field">${this.label}</div>
          <ul class="select__items">
          ${ this.list.map(item => `<li
                                 id=${item.id}
                                 class="select__item"
                                 
                                  >${item.value}</li>`).join('') }
          </ul>`;

          this.$el.innerHTML = listElem
    }

    selectOnclickHandler(id) {
        this.selected(id)
    }

    select(n) {
        this.selected = this.list.find(item => item.id === n).value
        this.$el.querySelector(".select__field").innerHTML = this.selected
    }

    getSelected() {
        console.log(this.selected);
    }

    open() {
        this.$el.querySelector('.select__items').classList.add('open')
        console.log('asd');
    }

    close() {
        this.$el.querySelector('.select__items').classList.remove('open')
    }

    clear() {
        this.selected =  'undefined'
        this.$el.querySelector(".select__field").innerHTML = this.label;
    }

    destroy() {
        this.$el.remove()
    }
}


const select = new Select({
    selector: 'select',
    label: 'Choose the language',
    list: [
        {id: 1, value: 'React'},
        {id: 2, value: 'Angular'},
        {id: 3, value: 'Next Js'},
        {id: 4, value: 'Node Js'}
    ]
})



document.getElementById('btnOpen').onclick = () => { select.open() }
document.getElementById('btnClose').onclick = () => { select.close() }
document.getElementById('btnSelect').onclick = () => { select.select(2) }
document.getElementById('btnGetSelected').onclick = () => { select.getSelected() }
document.getElementById('btnClear').onclick = () => { select.clear() }
document.getElementById('btnDestroy').onclick = () => { select.destroy() }