/*

Denna API innehåller ett gäng öppna APIs (dock inte alla gratis):
https://github.com/davemachado/public-api

Lista ut hur man får tag på alla APIs som finns registrerade och
som inte kräver någon form av authenticering.
Lista dem på webbsidan på ett elegant sätt.
Se bilden som exempel.

*/
(async () => {
    const request = new Request ("https://api.publicapis.org/entries");
    const response = await fetch(request);
    const APIs = await response.json();
    console.log(APIs.entries);
    APIs.entries
        .filter(api => api.Auth === "")
        .forEach(show_entry);
})();

function show_entry (entry) {
    console.log(entry);
    const div = document.createElement("div");
    document.getElementById("wrapper").append(div);
    div.classList.add("entry");
    div.innerHTML = `
    <a href="${entry.Link}" class="title">${entry.API}</a>
    <div class="description">${entry.Description}</div>
    <div class="category">${entry.Category}</div>
    `;
}
