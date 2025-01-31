document.addEventListener("DOMContentLoaded", () => {
    console.log("O aplicativo está carregado!");

    // Exemplo de funcionalidade: mostrar a data e hora atuais
    const p = document.createElement("p");
    p.textContent = "Data e hora: " + new Date().toLocaleString();
    document.body.appendChild(p);
});
