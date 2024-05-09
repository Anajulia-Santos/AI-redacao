// Function to send user message
function enviarMensagem() {
  const mensagemUsuario = document.getElementById("input-field").value.trim();
  if (mensagemUsuario) {
    exibirMensagemUsuario(mensagemUsuario);
    processarMensagemUsuario(mensagemUsuario);

    // Clear the input field after sending the message
    document.getElementById("input-field").value = "";



    // Hide the "Como posso ajudá-lo hoje?" text
    document.getElementById("box1").style.display = "none";
  }
}

// Function to display user message in chat
function exibirMensagemUsuario(mensagem) {
  const chatLog = document.getElementById("chat-log");
  const mensagemHTML = `
      <div class="mensagem mensagem-usuario">
          <img src="perfil.png" alt="User Icon" width="20" height="20">
          <p>${mensagem}</p>
      </div>
  `;
  chatLog.innerHTML += mensagemHTML;
}

// Function to process user message and display chatbot response
async function processarMensagemUsuario(mensagem) {

  const chatLog = document.getElementById("chat-log");

  const req = await fetch("http://10.111.9.68:3000/ia", {
    method: 'POST',
    body: JSON.stringify({ redacao: mensagem }),
    headers: { "content-type": "application/json" },

  })
  const json = await req.json()
  if (req.status == 200) {
    // console.log(json.msg)
    const mensagemHTML = `
    <div class="mensagem mensagem-chatbot">
        <img src="logo.png" alt="IA Icon" width="20" height="20">
        <p>${json.msg}</p>
    </div>
`;
    chatLog.innerHTML += mensagemHTML;

  }
};
