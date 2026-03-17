const getMessages = async () => {
    const response = await fetch("/api/messages");
    const text = await response.text();

    let messages;

    try {
        messages = JSON.parse(text);
    } catch (e) {
        console.log("No es JSON válido:", text);
        return;
    }

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    messages.forEach(message => {
        const li = document.createElement("li");
        if ((message.user || message.author) === "Juan Gualim") {
            li.classList.add("self");
        }
        li.innerHTML = `<strong>${message.author || message.user}:</strong> ${message.text}`;
        chatBox.appendChild(li);
    });
};

const postMessage = async (message) => {
    await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
    })
    getMessages()
};

getMessages()

setInterval(() => {
    getMessages()
}, 5000)

const sendButton = document.getElementById("send-button")
const userInput = document.getElementById("user-input")

sendButton.addEventListener("click", () => {
    const message = userInput.value;

    if (message.trim() === "") return;

    if (message.length > 140) {
        alert("Máximo 140 caracteres");
        return;
    }

    postMessage({
        user: "Juan Gualim",
        text: message
    });

    userInput.value = "";
    charCount.textContent = "0 / 140"; // reset
});
const charCount = document.getElementById("char-count");

userInput.addEventListener("input", () => {
    let text = userInput.value;

    if (text.length > 140) {
        userInput.value = text.substring(0, 140);
    }

    charCount.textContent = `${userInput.value.length} / 140`;
});
if (userInput.value.length >= 120) {
    charCount.style.color = "red";
} else {
    charCount.style.color = "gray";
}
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // 👈 evita salto de línea
        sendButton.click();
    }
});