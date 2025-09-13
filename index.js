var options = {
    strings: ["Frontend Developer", "Student", "Web Developer"], // Texts to type
    typeSpeed: 100,      // Typing speed
    backSpeed: 25,       // Backspacing speed
    backDelay: 1000,     // Delay before backspacing
    startDelay: 500,     // Delay before typing starts
    loop: true,          // Loop animation
    showCursor: true     // Show blinking cursor
};

// Initialize Typed.js
var typed = new Typed("#typed-output", options);



function updateDateTime() {
  const now = new Date();

  // Format date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("live-date").textContent = now.toLocaleDateString("en-US", options);

  // Format time
  document.getElementById("live-time").textContent = now.toLocaleTimeString("en-US", { hour12: true });
}

// Update every second
setInterval(updateDateTime, 1000);

// Run once at start
updateDateTime();

