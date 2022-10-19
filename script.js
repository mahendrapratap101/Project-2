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