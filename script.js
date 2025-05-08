//Fonction pour la recherche:

function searchKeyword() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const elements = document.querySelectorAll("p, h1, h2, h3");

    if (input === "") {
        alert("Entrez un mot à chercher.");
        return;
    }

    let found = false;
    let firstMatchScrolled = false;

    elements.forEach(element => {
        element.innerHTML = element.textContent; // Reset le contenu pour enlever les anciens <mark>
        const text = element.textContent;
        const lowerText = text.toLowerCase();

        if (lowerText.includes(input)) {
            found = true;

            // Surligner le texte
            const regex = new RegExp(`(${input})`, "gi");
            element.innerHTML = text.replace(regex, '<mark>$1</mark>'); 

            // Scroll vers le premier match seulement
            if (!firstMatchScrolled) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                firstMatchScrolled = true;
            }
            setTimeout(() => { element.innerHTML = element.textContent;} , 5000 )
        }
    });

    if (!found) {
        alert("Aucun résultat trouvé.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleMenuButton');
    const menu = document.querySelector('.menu');

    if (button && menu) {
        button.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    }
});
