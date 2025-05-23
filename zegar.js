function updateMessage() {
    const now = new Date();
    const data = now.toLocaleDateString();
    const godzina = now.toLocaleTimeString();
    document.getElementById('zegar').textContent = `Dziś: ${data} | Godzina: ${godzina}`;
}
setInterval(updateMessage, 1000);
updateMessage();
