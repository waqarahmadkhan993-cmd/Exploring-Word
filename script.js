
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("open");

    menuBtn.textContent =
        nav.classList.contains("open") ? "×" : "☰";
});

// Close menu after clicking a link
nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        nav.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Destination Search and Filter
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

function filterDestinations() {
    const searchText = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;

    let visibleCount = 0;

    cards.forEach(function(card) {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const cardCategory = card.dataset.category;

        const matchesName = name.includes(searchText);
        const matchesCategory =
            category === "all" || category === cardCategory;

        const show = matchesName && matchesCategory;

        card.hidden = !show;

        if (show) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount > 0;
}

searchBtn.addEventListener("click", filterDestinations);

searchInput.addEventListener("input", filterDestinations);

categoryFilter.addEventListener("change", filterDestinations);

// Booking Button
const bookingButtons = document.querySelectorAll(".book-btn");

bookingButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const place = button.dataset.place;

        alert("Thank you for choosing " + place +
              "! Your booking request is ready.");
    });
});
