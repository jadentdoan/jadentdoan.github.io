//Shows feedback without leaving the page
const form = document.getElementById("contact-form");
const result = document.getElementById("result");
let resultTimeout;

form.querySelectorAll("[required]").forEach((field)=>{
    field.oninvalid = () => {
        clearTimeout(resultTimeout);
        result.innerHTML = "Please fill out the required fields and enter a valid email.";
    };
});

form.onsubmit = async(e) => {
    e.preventDefault();
    clearTimeout(resultTimeout);

    const formData = new FormData(e.target);
    formData.append("access_key", "d8041c84-adb7-46d7-819d-d9268b19847d");
    formData.append("subject", "VAULTED by JD Contact Form");
    const button = document.getElementById("btn-submit");
    button.disabled = true;
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if(response.ok && data.success){
            result.innerHTML = "Message sent! Thanks for reaching out.";
            form.reset();
            resultTimeout = setTimeout(()=>{
                result.innerHTML = "";
            }, 1500);
        } else {
            result.textContent = "Error: " + (data.message || "Please try again.");
        }
    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message. Please try again.";
    } finally {
        button.disabled = false;
    }
};
