document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello, World!";
    e.target.innerHTML = "Message Shown";
}

