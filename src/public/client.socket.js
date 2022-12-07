const socket = io();
const messageForm = document.getElementById("messageForm");
const mailInput = document.getElementById("mailInput");
const messageInput = document.getElementById("messageInput");
const messagesPool = document.getElementById("messagesPool");
const today = new Date();
const now = today.toLocaleTimeString('en-US');

const sendMessage = (messageInfo) => {
  socket.emit("client:message", messageInfo);
};

const renderMessage = (messagesData) => {
  const html = messagesData.map((messageInfo) => {
    return `<div class="toast toast-demo fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header justify-content-between">
      <strong style="color: blue;">${messageInfo.username}</strong>       
      <small style="color: brown;">${now}</small>         
    </div>
    <div style="color: green;" class="toast-body">
    <i>${messageInfo.message}</i>
    </div>
  </div>`;
  });

  messagesPool.innerHTML = html.join(" ");
};

const submitHandler = (event) => {
  event.preventDefault();

  const messageInfo = {
    username: mailInput.value,
    message: messageInput.value,
  };

  sendMessage(messageInfo);

  messageInput.value = "";
  mailInput.readOnly = true;
};

messageForm.addEventListener("submit", submitHandler);

socket.on("server:message", renderMessage);
