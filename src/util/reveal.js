export default function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(r => {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;
        const elementVisible = 45;

        if (elementTop < windowHeight - elementVisible) {
            r.classList.add("active");
        } else {
            r.classList.remove("active");
        }

    });
}
