
function playSound(key, shouldRecord = true) {
    if (shouldRecord) saveBeat(key);
    saveBeat(key);
  const pad = [...document.querySelectorAll(".drum-pad")]
    .find(button => button.dataset.key === key.toLowerCase());

  if (!pad) return;

  // Create a new Audio instance for overlapping sounds
  const audio = new Audio(pad.dataset.sound);

  audio.play().catch(error => {
    console.error("Audio playback failed:", error);
  });

  // Visual feedback
  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 100);
}

// Test audio engine using mouse clicks
document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad.dataset.key);
  });
});

/* M3: Keyboard Navigation */

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();

    // Prevent repeated sound when holding a key
    if (event.repeat) return;

    // Ignore typing in input fields
    if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) {
        return;
    }

    const validKeys = ["a", "s", "d", "f"];

    if (validKeys.includes(key)) {
        console.log("Key pressed:", key);
        playSound(key);
    }
});

/* M4: Beat Recorder */

const recordBtn = document.getElementById("record-btn");
const replayBtn = document.getElementById("replay-btn");
const clearBtn = document.getElementById("clear-btn");
const recordStatus = document.getElementById("record-status");

let isRecording = false;
let recordedBeats = [];
let recordingStartTime = 0;
let replayTimers = [];

function updateStatus(message) {
    recordStatus.textContent = message;
}

recordBtn.addEventListener("click", () => {
    if (!isRecording) {
        // Start a new recording
        recordedBeats = [];
        recordingStartTime = performance.now();
        isRecording = true;
        recordBtn.textContent = "Stop Recording";
        updateStatus("Recording...");
    } else {
        isRecording = false;
        recordBtn.textContent = "Record";
        updateStatus(`Recorded ${recordedBeats.length} beats`);
    }
});

replayBtn.addEventListener("click", () => {
    if (isRecording) {
        updateStatus("Stop recording before replaying");
        return;
    }

    if (recordedBeats.length === 0) {
        updateStatus("No beats recorded");
        return;
    }

    // Cancel previous replay
    replayTimers.forEach(clearTimeout);
    replayTimers = [];

    updateStatus("Replaying...");

    recordedBeats.forEach(beat => {
        const timer = setTimeout(() => {
            playSound(beat.key, false);
        }, beat.time);

        replayTimers.push(timer);
    });

    const lastBeat = recordedBeats[recordedBeats.length - 1];

    replayTimers.push(setTimeout(() => {
        updateStatus("Replay finished");
    }, lastBeat.time + 500));
});

clearBtn.addEventListener("click", () => {
    replayTimers.forEach(clearTimeout);
    replayTimers = [];

    recordedBeats = [];
    isRecording = false;
    recordBtn.textContent = "Record";

    updateStatus("Recording cleared");
});

// Store beats in chronological order (FIFO)
function saveBeat(key) {
    if (!isRecording) return;

    recordedBeats.push({
        key: key,
        time: performance.now() - recordingStartTime
    });

    updateStatus(`Recording... ${recordedBeats.length} beats`);
}
