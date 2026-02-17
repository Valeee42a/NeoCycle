function toggleNav(width) {
    document.getElementById("sideMenu").style.width = width + "px";
}

function submitPickup() {
    const waste = document.getElementById("wasteSelect").value;
    if (waste) {
        alert("SUCCESS: Request for " + waste + " pickup submitted. GPS coordinates locked.");
    } else {
        alert("Please select a waste category first.");
    }
}
