if (window.innerWidth < 1407 || window.innerHeight < 531) {
    const mobilePrompt = confirm("this website is not optimized for mobile yet. click 'Cancel' to exit and visit my Twitter or 'OK' if you still want to continue (masochists only)");
    if (!mobilePrompt) {
        window.location.href = "https://twitter.com/FrancescoRosi27";
    };
};
window.addEventListener("mousemove", e => {
    const dot = document.querySelector("#dot"),
          arrow = document.querySelector("#arrow"),
          interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;

    if (interacting) {
        arrow.classList.remove("hidden");
    } else {
        arrow.classList.add("hidden");
    };
    dot.style.transform = `scale(${interacting ? "4" : "1"})`;
    dot.style.left = `${e.clientX - dot.offsetWidth / 2}px`;
    dot.style.top = `${e.clientY - dot.offsetHeight / 2}px`;
});