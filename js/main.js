$(document).ready(function() {
    //Añade el contenido del documento head.html a la etiqueta head
    $('head').load('../head.html');
    //Añade el contenido del documento footer.html a la etiqueta footer
    $('body').load('../body.html');
    //Añade el contenido del documento footer.html a la etiqueta footer
    $('footer').load('../footer.html');
    //Añade el menu contenido en el documento menu.html en aquellas etiquetas header que tengan la clase "menu"
    //$('header[class="menu"]').load('../menu.html');
});