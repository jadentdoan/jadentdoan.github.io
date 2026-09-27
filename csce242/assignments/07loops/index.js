//load cars into a lane
const loadCars = (numCars, laneId) => {
    const lane = document.getElementById(laneId);
    const colors = ["#6B609E", "#EC896F", "#24C5B1", "#B5E65A", "#390D6A", "#CDEFF7", "#B779C5"];

    for(let i = 0; i < numCars; i++){
        const car = document.createElement("div");
        car.classList.add("car");
        car.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        car.style.left = Math.random() * 100 + "%";
        lane.append(car);
    }
};

//show cars when the page loads
loadCars(3, "top-lane");
loadCars(4, "bottom-lane");