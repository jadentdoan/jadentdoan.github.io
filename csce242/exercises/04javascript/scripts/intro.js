
//Shows a message when the button is clicked 
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello, World!";
    e.target.innerHTML = "Message Shown";
}

//Styles the link when it is clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classlist.add("cool-link");
}

//When button is clicked, make the ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//When the user enters a number of days, show a message and change the image
//Can do onchange or onkeyup. Onchange only fires when the user leaves the input box, onkeyup fires every time a key is pressed
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");
    
    if(numDays <= 2) {
        pMessage.innerHTML = `Let your plant rest, it's only been ${numDays} days.`;
        plantImage.src = "https://dummyimage.com/150x150/e800e8/00ff00&text=happy+plant";
    }
    else if(numDays <= 5) {
        pMessage.innerHTML = `Time to water, it's been ${numDays} days.`;
        plantImage.src = "https://dummyimage.com/150x150/e30000/00ff00&text=THIRSTY+plant";
    }
    else if(numDays <= 7){
        pMessage.innerHTML = `Your plant is wilting, it's been ${numDays} days.`;
    }
    else {
        pMessage.innerHTML = `Your plant is a goner`;
    }
}

//Counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

btnStart.onclick = () =>
{
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
};

btnPause.onclick = () =>
{
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

btnStop.onclick = () =>
{
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

//date display
setInterval(()=>{
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();
    pDisplay.innerHTML = `${minutes}:${seconds} ${month}/${day}/${year}`;
}, 1000);

//toggle the navigation
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("main-nav ul").classList.toggle("hide-small")
}

//record the donation and fill up thermometer
const GOAL = 10000;
document.getElementById("goal").innerHTML = GOAL

document.getElementById("btn-donation").onclick = () => {
    const userDonation = parseInt(document.getElementById("txt-donation").value);
    const donationP = document.getElementById("donation-message");
    percent = userDonation / GOAL * 100;

    donationP.innerHTML = `You are $(percent.toFixed(1))% to your goal`;
    document.querySelector(":root").computedStyleMap.setProperty("--donation", percent + "%");
}
