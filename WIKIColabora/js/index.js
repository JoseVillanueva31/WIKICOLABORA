$(window).scroll(function(){
    var scroll = $(window).scrollTop(); // Corrección: scrollTop() en lugar de scrolltop()
    $("header img").css({
        width: (100 + scroll / 5) + "%" // Ajusta el ancho de la imagen basado en el desplazamiento
    });
});
