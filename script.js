const slotsDiv = document.getElementById("slots");
const totalSlots = 12;  // total parking slots
let bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || [];

// Create slots
for (let i = 1; i <= totalSlots; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    slot.innerText = "Slot " + i;

    // If slot already booked
    if (bookedSlots.includes(i)) {
        slot.classList.add("booked");
        slot.innerText += " (Booked)";
    }

    // When user clicks on a slot
    slot.addEventListener("click", () => {
        if (!slot.classList.contains("booked")) {
            slot.classList.add("booked");
            slot.innerText += " (Booked)";
            bookedSlots.push(i);
            localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));
        }
    });

    slotsDiv.appendChild(slot);
}
