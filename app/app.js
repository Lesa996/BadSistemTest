'use strict';
var app = angular.module('myApp', [
  'ngRoute',
  'dndLists'
]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	controller: "MainCtrl",
        templateUrl : "main.html"
    });
});
