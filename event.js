function openForm() {
    document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("formPopup").style.display = "none";
}

function submitForm() {
    let name = document.getElementById("name").value;
    let team = document.getElementById("team").value;
    let email = document.getElementById("email").value;

    if (name && team && email) {
        alert("✅ Registered Successfully!");
        closeForm();
    } else {
        alert("❌ Please fill all fields");
    }
}
