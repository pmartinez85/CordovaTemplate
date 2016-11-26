require('bootstrap-sass');

window.$ = window.jquery = require('jquery');  //Així fem les dos coses a
window._ = require('underscore');

    $(document).ready(function(){
        $("#msgid").html(_.capitalize("This is Hello World by JQuery"));
    });