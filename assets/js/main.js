console.log("Works");

let mobileNav = document.getElementById('mobileNav');


function showMobileNav() {
    if (mobileNav.style.visibility === "hidden") {
        mobileNav.style.visibility = "visible";
    } else {
        mobileNav.style.visibility = "hidden";
    }
}
