function posaljitePoruku() {
    var ime = document.getElementById('ime').value;
    var email = document.getElementById('email').value;
    var tema = document.getElementById('tema').value;
    var poruka = document.getElementById('poruka').value;

    if (ime === "" || email === "" || tema === "" || poruka === "") {
        alert("Molimo popunite sva polja.");
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Unesite validnu e-mail adresu.");
        return;
    }

    document.getElementById('kontakt-forma').reset(); 
    document.getElementById('poruka-uspesno').style.display = 'block';
    document.getElementById('poruka-greska').style.display = 'none';
   
    console.log("Poruka poslana: ", ime, email, tema, poruka); 
}