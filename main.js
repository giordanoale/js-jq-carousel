// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS

$(function() {

var btnPrev = $(".prev");
var btnNext = $(".next");
var navBullet = $(".fa-circle");

//Questa funzione serve a passare all'immagine precedente
function prevImage() {
  var imgActive = $(".images img.active");
  imgActive.removeClass("active");
    if (imgActive.hasClass("first") == true) {
      $(".images img.last").addClass("active");
    } else {
      imgActive.prev().addClass("active");
      }
  var bltActive = $(".nav i.active");
  bltActive.removeClass("active");
    if (bltActive.hasClass("first") == true) {
      $(".nav i.last").addClass("active");
    } else {
      bltActive.prev().addClass("active");
    }
}

//Questa funzione serve a passare all'immagine successiva
function nextImage(){
  var imgActive = $(".images img.active");
  imgActive.removeClass("active");
    if (imgActive.hasClass("last") == true) {
      $(".images img.first").addClass("active");
    } else {
      imgActive.next().addClass("active");
      }
  var bltActive = $(".nav i.active");
  bltActive.removeClass("active");
    if (bltActive.hasClass("last") == true) {
      $(".nav i.first").addClass("active");
    } else {
      bltActive.next().addClass("active");
    }
}

btnPrev.click(prevImage);
btnNext.click(nextImage);

$(document).keydown(
  function(e) {
    if(e.keyCode == 39) {
        nextImage();
    } else if (e.keyCode == 37) {
        prevImage();
    }
  }
)

// navBullet.click(
//   function() {
//     var bltActive = $(".nav i.active");
//     bltActive.removeClass("active");
//     $(this).addClass("active");
//     var imgActive = $(".images img.active");
//     imgActive.removeClass("active");
//
//   }
// );

});
