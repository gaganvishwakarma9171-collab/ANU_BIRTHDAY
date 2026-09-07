function openSurprise() {

    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

}


function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-10px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.borderRadius = "2px";

        confetti.style.background =
            `hsl(${Math.random() * 360}, 90%, 65%)`;

        document.body.appendChild(confetti);


        const duration =
            2000 + Math.random() * 3000;


        confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        `translateY(110vh)
                         translateX(${Math.random() * 300 - 150}px)
                         rotate(720deg)`
                }
            ],

            {
                duration: duration,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(() => {
            confetti.remove();
        }, duration);

    }

}


window.addEventListener("load", () => {

    setTimeout(() => {
        createConfetti();
    }, 800);

});
