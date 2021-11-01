export const item = (product) => {
  console.log('product', `${product.description[0].text.substr(0, 50)}...`);
  return `
    <li class="item">

  <div class="product__block js_product glass glass-m" id="${product.id}">
  <a href="product-page.html?id=${product.id}" class="product">
    <div class="product__img-box">
     <img src="${product.image}" alt="" class="img">
    </div>
  
    <div class="product__text-box">
      <p class="product__name js_product-name">${product.name}</p>
      <p class="text">${product.description[0].text.substr(0, 50)}...</p>
      <span class="product__price">$${(product.price).toFixed(2)}</span>
    </div>
   </a>
   <button class="btn product__btn js_add-to-cart">add to cart</button>
</div>
  </li>
    `
}