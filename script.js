/* Open/Close Side Menu */
function openNav() {
    document.getElementById("sideMenu").style.width = "260px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

/* Search Function */
function toggleSearch() {
    alert("System: Accessing Johor Bahru Waste Collection Database...");
}

/* Info Icon */
function showInfo() {
    alert("NeoCycle v2.0\nIntegrated Public Waste Management System\nLocation: Johor Bahru, Malaysia");
}

/* Schedule Pickup Logic */
function processReport() {
    const waste = document.getElementById("wasteCategory").value;
    if (waste) {
        alert("SUCCESS: Request for " + waste + " pickup submitted. Local collection unit notified.");
    } else {
        alert("ALERT: Please select a waste type before scheduling.");
    }
}
