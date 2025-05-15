//Barre de recherche:
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

// Affiche le bouton quand on descend dans la page
    window.onscroll = function() {
        const button = document.getElementById("button");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Quand le bouton est cliqué, on défile jusqu'en haut de la page
    var button = document.getElementById("button");
        button.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    // Obtenez le bouton et le menu
    const toggleMenuButton = document.getElementById("toggleMenuButton");
    const menu = document.querySelector(".menu");

    // Ajoutez un gestionnaire d'événement pour cliquer sur le bouton
    toggleMenuButton.addEventListener("click", function() {
        menu.classList.toggle("show"); // Ajouter/retirer la classe "show" pour afficher/masquer le menu
    });