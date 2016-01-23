(function () {
    
    //Definir mi módulo
    var app = angular.module("myApp", []);
    
    //Definir controlador
    app.controller("myController", function () {
        this.products= games;
    });
    
    //Datos para cargar
    var games=[{
        name:"Nyan JT",
        description:".."
    },
    {
        name:"Protege",
        description:".."
    },
    {
        name:"RockSeason",
        description:".."
    },
    {
        name:"PongPC",
        description:".."
    }];
    /*
    */

})();

