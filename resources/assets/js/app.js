//Opcio 1 require --> 1 Fitxer en un modul --> En una variable.
//Opció 2 Import

//var pepita = require('pepita');  // Això instal·laria el paquet pepita amb la comanda "npm install pepita"

//var $ = require('jquery');        ---> Es el mateix que: window.$ = require('jquery');




window.$ = window.jquery = require('jquery');  //Així fem les dos coses a
window._ = require('underscore');

//var _ = require('underscore');


    $(document).ready(function(){
        $("#msgid").html(_.capitalize("This is Hello World by JQuery"));
    });

require('bootstrap-sass');

