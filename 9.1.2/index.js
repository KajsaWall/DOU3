/*

Här finns all info om hur API:n fungerar:
https://api.artic.edu/docs/#introduction

Det tar en liten stund att förstå hur man får tag på bilderna men allt står i avsnitten:
- Quickstart (hur ska URL:et skrivas. GET-parameters page och limit)
- Images (hur får man tag på webbadressen till bilderna)


Denna server accepterar åtminstone 18 stycken requests parallellt, så ni måste 
hämta alla 18 bilder parallellt.

*/


document.querySelector("button").addEventListener("click", new_page);
function new_page (event) {

  let page = parseInt(document.getElementById("page_number").textContent);
  if (!page) {
    page = 0;
  }
  get_works(page + 1);

}

async function get_works (page, limit = 18) {
  let images_left = limit;

  // Clear all previous images
  document.querySelectorAll("#wrapper .image").forEach(e => e.remove());

  // Feedback
    document.getElementById("page_number").textContent = "--";
    document.querySelector("button").setAttribute("disable", true);
    document.getElementById("feedback").textContent = "Getting works..."
  // Counter
    const request = new Request (`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`);
    const response = await fetch(request);
    const work = await response.json();
    let works = work.data;
    works
        .forEach(painting => {
            let div = document.createElement("div");
            div.classList.add("image");
            let imageID = painting.image_id;
            div.style.backgroundImage = `url(https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg)`;
            document.querySelector("#wrapper").insertBefore(div, document.querySelector("footer"));
        
            // Are we done?
            images_left--;
                if(images_left === 0) {
                    document.getElementById("page_number").textContent = page;
                    document.querySelector("button").removeAttribute("disable");
                    document.getElementById("feedback").textContent = "Idle";
                }
            });
}