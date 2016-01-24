(function () {
    
    //Definir mi módulo
    var app = angular.module("myApp",[]);
    
    //Definir controlador
    /*
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
    */

    app.controller("myController", ['$http', function ($http) {
        var store = this;
        store.products = [{"name":"h"},{"name":"hj"}];
        
        $http.get('source.json').success(function (data) {
           /* store.products = data;*/
           store.products=data;
        });
        
    }]);

})();

