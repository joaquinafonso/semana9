document.addEventListener("DOMContentLoaded", function() {
    const dataElement = document.getElementById("data");
    const storedData = JSON.parse(localStorage.getItem("userInputData"));

    if (storedData && storedData.length > 0) {
        dataElement.textContent = storedData.join(", ");
    }
});