const products_list = document.querySelector(".products");

// read from basket
let basket = JSON.parse(localStorage.getItem("basket")); // Parse data from localstorage
console.log(basket);

basket.forEach((item) => {
  console.log(item);
  console.log(item.elementName);
  //   product_name.textContent = item.elementName;

  console.log(item.elementPrice);
  console.log(item.elementQuantity);
  console.log(item.elementImg);
  const html_code = `
  <div class="product-image">
    <img src="${item.elementImg}" alt="">
  </div>
  <div class="product-div-without-image">

  <div class="product-info">
    <div class="product-name">
      <h2>
        <a href="book.html">
          <p>${item.elementName}</p>
        </a>
      </h2>
    </div>
    <div class="discount-label">
        <p>منتج قابل للخصم لحاملي بطاقة خصم مكتبة جرير</p>
    </div>
    <div class="yellow-note">
    <p>
      <span>ملاحظة: </span>
      هذا المنتج رقمي وسيتم توصيله من خلال البريد الالكتروني
    </p>
    <a href="#">كيفية الحصول على المنتج؟</a>
  </div>
  </div>
  <div class="price-box">
    <div class="price">
      <p>${item.elementPrice}</p>

      <span class="price_currency"> رس </span>
    </div>
    </div>
  </div>
`;
  //   const product = document.createElement("div");
  //   product.innerHTML = html_code;
  //   product.classList.add("product");
  //   products_list.appendChild(product);
});
