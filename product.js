const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
    fetch(url)
    .then((respons) => respons.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
    console.log(produkt);
    document.querySelector(".h2_product").textContent = "Titel: " + product.titel;
    document.querySelector("img").src = "anbefalinger/" + product.photo;
    document.querySelector("#farve").textContent = produkt.basecolour;
    document.querySelector("#id").textContent = produkt.id;
    document.querySelector("#brand").textContent = produkt.brandname;
    document.querySelector("#type").textContent = produkt.articletype;

}

hentData();