const LISTING_ENDPOINT = "https://honbra.com/img/cta/listing.json";

// Fetch list of all cta images and pick a random one :3
function freecta(element) {
    if (element.getAttribute("disabled")) return;
    element.setAttribute("disabled", true)

    fetch(LISTING_ENDPOINT)
        .then(res => res.json())
        .then(data => {
            let root = data.base;
            let images = data.images;
            window.location.href = root + images[Math.floor(Math.random() * images.length)]
        })
}
