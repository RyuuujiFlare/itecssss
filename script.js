document.addEventListener('DOMContentLoaded', () => {
    // Declare variables
    let webWeaver = "web weaver";
    let alchemistOfTheBrowser = "alchemist of the browser";
    let cssCloak = "CSS cloak";
    let javaScriptSpells = "JavaScript spells";
    let debuggingSpectacles = "debugging spectacles";
    let responsiveSea = "responsive sea";
    let seoWhisperer = "SEO whisperer";
    let gitAlchemist = "Git alchemist";
    let webDeveloper = "web developer";


    let sentence1 = "Numer, the " + webWeaver + ", weaves dreams and pearls.";
    let sentence2 = "Numer, the " + alchemistOfTheBrowser + ", conjures pages from thin air.";
    let sentence3 = "Next, Numer dons his " + cssCloak + ", styling elements with flair and grace.";
    let sentence4 = "Numer summons " + javaScriptSpells + ", making interactivity bloom at his will.";
    let sentence5 = "Numer dons his " + debuggingSpectacles + ", chasing glitches through the code's arc.";
    let sentence6 = "Numer sails on the " + responsiveSea + ", adapting layouts with fluidity.";
    let sentence7 = "Numer becomes an " + seoWhisperer + ", crafting pathways to digital wanderers.";
    let sentence8 = "Numer brews commits as a " + gitAlchemist + ", his repository a saga of code reborn.";
    let sentence9 = "Here's to Numer, the " + webDeveloper + ", a poet of pixels, a composer of clicks.";

   
    let contentDiv = document.getElementById("content");


    let odeTitle = document.createElement('h1');
    odeTitle.textContent = 'Ode to the Web Weaver';
    contentDiv.appendChild(odeTitle);


    contentDiv.innerHTML += "<p>" + sentence1 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence2 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence3 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence4 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence5 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence6 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence7 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence8 + "</p>";
    contentDiv.innerHTML += "<p>" + sentence9 + "</p>";
});
