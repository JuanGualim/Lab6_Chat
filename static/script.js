const getMessages = async () => {
    const response = await fetch("/api/messages");
    const messages = await response.json();

    const chatBox = document.getElementById("chat-box")
    chatBox.innerHTML = ""

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i]
        const div = document.createElement("li")
        div.innerHTML = `<strong>${message.author || message.user}:</strong> ${message.text}`
        chatBox.appendChild(div)
    }   
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
            user: "Jorge",
            text: message
        })
        userInput.value = ""
    }
})