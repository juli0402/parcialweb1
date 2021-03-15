const addFavorite = (id) => {
  let favorites = localStorage.getItem("favoritos");

  if (favorites) {
    let favoritesArray = favorites.split(";");
    let validation = favoritesArray.find((favorite) => favorite === id);

    if (!validation) {
      favorites += `;${id}`;
    }
  } else {
    favorites = id;
  }

  localStorage.setItem("favoritos", `${favorites}`);

  // change button
  document.querySelector(".btnAddFavorite").classList.add("d-none");
  document.querySelector(".btnRemoveFavorite").classList.remove("d-none");
};

const removeFavorite = (id) => {
  let favorites = localStorage.getItem("favoritos");
  let favoritesArray = favorites.split(";");

  let new_favoritesArray = favoritesArray.filter((element) => {
    return element != id;
  });

  favorites = new_favoritesArray.join(";");

  localStorage.setItem("favoritos", `${favorites}`);

  // change button
  document.querySelector(".btnAddFavorite").classList.remove("d-none");
  document.querySelector(".btnRemoveFavorite").classList.add("d-none");
};

const validateFavorite = (id) => {
  let favorites = localStorage.getItem("favoritos");
  if (favorites) {
    let favoritesArray = favorites.split(";");
    let validation = favoritesArray.find((favorite) => favorite === id);
    if (validation) {
      return false;
    }
  }

  return true;
};

const productData = data.items.find((element) => {
  // console.log(element);
  return element.id === productId;
});

let breadcrumbHtml = "";
productData.categories.forEach((item) => {
  breadcrumbHtml += item + " > ";
});
breadcrumbHtml = breadcrumbHtml.slice(0, -2);

document.querySelector(".breadcrumb").innerHTML = `<p>${breadcrumbHtml}</p>`;

// Load data
let favoriteBool = validateFavorite(productId);
console.log(favoriteBool);

const productDetailHtml = document.querySelector(".productDetail");
productDetailHtml.innerHTML = `
    <div class="col-9">
        <img src="${
          productData.picture
        }" alt="" style="width: 400px;height: 400px;">
        <h4>Descripción del producto</h4>
        <p class="description" style="text-align: justify;">${
          productData.description
        }</p>
      </div>
      <div class="col-3">
        <p>${productData.condition} | ${productData.sold_quantity}</p>
        <p>${productData.title}</p>
        <p>$${productData.price.amount}</p>
        <button style="background: #C968CB; border-radius: 20px; color: white; display: block; margin: 5px; width: 100%;height: 51px;" class="btn" data-toggle="modal" data-target="#exampleModal">Comprar</button>
        <button style="background: #8C86D7; border-radius: 20px; color: white; display: block; margin: 5px; width: 100%; height: 51px;" class="btn btnFavorites btnAddFavorite ${
          favoriteBool ? "" : "d-none"
        }" onclick="addFavorite('${productId}')">Añadir a favoritos</button>
        <button style="background: #8C86D7; border-radius: 20px; color: white; display: block; margin: 5px; width: 100%; height: 51px;" class="btn btnFavorites btnRemoveFavorite ${
          !favoriteBool ? "" : "d-none"
        }" onclick="removeFavorite('${productId}')">Quitar de favoritos</button>
    </div>
  `;

document.querySelector("#modalProductTitle").innerText = productData.title;
