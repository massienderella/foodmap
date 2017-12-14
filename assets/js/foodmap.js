//Vista splash
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(700);
   }, 3500);
});

//Modal
$(document).ready(function(){
    $('.modal').modal();
  });

//Inicializador de input
$(document).ready(function() {
    $('select').material_select();
  });

//Función para cambiar las imágenes dependiendo de la selección
var cont = $('#container');
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
   
      if( selection === "china") {
      cont.html('<img class="responsive-img waves-effect waves-light modal-trigger" href="#modal1" src="assets/img/china1.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal2" src="assets/img/china2.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal3" src="assets/img/china3.jpg"/>');
      }
      if( selection === "coreana") {
      cont.html('<img class="responsive-img waves-effect waves-light modal-trigger" href="#modal4" src="assets/img/corea1.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal5" src="assets/img/corea2.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal6" src="assets/img/corea3.jpg"/>');
      }
      if( selection === "arabe") {
      cont.html('<img class="responsive-img waves-effect waves-light modal-trigger" href="#modal7" src="assets/img/arabe1.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal8" src="assets/img/arabe2.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal9" src="assets/img/arabe3.jpg"/>');
      }
      if( selection === "peruana") {
      cont.html('<img class="responsive-img waves-effect waves-light modal-trigger" href="#modal10" src="assets/img/peru1.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal11" src="assets/img/peru2.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal12" src="assets/img/peru3.jpg"/>');
      }
      if( selection === "chilena") {
      cont.html('<img class="responsive-img waves-effect waves-light modal-trigger" href="#modal13" src="assets/img/chile1.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal14" src="assets/img/chile2.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal15" src="assets/img/chile3.jpg"/>');
      }
      if( selection === "japonesa") {
      cont.html('<img class="responsive-img waves-effect waves-light modal-trigger" href="#modal16" src="assets/img/japon1.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal17" src="assets/img/japon2.jpg"/><img class="responsive-img waves-effect waves-light modal-trigger" href="#modal18" src="assets/img/japon3.jpg"/>');
      }
});

//Acción al hover (solo funciona en versión de escritorio)
$('#container').mouseover(function(){
    $('img').css('opacity','0.5')
    });

$('#container').mouseout(function(){
    $('img').css('opacity', 'initial');
    });



