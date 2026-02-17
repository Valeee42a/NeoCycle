function openNav() {
    document.getElementById("sideMenu").style.width = "260px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

function toggleSearch() {
    alert("NeoCycle: Opening Johor Bahru Waste Database...");
}

function showMap(area) {
    alert("GPS: Navigating to " + area + " drop-off point.");
}

function showInfo() {
    alert("NeoCycle v2.1\nStatus: Online\nRegion: Johor Bahru, Malaysia");
}

function processReport() {
    const waste = document.getElementById("wasteCategory").value;
    if (waste) {
        alert("SUCCESS: Pickup request for " + waste + " submitted to local authorities.");
    } else {
        alert("ERROR: Please select a waste type first.");
    }
}
