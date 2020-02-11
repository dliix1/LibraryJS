let korisnik = new Array();
let knjige = new Array();
window.onload = menu();

function menu(){

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

        knjige.push(imeKnjige, brojKnjige);
    }

}


function validacijaZaKreacijuKnjige(){

    for (let i = 0; i < knjige.length; i++){
        if (knjige[i] == imeKnjige){
            alert ("Vec postoji knjiga sa unijetim imenom!")
            return false;

        }

        else if (knjige[i] == brojKnjige){
            alert ("Vec postoji knjiga sa unijetim brojem!")
            return false;

        }

        return true;
    }
    
}


function podizanjeKnjige(){

    let brojRacuna = prompt ("Unesite broj racuna!", " ");
    let brojKnjige = prompt ("Unesite broj knjige!", " ");

    if (validacijaRacunaZaPodizanjeKnjige(brojRacuna) && validacijaKnjigeZaPodizanjeKnjige(brojKnjige)){

        let knjiga;

        for (let i = 0; i < knjige.length; i++){
            if (knjige[i].brojKnjige == brojKnjige){
                knjige[i].statusKnjigeDaLiJeIzdataIliNe = true;
                knjiga = knjige[i]
            }
        }


        for (let i = 0; i < korisnik.length; i++){
            if (korisnik[i].brojRacuna == brojRacuna){
                korisnik[i].knjiga.push(knjiga)
            }
        }

        alert ("Uspjesno ste podigli knjigu!")
    }
}


function validacijaRacunaZaPodizanjeKnjige(){
    
    let brojRacuna = prompt ("Unesite broj racuna!", " ");

    for (let i = 0; i < korisnik.length; i++){
        if (korisnik[i].brojRacuna == brojRacuna){
            return true;
        }

        alert ("Unijeti racun ne postoji!");
        return false;
    }
}


function validacijaKnjigeZaPodizanjeKnjige(){

    let brojKnjige = prompt ("Unesite broj knjige!", " ");

    for (let i = 0; i < knjige.length; i++){
        if (knjige[i].brojKnjige == brojKnjige){
            return true;
        }

    }

    alert ("Unijeta knjiga ne postoji!");
    return false;

    for (let i = 0; i < knjige.length; i++){
        if (knjige[i].brojKnjige == brojKnjige){
            if (knjige[i].statusKnjigeDaLiJeIzdataIliNe == true){
                alert ("Knjiga je podignuta!");
                return false;
            }
        }
    }
}


function vracanjeKnjige(){

}


