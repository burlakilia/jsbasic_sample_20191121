'use strict';

class ShopsList {

  constructor(el) {
    this.el = el;
    console.log(el); // ??
    this.load();
  }

  load() {
    const promise = fetch('/shops');
    promise
      .then(data => data.json())
      .then(этопараметркоторыйнадопередатьвнемсписок => this.render(этопараметркоторыйнадопередатьвнемсписок));
  }

  render(list) {
    console.log('render', list);
    this.el.innerHTML = list.map(item => `
        <option value="${item.id}">${item.name}</option>
    `).join('');
  }

}

window.addEventListener('DOMContentLoaded', function () {
  const shoplist = new ShopsList(document.querySelector('.shoplist'));
  console.log(shoplist);
})




