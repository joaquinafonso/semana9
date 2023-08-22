document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");

    buttonText.addEventListener("click", function() {
        const inputValue = inputText.value;
        let storedData = JSON.parse(localStorage.getItem("userInputData")) || [];
        storedData.push(inputValue);
        localStorage.setItem("userInputData", JSON.stringify(storedData));
    });
});