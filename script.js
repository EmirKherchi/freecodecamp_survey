
const submit = document.getElementById('signin') ;



submit.addEventListener('click', function(nope){
    
    alert("Désolé le formulaire ne fonctionne pas dans l'instant");
    
    nope.preventDefault(); // empêpch la page d'envoyer le formulaire.

    document.getElementById('title').style.color='red'; // en plus change le titre en rouge

});


