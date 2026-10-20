//vacation information
class Vacation {
    constructor(title, type, description, thingsToDo, imageFile, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.imageFile = imageFile;
        this.mapSrc = mapSrc;
    }

    //make a card for the gallery
    getCard() {
        const card = document.createElement("section");
        card.className = "vacation-card";

        const button = document.createElement("button");
        button.type = "button";

        const heading = document.createElement("div");
        heading.className = "card-heading";
        const title = document.createElement("h3");
        title.textContent = this.title;
        const type = document.createElement("p");
        type.textContent = this.type + " Vacation";
        heading.append(title, type);

        const image = document.createElement("img");
        image.src = "images/" + this.imageFile;
        image.alt = this.type + " scenery for " + this.title;
        image.width = 600;
        image.height = 450;

        button.append(heading, image);
        button.onclick = () => {
            this.showDetails(button);
        };
        card.append(button);
        return card;
    }

    //show the selected vacation
    showDetails(button) {
        lastClickedCard = button;
        document.getElementById("modal-title").textContent = this.title;
        document.getElementById("modal-type").textContent = this.type;
        document.getElementById("modal-description").textContent = this.description;
        document.getElementById("modal-activities").textContent = this.thingsToDo;
        const map = document.getElementById("vacation-map");
        map.src = this.mapSrc;
        map.title = "Map of " + this.title;
        modal.classList.remove("hide");
        document.getElementById("page-content").inert = true;
        document.body.classList.add("modal-open");
        closeButton.focus();
    }
}

//make a map link
const getMapSrc = (place) => {
    return "https://www.google.com/maps?q=" + encodeURIComponent(place) + "&output=embed";
};

const vacations = [
    new Vacation("Asheville", "Mountain",
        "A mountain city in western North Carolina surrounded by Blue Ridge scenery.",
        "Explore Biltmore Estate, take a scenic drive, and enjoy a mountain hike.",
        "asheville.jpg", getMapSrc("Asheville, NC")),
    new Vacation("Boone", "Mountain",
        "A college town in North Carolina's High Country with mountain views and outdoor adventures.",
        "Visit Appalachian State University, browse downtown shops, and explore nearby trails.",
        "boone.jpg", getMapSrc("Boone, NC")),
    new Vacation("Hot Springs", "Mountain",
        "A small North Carolina town beside the French Broad River, known for its natural hot springs.",
        "Relax in the hot springs, walk part of the Appalachian Trail, and enjoy river views.",
        "hot-springs.jpg", getMapSrc("Hot Springs, NC")),
    new Vacation("Table Rock", "Mountain",
        "A South Carolina state park with a striking granite mountain and wooded trails.",
        "Hike the trails, have a lakeside picnic, and photograph the mountain scenery.",
        "table-rock.jpg", getMapSrc("Table Rock State Park, SC")),
    new Vacation("Sunset Beach", "Beach",
        "A quiet coastal destination in North Carolina with wide sandy beaches.",
        "Collect seashells, walk along the shore, and watch the sunset.",
        "sunset-beach.jpg", getMapSrc("Sunset Beach, NC")),
    new Vacation("Edisto Beach", "Beach",
        "A laid-back South Carolina beach community surrounded by Lowcountry scenery.",
        "Explore Edisto Beach State Park, ride a bike, and spend a day by the water.",
        "edisto-beach.webp", getMapSrc("Edisto Beach, SC")),
    new Vacation("Oak Island", "Beach",
        "A North Carolina island destination with sandy shores and a coastal lighthouse.",
        "Visit the lighthouse area, go fishing, and relax on the beach.",
        "oak-island.jpg", getMapSrc("Oak Island, NC")),
    new Vacation("Pawleys Island", "Beach",
        "A peaceful South Carolina barrier island with beaches and salt marsh views.",
        "Paddle through the marsh, look for shark teeth, and enjoy a beach picnic.",
        "pawleys-island.jpg", getMapSrc("Pawleys Island, SC"))
];

const modal = document.getElementById("vacation-modal");
const closeButton = document.getElementById("close-modal");
let lastClickedCard = null;

const closeModal = () => {
    modal.classList.add("hide");
    document.getElementById("page-content").inert = false;
    document.body.classList.remove("modal-open");
    document.getElementById("vacation-map").removeAttribute("src");
    if (lastClickedCard) {
        lastClickedCard.focus();
    }
};

const displayVacations = () => {
    const gallery = document.getElementById("vacation-gallery");
    for (const vacation of vacations) {
        gallery.append(vacation.getCard());
    }
};

//close the popup and return to the cards
closeButton.onclick = closeModal;

modal.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
};

document.onkeydown = (event) => {
    if (event.key == "Escape" && !modal.classList.contains("hide")) {
        closeModal();
    }
};

displayVacations();
