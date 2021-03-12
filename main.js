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

btnPrev.click(
  function(){
    var imgActive = $(".images img.active");
    imgActive.removeClass("active");
      if (imgActive.hasClass("first") == true) {
        $(".images img.last").addClass("active");
      } else {
        imgActive.prev().addClass("active");
        }
    }

);

btnNext.click(
  function(){
  var imgActive = $(".images img.active");
  imgActive.removeClass("active");
    if (imgActive.hasClass("last") == true) {
      $(".images img.first").addClass("active");
    } else {
      imgActive.next().addClass("active");
      }
  }
);



});
