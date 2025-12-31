document.addEventListener("DOMContentLoaded", () => {
  const lock = document.getElementById("lock");
  const main = document.getElementById("main");
  const proceedBtn = document.getElementById("proceedBtn");
  const revealBtn = document.getElementById("revealBtn");
  const text = document.getElementById("secretText");

  proceedBtn.addEventListener("click", () => {
    lock.style.display = "none";
    main.classList.remove("hidden");
  });

  revealBtn.addEventListener("click", () => {
    text.style.opacity = "0";
    text.style.transition = "opacity 1.5s ease";
    text.innerHTML = "Accessing private thoughts…";

    setTimeout(() => {
      text.style.opacity = "1";
      text.innerHTML =
        "I don’t know everything this year will bring, but I know how you make me feel — calm in chaos, safe in silence, and certain in moments of doubt. If I’m choosing anything this year, it’s presence, intention, and you… quietly, completely 🖤";
    }, 1800);
  });
});