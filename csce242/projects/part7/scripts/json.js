const base_url = "https://jadentdoan.github.io/csce242/projects/part7/";

const getCards = async() => {
    const url = `${base_url}cards.json`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Couldn't load cards");
    }

    return response.json();
};

const showCards = async() => {
    const result = document.getElementById("vault-result");

    try {
        const cards = await getCards();

        cards.forEach((card)=>{
            document.querySelector(`#${card.group} .gallery`).append(displayCard(card));
        });

        result.innerHTML = "";
    } catch (error) {
        result.innerHTML = "Sorry, we couldn't load the cards. Please try again later.";
    }
};

const displayCard = (card) => {
    const section = document.createElement("section");
    section.classList.add("gallery-card");

    const img = document.createElement("img");
    img.src = card.img;
    img.alt = card.title;
    section.append(img);

    const h3 = document.createElement("h3");
    h3.innerHTML = card.title;
    section.append(h3);

    const p = document.createElement("p");
    p.innerHTML = `${card.collection}<br>${card.sport}<br>${card.details}`;
    section.append(p);

    if(card.preview != ""){
        const a = document.createElement("a");
        a.href = card.preview;
        a.innerHTML = "View card ↗";
        a.classList.add("text-link");
        section.append(a);
    }

    return section;
};

showCards();
