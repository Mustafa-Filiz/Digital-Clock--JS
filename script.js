function showTimeDate() {
    const displayTime = document.getElementById("displayTime");
    const displayDate = document.getElementById("displayDate");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const time = new Date();
    
    displayTime.innerHTML = time.toLocaleTimeString();
    displayDate.innerHTML = time.toLocaleDateString("en-GB", options);
    
}

setInterval(() => {
    showTimeDate();
}, 1000);
