// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Opinion page is loaded!");

    const buttons = document.querySelectorAll(".poll button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert(`You voted for: ${button.innerText}`);
        });
    });
});
