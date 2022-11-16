var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


window.onload = loadCoupon()


function loadCoupon() {
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('body').style.opacity = '0.5'
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('body').style.opacity = '1'
}

function changeMode() {
    let modeChange = document.body;
    modeChange.classList.toggle('mylight');



}



let x = document.getElementById('out');
let y = document.getElementById('weatherOut');

function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    let y = document.getElementById('weatherOut');
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        //api calling
    fetch(url, { method: 'GET' })
        // return promise
        .then((res) => res.json())
        // resolve promise
        .then((data) => {
            console.log(data)
            let cityName = data.city.name;
            let temp = data.list[0].temp.day;

            y.innerText = `${cityName} ${temp} °C`

        })
        .catch((err) => {
            console.log(err)
        })
}