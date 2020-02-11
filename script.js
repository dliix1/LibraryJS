let korisnik = new Array();
let knjiga = new Array();
window.onload = menu();

function unos(){

    let unosKorisnika = document.getElementById("unos").value;

    switch (unosKorisnika) {
		case "1":
			kreiranjeRacuna();
			break;

		case "2":
			kreiranjeKnjige();
			break;

		case "3":
			podizanjeKnjige();
			break;

		case "4":
			vracanjeKnjige();
			break;

		case "5":
			ispisRacuna();
			break;
}

function kreiranjeRacuna(){

    let imeRacuna = prompt("Unesite ime racuna:", " ");
    let brojRacuna = prompt ("Unesite broj racuna:", " ");

    if (validacijaZaKreacijuRacuna(imeRacuna, brojRacuna)){
        alert("Racun je uspjesno napravljen!");

        korisnik.push(imeRacuna, brojRacuna);

    }
    
}

function validacijaZaKreacijuRacuna(){

    for (let i = 0; i < korisnik.length(); i++){
        if (korisnik[i] == imeRacuna){
            alert ("Vec postoji racun sa unesenim imenom!")
            return false;

        }
        else if(korisnik[i] == brojRacuna)
        alert ("Vec postoji racun sa unesenim brojem!")
        return false;

    }
    return true;

}

function kreiranjeKnjige(){

    let imeKnjige = prompt ("Unesite ime knjige:", " ");
    let brojKnjige = prompt ("Unesite broj knjige:", " ")
    let statusKnjigeDaLiJeIzdataIliNe = false;

    if (validacijaZaKreacijuKnjige(imeKnjige, brojKnjige)){
        alert("Knjiga je uspjesno napravljena!");

        knjiga.push(imeKnjige, brojKnjige);
    }

}

function validacijaZaKreacijuKnjige(){

    for (let i = 0; i < knjiga.length; i++){
        if (knjiga[i] == imeKnjige){
            alert ("Vec postoji knjiga sa unijetim imenom!")
            return false;

        }

        else if (knjiga[i] == brojKnjige){
            alert ("Vec postoji knjiga sa unijetim brojem!")
            return false;

        }

        return true;
    }
    
}

function podizanjeKnjige(){

    let brojRacuna = prompt ("Unesite broj racuna!", " ");
    let brojKnjige = prompt ("Unesite broj knjige!", " ");

    if (brojRacuna == null){
        alert ("Ne postoji racun sa unijetim brojem!")
    }

}

function validacijaRacunaZaPodizanjeKnjige(){
    
    let brojRacuna = prompt ("Unesite broj racuna!", " ");

    for (let i = 0; i < korisnik.length; i++){
        if (korisnik[i].brojRacuna == brojRacuna){
            return true;
        }

        return false;
    }
}

function validacijaKnjigeZaPodizanjeKnjige(){

    let brojKnjige = prompt ("Unesite broj knjige!", " ");

    for (let i = 0; i < knjiga.length; i++){
        if (knjiga[i].brojKnjige == brojKnjige){
            return true;
        }

        return false;
    }
}
}