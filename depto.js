    var btnmenu = $('#btnOculto');
    var clasemenu = $('#menuOculto');
    var flecha = $('#flecha')

    btnmenu.on('click', function() {
      clasemenu.slideToggle();
      flecha.toggleClass('fa fa-angle-down');
      flecha.toggleClass('fa fa-angle-up');
    });

    //------------------------------------------------------------------
    //efecto anclas (ir a una parte de la pagina)

    //offset.top devuelve su posicion en la pagina
    var acercaDe = $('#acerca-de').offset().top,
      galeria = $('#galeria').offset().top,
      ubicacion = $('#ubicacion').offset().top;
      contacto = $('#contacto').offset().top;

    $('#btnAcercaDe').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: acercaDe
      }, 500)
    });

    $('#btnAcercaDe2').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: acercaDe
      }, 500)
    });

    $('#btnContacto').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contacto
      }, 500)
    });

    $('#btnContacto2').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contacto
      }, 500)
    });

    $('#btnGaleria').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: galeria
      }, 500)
    });

    $('#btnMapa').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: ubicacion
      }, 500)
    });

    $('#btnGaleria2').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: galeria
      }, 500)
    });

    $('#btnMapa2').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: ubicacion
      }, 500)
    });

//---------------------------------------------
//popup
$('.foto').click(function(e) {
  e.preventDefault();
  $('#popup').fadeIn('slow');
  $('.popup-overlay').fadeIn('slow');
  $('.popup-overlay').height($('body').height());
  $('.content-popup').css({
    'marginTop': $(window).scrollTop() + 120 + 'px',
    color: 'white'
  });

  $('.imagen').html($(this).html());
  foto = $(this);

  if(foto.prev().length != 1){
    $('#prev').css('visibility', 'hidden');
  } else {
    $('#prev').css('visibility', 'visible');
  }

  if(foto.next().length != 1){
    $('#next').css('visibility', 'hidden');
  } else {
    $('#next').css('visibility', 'visible');
  }

  // //para disable el scroll
  // $('html, body').css({
  //   overflow: 'hidden',
  //   height: '100%'
  // });
  return false;
});



$('#prev').click(function(e) {
  e.preventDefault();
  $('.imagen').html($(foto).prev().html());
  foto = $(foto).prev();

  if(foto.prev().length == 0){
    $('#prev').css('visibility', 'hidden');
  } else {
    $('#prev').css('visibility', 'visible');
  }

  if(foto.next().length == 0){
    $('#next').css('visibility', 'hidden');
  } else {
    $('#next').css('visibility', 'visible');
  }
});

$('#next').click(function(e) {
  e.preventDefault();
  $('.imagen').html($(foto).next().html());
  foto = $(foto).next();

  if(foto.prev().length == 0){
    $('#prev').css('visibility', 'hidden');
  } else {
    $('#prev').css('visibility', 'visible');
  }

  if(foto.next().length == 0){
    $('#next').css('visibility', 'hidden');
  } else {
    $('#next').css('visibility', 'visible');
  }
});

$('#close').click(function(e) {
  e.preventDefault();
  $('#popup').fadeOut('slow');
  $('.popup-overlay').fadeOut('slow');

  // //para reenable el scroll
  // $('html, body').css({
  //   overflow: 'auto',
  //   height: 'auto'
  // });

  return false;
});

$('.popup-overlay').click(function(e) {
  e.preventDefault();
  $('#popup').fadeOut('slow');
  $('.popup-overlay').fadeOut('slow');
});

$('.imagen').click(function(e) {
  e.stopPropagation();
});


//funcion google maps
function initMap() {
  var uluru = {
    lat: -32.887501,
    lng: -68.826583
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });
  // var marker = new google.maps.Marker({
  //   position: uluru,
  //   map: map
  // });
  var marker2 = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: uluru,
    radius: 500
  });
}
