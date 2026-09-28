//destination names and their maps
const mountains = [];
mountains["Asheville, North Carolina"] = "https://www.google.com/maps?q=Asheville+NC&output=embed";
mountains["Boone, North Carolina"] = "https://www.google.com/maps?q=Boone+NC&output=embed";
mountains["Hot Springs, North Carolina"] = "https://www.google.com/maps?q=Hot+Springs+NC&output=embed";
mountains["Table Rock, South Carolina"] = "https://www.google.com/maps?q=Table+Rock+State+Park+SC&output=embed";

const beaches = [];
beaches["Myrtle Beach, South Carolina"] = "https://www.google.com/maps?q=Myrtle+Beach+SC&output=embed";
beaches["Grand Isle Beach, Louisiana"] = "https://www.google.com/maps?q=Grand+Isle+Beach+Louisiana&output=embed";
beaches["My Khe Beach, Vietnam"] = "https://www.google.com/maps?q=My+Khe+Beach+Da+Nang+Vietnam&output=embed";
beaches["Phu Quoc Beach, Vietnam"] = "https://www.google.com/maps?q=Phu+Quoc+Beach+Vietnam&output=embed";

//show links for the selected destination type
document.getElementById("destination-type").onchange = () => {
    const type = document.getElementById("destination-type").value;
    const list = document.getElementById("destinations");
    const map = document.getElementById("destination-map");
    let destinations = [];

    list.innerHTML = "";
    map.classList.add("hide");
    map.removeAttribute("src");

    if (type == "mountains") {
        destinations = mountains;
    } else if (type == "beaches") {
        destinations = beaches;
    }

    for (const name in destinations) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = name;
        link.href = destinations[name];
        li.append(link);
        list.append(li);

        //show the map when a destination is clicked
        link.onclick = (event) => {
            event.preventDefault();
            map.src = destinations[name];
            map.title = "Map of " + name;
            map.classList.remove("hide");
        };
    }
};