// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/nosotros', {
            templateUrl : 'pages/nosotros.html',
            controller  : 'weController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
        .when('/servicios', {
            templateUrl : 'pages/servicios.html',
            controller  : 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('weController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});