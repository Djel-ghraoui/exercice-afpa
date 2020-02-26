
    // Créer un script qui demande successivement à l'utilisateur son nom puis son prénom.
    // La page demande ensuite à l'utilisateur s'il est un homme ou une femme.
    // Enfin, la page affiche les informations sur l'utilisateur.
    let n;
    let p;
    n=window.prompt("Entrez votre nom");
    p=window.prompt("Entrez votre prénom");
    if (confirm("Etes-vous un homme?")==true) {
        alert("Bonjour Monsieur "+n +""+p);
    }   
    else {
        alert("Bonjour Madame "+n +""+p);
    }