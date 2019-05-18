# directivas

# ng-app
directiva que dice cual define el elemento prinicipal de la aplicación

# ng-init 
directiva para valores iniciales

# ng-model 
directiva que hace un bind de un control HTML (input, select, textarea).
Otros usos:
    - Validaciones de tipo (numero, email)
    - Estado para los datos de la aplicación (validos, error)
    - clases css
    - bind html elementos a html forms

# ng-bind
directiva para traer datos del modelo, tambien se puede usar el {}

# controladores
controlan los datos de las app de Angular, regularmente son Objetos de JS

# $scope
Es un enlace entre la vista (HTML) y el controlador (JS). Es un objeto de JS que tiene las propiedades y metodos, lo cuales estan disponibles en V y C
V= HTML
M= cualquier dato disponible de la vista
C= funcion la cual puede cambiar/remover/controlar los datos

# $rootScope 
es el scope del ng-app

# filtrado 
se realiza con {{elemento |filtro}}

# Servicios
es una función/objeto que se encuentra limitado por la aplicación.
hay 30 servicios


Estoy aqui
https://www.w3schools.com/angular/angular_services.asp