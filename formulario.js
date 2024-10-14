const btn = document.querySelector('#submit')
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp-broadcasts.postmarkapp.com",
        Username: "888fbf0c-9f46-4227-b9fb-181e0f8a12d7",
        Password: "888fbf0c-9f46-4227-b9fb-181e0f8a12d7",
        To: 'icr0015@alu.medac.es',
        From: "icr0015@alu.medac.es",
        Subject: "Hola",
        Body: "¿Que tal?"
    }).then(
        message => alert(message)
    );

})