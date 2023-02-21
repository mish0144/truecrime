const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");
const url = `https://truecrime-74a2.restdb.io/rest/truecrime?limit=20&type=${type}`;

const options = { 
    headers: {
        'x-apikey': "63f4c433478852088da68526"

    }
};


document.querySelector("h1").textContent = type;

console.log(type)

function hentData() {
  fetch(url, options)
    .then((respons) => respons.json())
    .then(visData);
    console.log(url)
}

const temp = document.querySelector("template").content;
const productList = document.querySelector(".productlistgrid");

function visData(json) {
  json.forEach((product) => {
    const klon = temp.cloneNode(true);
    klon.querySelector(".titel").textContent = product.titel;
    klon.querySelector(".type").textContent = product.type;
    klon.querySelector(".platform").textContent = product.platform;
    klon.querySelector(".length").textContent = product.length;
    klon.querySelector("img").src = "anbefalinger/" + product.photo;
    klon.querySelector("a").href = "produkt.html?id=" + product.id;



    productList.appendChild(klon);
  });
}

hentData();
