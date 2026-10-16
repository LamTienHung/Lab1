
/* M1: Drift-Free Countdown */

// Event deadline in UTC (ISO 8601)
const eventDeadline = "2026-12-31T00:00:00Z";

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const deadline = new Date(eventDeadline).getTime();
    const now = Date.now();

    // Calculate remaining time using actual timestamps
    const remaining = Math.max(0, deadline - now);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    if (remaining === 0) {
        countdownElement.textContent = "The event has started!";
        clearInterval(countdownInterval);
        return;
    }

    countdownElement.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Display countdown immediately
updateCountdown();

/* M2: State-Machine Registration Form */

const registrationForm = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");

const FormState = {
    IDLE: "idle",
    SUBMITTING: "submitting",
    SUCCESS: "success",
    ERROR: "error"
};

let currentState = FormState.IDLE;

// Update form interface based on current state
function setFormState(state, message = "") {
    currentState = state;
    formStatus.dataset.state = state;
    if (state === FormState.IDLE) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Register";
        formStatus.textContent = message || "Ready to register.";
    }

    else if (state === FormState.SUBMITTING) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";
        formStatus.textContent = "Processing your registration...";
    }

    else if (state === FormState.SUCCESS) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Register";
        formStatus.textContent = "Registration successful!";
    }

    else if (state === FormState.ERROR) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Try Again";
        formStatus.textContent = message || "Registration failed.";
    }
}

// Simulate sending registration data to a server

function simulateRegistration() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const testMode = new URLSearchParams(
                window.location.search
            ).get("test");

            if (testMode === "error") {
                reject(new Error("Server is temporarily unavailable."));
            } else if (testMode === "success") {
                resolve();
            } else if (Math.random() < 0.8) {
                resolve();
            } else {
                reject(new Error("Server is temporarily unavailable."));
            }
        }, 1500);
    });
}


// Handle registration
registrationForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Prevent duplicate submissions
    if (currentState === FormState.SUBMITTING) {
        return;
    }

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!fullName || !email) {
        setFormState(FormState.ERROR, "Please complete all fields.");
        return;
    }
    if (fullName.length > 100) {
    setFormState(
        FormState.ERROR,
        "Full name must not exceed 100 characters."
    );
    return;
}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    setFormState(FormState.ERROR, "Please enter a valid email address.");
    return;
}
    setFormState(FormState.SUBMITTING);

    try {
        await simulateRegistration();

        setFormState(FormState.SUCCESS);
        registrationForm.reset();

    } catch (error) {
        setFormState(FormState.ERROR, error.message);
    }
});
