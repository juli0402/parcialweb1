data.items.forEach((element) => {
  const productsHtml = document.querySelector(".products");

  const singleProductHtml = document.createElement("div");
  singleProductHtml.className = "row product";
  singleProductHtml.innerHTML = `
                <div class="col-3">
                    <a href="productDetail.html?id=${
                      element.id
                    }" style="display: flex;align-items: center;flex-wrap: wrap;">
                        <img src="${
                          element.picture
                        }" class="img-fluid mx-auto d-block" alt="" style="width: 90px; height: 90px;">
                    </a>
                </div>
                <div class="col-6">
                    <p>$${element.price.amount}
                        <img src="./src/img/free-delivery.png" class="${
                          element.free_shipping ? "" : "d-none"
                        }" style="width: 25px;" alt="">
                    </p>
                    <p>${element.title}</p>
                </div>
                <div class="col-3">
                    <p>${element.location}</p>
                </div>
        `;

  productsHtml.appendChild(singleProductHtml);
});