// TIMER (24-hour countdown)
let time = 24 * 60 * 60;

setInterval(() => {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = time % 60;

    document.getElementById("timer").innerText =
        `⏳ Time Left: ${hrs}:${mins}:${secs}`;

    time--;
}, 1000);


// STREAK (stored in browser)
let streak = localStorage.getItem("streak") || 0;
document.getElementById("streak").innerText = `🔥 Streak: ${streak} days`;


// RUN CODE (basic simulation)
function runCode() {
    let code = document.getElementById("code").value;

    try {
        let result = eval(code);
        document.getElementById("output").innerText = result;
    } catch (err) {
        document.getElementById("output").innerText = err;
    }
}


// SUBMIT CODE
function submitCode() {
    let code = document.getElementById("code").value;

    if (code.length > 10) {
        alert("✅ Submitted Successfully!");

        streak++;
        localStorage.setItem("streak", streak);

        document.getElementById("streak").innerText =
            `🔥 Streak: ${streak} days`;
    } else {
        alert("❌ Write proper code before submitting!");
    }
}
