const socket = io();
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messagesPool = document.getElementById("messagesPool");
const usernameInput = document.getElementById("usernameInput");

const sendMessage = (msgInfo) => {
  socket.emit("client: message", msgInfo);
};

const renderMessage = (msgsData) => {
  const html = msgsData
    .map((msgInfo) => {
      return `<div>
        <strong>${msgInfo.username}</strong>
        <em>${msgInfo.message}</em>
        </div>`;
    })
    .join(" ");

    messagesPool.innerHTML = html
};

const submitHandler = (event) => {
    event.preventDefault()

    const msgInfo = {username: usernameInput.value, message: messageInput.value,}

    sendMessage(msgInfo)

    messageInput.value = ""
    usernameInput.readOnly = true
}

messageForm.addEventListener('submit',submitHandler)

socket.on("server:message", renderMessage)
