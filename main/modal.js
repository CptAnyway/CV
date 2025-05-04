function showModalAfterDelay(delayMs = 6000) {
    setTimeout(() => {
        const modal = document.getElementById("feedbackModal");
        
        if (!modal) return;

        modal.style.display = "block";

        const closeBtn = document.getElementById("closeModal");

        closeBtn?.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }, delayMs);
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("feedbackModal");
    const delay = parseInt(modal?.dataset.delay || "6000");
    showModalAfterDelay(delay);
});