const link = document.querySelector(".hotel-search-button");
const popup = document.querySelector(".search-hotel-form");
const form = document.querySelector(".search-form");
const arrival = popup.querySelector("[name=start-date]");
const departure = popup.querySelector("[name=end-date]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("search-hotel-show");
    arrival.focus();
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("search-hotel-show")) {
            popup.classList.remove("search-hotel-show");
            popup.classList.remove("modal-error");
        }
    }
});

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});
