const slotsContainer = document.getElementById("slots");
const totalSlots = 20;

// Load booked slots from localStorage
let bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || [];

// Create slots
for (let i = 1; i <= totalSlots; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    slot.textContent = i;

    // If already booked, mark as booked
    if (bookedSlots.includes(i)) {
        slot.classList.add("booked");
    }

    // Toggle booking (book/cancel)
    slot.addEventListener("click", () => {
        if (slot.classList.contains("booked")) {
            // Cancel booking
            slot.classList.remove("booked");
            bookedSlots = bookedSlots.filter(num => num !== i);
        } else {
            // Book slot
            slot.classList.add("booked");
            bookedSlots.push(i);
        }
        localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));
    });

    slotsContainer.appendChild(slot);
}

// Reset button functionality
document.getElementById("resetBtn").addEventListener("click", () => {
    localStorage.removeItem("bookedSlots");
    location.reload();
});
