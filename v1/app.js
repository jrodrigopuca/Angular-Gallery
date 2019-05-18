(function () {
    
    //Definir mi módulo
    var app = angular.module("myApp", []);
    
    //Definir controlador
    app.controller("myController", ['$http', function ($http) {
        var store = this;      
        
        //En caso de que necesite usar un .json para cargar los datos        
        $http.get('source.json').then(function (data) {
            store.products=data;
        });
    

    }]);

})();

