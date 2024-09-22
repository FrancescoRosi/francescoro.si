if (matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", e => {
        const dot = document.querySelector("#dot"),
              arrow = document.querySelector("#arrow"),
              interactable = e.target.closest(".interactable"),
              interacting = interactable !== null;
    
        if (interacting) {
            if (interactable.classList.contains("page-link")) {
                arrow.classList.add("rotate");
            };
            arrow.classList.remove("hidden");
        } else {
            arrow.classList.add("hidden");
            arrow.classList.remove("rotate");
        };
    
        dot.animate({
            transform: `scale(${interacting ? 4 : 1})`,
            left: `${e.clientX - dot.offsetWidth / 2}px`,
            top: `${e.clientY - dot.offsetHeight / 2}px`
        }, {
            duration: 1000,
            fill: "forwards"
        })
    });
};

if (location.hash != "" && document.querySelector(`#links[data-page="${location.hash.slice(1)}"]`) != null) {
    document.querySelector(`[data-page="main"]`).classList.remove("visible");
    document.querySelector(`[data-page="main"]`).classList.add("hidden");
    document.querySelector(`[data-page="${location.hash.slice(1)}"]`).classList.add("visible");
};

window.changePage = (page) => {
    if (page === "") {
        page = "main";
    };
    document.body.classList.remove("initial-animation");
    document.querySelector("#links.visible").animate({
        transform: "scale(0.95)",
        opacity: "0.9",
        filter: "blur(5px)"
    }, {
        duration: 150
    });
    setTimeout(() => {
        document.querySelector("#links.visible").classList.add("hidden");
        document.querySelector("#links.visible").classList.remove("visible");
        document.querySelector(`[data-page="${page}"]`).classList.add("visible");
        document.querySelector(`[data-page="${page}"]`).classList.remove("hidden");
        document.querySelector(`[data-page="${page}"]`).animate([{
            transform: "scale(0.95)",
            opacity: "0.9",
            filter: "blur(5px)"
        }, {
            transform: "scale(1)",
            opacity: "1",
            filter: "blur(0)"
        }], {
            duration: 150
        });
    }, 125);
};

window.addEventListener("hashchange", e => {
    changePage(new URL(e.newURL).hash.slice(1));
});

document.querySelectorAll(`a[href^="#"]`).forEach(el => {
    el.addEventListener("click", e => changePage(e.target.getAttribute("href").slice(1)));
});

window.discordLink = () => {
    navigator.clipboard.writeText("francescorosi")
        .then(() => {
            document.querySelector("#discord-username-copied").animate({
                height: "calc(var(--font-size) / 1.75)"
            }, {
                duration: 250,
                easing: "ease-out",
                fill: "forwards"
            });
            document.querySelector("#discord-username-copied").animate({
                height: "0"
            }, {
                duration: 250,
                delay: 5250,
                easing: "ease-out",
                fill: "forwards"
            });
        })
        .catch(() => {
            alert("Copying my Discord username to the clipboard failed, so you'll have to type in it manually. It's 'francescorosi'.")
        });
};