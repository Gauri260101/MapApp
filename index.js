async function initMap() {
    let p1 = await fetch("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json");
    let data = await p1.json();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 0, lng: 0 },
    });
    for (let i = 0; i < 1000; i++) {
        let lat = parseFloat(data[i].lat)
        let lng = parseFloat(data[i].lng)

        let p = { lat, lng };
        //console.log(p);
        const marker = new google.maps.Marker({
            position: p,
            map: map,
        });
    }
}

window.initMap = initMap;