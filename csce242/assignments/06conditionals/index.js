//Changes the arrow and creates the ability to toggle between

const menu = document.getElementById("menu-items");
const arrow = document.getElementById("menu-toggle");

arrow.onclick = () => {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        arrow.textContent = "▲";
    } else {
        arrow.textContent = "▼";
    }
};

//Hides either while the other is toggled

document.getElementById("exercise-1").onclick = () => {
    document.getElementById("missing-class").classList.remove("hide");
    document.getElementById("semester-counter").classList.add("hide");
    document.getElementById("exercise-1").setAttribute("true");
    document.getElementById("exercise-2").setAttribute("false");
};

document.getElementById("exercise-2").onclick = () => {
    document.getElementById("semester-counter").classList.remove("hide");
    document.getElementById("missing-class").classList.add("hide");
    document.getElementById("exercise-1").setAttribute("false");
    document.getElementById("exercise-2").setAttribute("true");
};

//Allow user to input days missed and it will compute how much of your class grade gets deducted. It will also display both the percent and a unique message for certain day ranges.

document.getElementById("days-missed").oninput = () => {
    const days = Number(document.getElementById("days-missed").value);
    const pointsLost = (days / 25) * 7;
    let message = "";

    if (days == 0) {
        message = "You're like Mikal Bridges. Never missing a single game, or more accurately class.";
    } else if (days <= 5) {
        message = "Cloudy with a chance of you might be sleeping in!";
    } else if (days <= 13) {
        message = "We were gonna gamble if you came to class or not.";
    } else {
        message = "Go ahead and drop the class. It's not even worth it to stay.";
    }

    document.getElementById("deduction").textContent =
        `You will lose ${pointsLost.toFixed(1)}% for skipping ${days} days.`;

    document.getElementById("attendance-message").textContent = message;
};

//Obtains the date and change the amount of days left. For each range, a different message will be displayed.

const today = new Date();
const lastDay = new Date(today.getFullYear(), 11, 4);
let daysLeft = 0;
let semesterMessage = "";

today.setHours(0, 0, 0, 0);

if (today > lastDay) {
    semesterMessage = "The semester is over. Enjoy your break!";
} else {
    while (today < lastDay) {
        today.setDate(today.getDate() + 1);
        daysLeft++;
    }

    if (daysLeft == 0) {
        semesterMessage = "You made it through the long haul! What a semester.";
    } else if (daysLeft <= 14) {
        semesterMessage = "Finals time! Lets get it, lets go!";
    } else if (daysLeft <= 40) {
        semesterMessage = "The finish line is almost in sight. Lets give it one good push!";
    } else {
        semesterMessage = "Too soon junior! Check again next time.";
    }
}

document.getElementById("days-remaining").textContent =
    `You have ${daysLeft} days left in the semester.`;

document.getElementById("semester-message").textContent =
    semesterMessage;