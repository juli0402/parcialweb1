let favorites = localStorage.getItem("favoritos");
const productsHtml = document.querySelector(".products");
let html = String(document.getElementById("divFavoritos"));

if (favorites) {
  favorites = favorites.split(";");
  favorites.forEach((favorite) => {
    const element = data.items.find((product) => product.id === favorite);

    const singleProductHtml = document.createElement("div");
    singleProductHtml.className = "row product";
    singleProductHtml.innerHTML = `
                        <div class="col-3" style = "margin-bottom: auto; margin-top: auto;">
                            <a href="productDetail.html?id=${
                              element.id
                            }" style="display: flex;align-items: center;flex-wrap: wrap; margin-bottom: auto; margin-top: auto;">
                                <img src="${
                                  element.picture
                                }" class="img-fluid mx-auto d-block" alt="" style="width: 90px; height: 90px;">
                            </a>
                        </div>
                        <div class="col-6" style = "margin-bottom: auto; margin-top: auto;">
                            <p>$${element.price.amount}
                                <img src="./src/img/free-delivery.png" class="${
                                  element.free_shipping ? "" : "d-none"
                                }" style="width: 25px;" alt="">
                            </p>
                            <p>${element.title}</p>
                        </div>
                        <div class="col-3" style="margin-top: auto; margin-bottom: auto;">
                            <p>
                                <a href="productDetail.html?id=${
                                  element.id
                                }" style="display: flex;align-items: center;flex-wrap: wrap; text-decoration: none;">
                                    <button style="background: #C968CB; border-radius: 20px; color: white; display: block; margin: 5px; width: 100%;height: 51px;" class="btn" >Ver Articulo</button>
                                </a>
                            </p>
                        </div>

                `;

    productsHtml.appendChild(singleProductHtml);
  });
} else {
  productsHtml.innerHTML = `<div class="alert alert-warning" role="alert">
  No hay productos favoritos
</div>`;
}
