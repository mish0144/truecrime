const urlParams = new URLSearchParams(window.location.search);
const url = `https://truecrime-b8fd.restdb.io/rest/truecrime`;


const options = { 
    headers: {
        'x-apikey': "63f72574478852088da6857d"

    }
};



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
    klon.querySelector("a").href = "product.html?id=" + product.id;



    productList.appendChild(klon);
  });
}

hentData();
