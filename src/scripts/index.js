let categorySearch = document.getElementById("search");
let button = document.getElementById("button");
const productsHtml = document.querySelector(".products");
let singleProductHtml;

data.items.forEach((element) => {
  singleProductHtml = document.createElement("div");
  singleProductHtml.className = "row product";
  singleProductHtml.innerHTML = `
                <div class="col-3" style = "margin-bottom: auto; margin-top: auto;">
                    <a href="productDetail.html?id=${
                      element.id
                    }" style="display: flex;align-items: center;flex-wrap: wrap;">
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
                <div class="col-3" style = "margin-bottom: auto; margin-top: auto;">
                    <p>${element.location}</p>
                </div>
        `;

  productsHtml.appendChild(singleProductHtml);
});

button.onclick = handleSearch = () => {
  if (categorySearch.value !== "") {
    productsHtml.innerHTML = ``;
    let encontro = false;
    data.items.forEach((element) => {
      element.categories.forEach((category) => {
        if (category.toUpperCase() == categorySearch.value.toUpperCase()) {
          encontro = true;
          singleProductHtml = document.createElement("div");
          singleProductHtml.className = "row product";
          singleProductHtml.innerHTML = `
                    <div class="col-3" style = "margin-bottom: auto; margin-top: auto;">
                        <a href="productDetail.html?id=${
                          element.id
                        }" style="display: flex;align-items: center;flex-wrap: wrap;">
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
                    <div class="col-3" style = "margin-bottom: auto; margin-top: auto;">
                        <p>${element.location}</p>
                    </div>
            `;
          productsHtml.appendChild(singleProductHtml);
        }
      });
    });
    if (encontro == false) {
      productsHtml.innerHTML = `<div class="alert alert-warning" role="alert">
    No existe esta categoría
    </div>`;
    }
  } else {
    productsHtml.innerHTML = `<div class="alert alert-warning" role="alert">
    Inserte la categoría que desea buscar
    </div>`;
  }
};

document.getElementById("form").addEventListener("submit", function (e) {
  handleSearch();
  e.preventDefault();
  usrpas();
});
