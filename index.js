
//ESERCIZI IN JS



// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function modificaTitolo(titolo){
    let tagtitolo =  document.querySelector("h1")

    tagtitolo.innerText = titolo;
       
}
 //modificaTitolo("Sito ecommerce")


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function modificaColorePagina(){
    let body = document.querySelector("body");
   body.style.background = "red";
}
// modificaColorePagina() 

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

//utilizzando un id al P del footer modifico solo l'indirizzo
function modificaIndirizzo() {

    let footer = document.querySelector("#indirizzo");
    footer.innerText = "via nazionale 12,Roma"
}
modificaIndirizzo();

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

// ho utilizzato un loop 
function modificaClasse (){
    let tabelle = document.querySelectorAll("td")
    for ( i=0; i < tabelle.length; i++){
        tabelle[i].classList.add("colore")
    }
}
//modificaClasse();

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function modificaImmagine() {
    let immagini = document.querySelectorAll(".image");
    for (let i = 0; i < immagini.length; i++) {
      const singleImg = immagini[i];
      singleImg.classList.toggle('modificaImmagine'); 
    }
  }
modificaImmagine();

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


  