const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://truecrime-74a2.restdb.io/rest/truecrime?q={"id":"${id}"}`;


const options = { 
    headers: {
        'x-apikey': "63f4c433478852088da68526"

    }
};



function hentData() {
    fetch(url, options)
    .then((respons) => respons.json())
    .then(products => visProdukt(products[0]));
    console.log(url)
    console.log(id)
}

function visProdukt(produkt) {
    document.querySelector(".h1_product").textContent = produkt.titel;
    document.querySelector(".h2_product").textContent = "Titel: " + produkt.titel;
    document.querySelector(".cover").src = "anbefalinger/" + produkt.photo;
    document.querySelector(".h2_product2").textContent = "Årstal: " + produkt.year;
    document.querySelector(".h2_product3").textContent = produkt.length;
    document.querySelector(".p_product").textContent = produkt.description;
    document.querySelector(".platformlink").href = produkt.link;

}

hentData();