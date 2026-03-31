function trackShipment() {
    let id = document.getElementById("trackingId").value;
    let result = document.getElementById("result");
    alert("completed");

    if (id === "ABC123") {
        result.innerText = ("Status: Delivered");
    } else if (id === "XYZ789") {
        result.innerText = ("Status: Delivered");
    } else if (id === "FAST001") {
        result.innerText = ("Status: Delivered");
    } else if (id === "ACB567")  {
        result.innerText = ("Status: In Transist");
    } else if (id === "ACB098")  {
        result.innerText = ("Status: In Transist");
    } else if (id === "CBR567")  {
        result.innerText = ("Status: In Transist");
    } else if (id === "FAST111") {
        result.innerText = ("Status: Out for Delivery");
    } else if (id === "FAST221") {
        result.innerText = ("Status: Out for Delivery");
    } else {
        result.innerText = ("Invalid Tracking ID");
    }
}