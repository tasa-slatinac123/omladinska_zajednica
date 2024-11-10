function prikaziDetalje(id) {
    var detaljiDiv = document.getElementById(id);
    if (detaljiDiv.style.display === 'none') {
        detaljiDiv.style.display = 'block';
    } else {
        detaljiDiv.style.display = 'none';
    }
}

function dodajPosao() {
    var forma = document.getElementById('novi-posao-forma');
    if (forma.style.display === 'none') {
        forma.style.display = 'block';
    } else {
        forma.style.display = 'none';
    }
}

function sacuvajPosao() {
    var naziv = document.getElementById('naziv-posla').value;
    var opis = document.getElementById('opis-posla').value;
   
    if (naziv && opis) {
        console.log("Novi posao dodan: " + naziv + " - " + opis);
        alert("Novi posao je uspešno dodan!");
       
    
        document.getElementById('posao-forma').reset();
        dodajPosao(); 
    } else {
        alert("Molimo popunite sve podatke.");
    }
}