//first loop ex
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
        p.classList.add("special");
        p.onclick = () => {
            console.log(`You clicked the ${i}'th element`);
        }

        /*You can put replace those inside lines with this
        loopResult.innerHTML += `<p>$(i+1)</p>
        */
    }
};

//looping through a range
document.getElementById("btn-range").onclick = () => {
    const startText = document.getElementById("txt-start").value;
    const endText = document.getElementById("txt-end").value;
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");

    if(isNaN(startText) || startText < 0 || startText > 5){
        errorStart.innerHTML = "* Invalid";
        errorStart.classList.remove("hidden");
        return;
    }

    if(isNaN(endText) || endText < 0 || endText > 5 || endText < startText){
        errorEnd.innerHTML = "* Invalid";
        errorEnd.classList.remove("hidden");
        return;
    }

    for(let i = parseInt(startText); i < parseInt(endText); i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
};

//first array
document.getElementById("btn-show-toys").onclick = () => {
    
}