const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://truecrime-b8fd.restdb.io/rest/truecrime?q={"id":"${id}"}`;


const options = { 
    headers: {
        'x-apikey': "63f72574478852088da6857d"

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
    document.querySelector(".h2_product").textContent = produkt.titel;
    document.querySelector(".h1_product").textContent = "Titel: " + produkt.titel;
    document.querySelector(".cover").src = "anbefalinger/" + produkt.photo;
    document.querySelector(".h2_product2").textContent = "Udgivelsesår: " + produkt.year;
    document.querySelector(".h2_product3").textContent = "Længde: " + produkt.length;
    document.querySelector(".h2_product4").textContent = "Platform: " + produkt.platform;
    document.querySelector(".h2_product5").textContent = "Type: " + produkt.type;
    document.querySelector(".p_product").textContent = "Beskrivelse: " + produkt.description;
    document.querySelector(".platformlink").href = produkt.link;

}

hentData();



