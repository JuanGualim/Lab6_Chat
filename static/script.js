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
    const message = userInput.value
    if (message.trim() !== "") {
        postMessage({
            user: "Juan Gualim",
            text: message
        })
        userInput.value = ""
    }
})
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // 👈 evita salto de línea
        sendButton.click();
    }
});