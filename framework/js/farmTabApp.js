/*jslint white:true*/
/*global angular*/

var farmApp = angular.module("farmApp",["ngRoute"]);                                                        //An Angular module is declared

farmApp.config(["$routeProvider", function($routeProvider) {                                                // configuration of the routing through declare
    "use strict";
    $routeProvider
        .when("/whatsfarmtab", {                                                                             //when the user clicked on the link
        templateUrl : "templates/template_whatisFarmTab.html",                                                        //it will show the template in the shell page from this location
        controller : "farmCtrl"});                                                                          //The controller named farmCtrl is assigned to the template
    
     $routeProvider
        .when("/Contact", {                                                                             //when the user clicked on the link
        templateUrl : "templates/template_contact.html",                                                        //it will show the template in the shell page from this location
        controller : "farmCtrl"});                                                                          //The controller named farmCtrl is assigned to the template
    $routeProvider
        .when("/About", {                                                                             //when the user clicked on the link
        templateUrl : "templates/template_about.html",                                                        //it will show the template in the shell page from this location
        controller : "farmCtrl"});                                                                          //The controller named farmCtrl is assigned to the template
    $routeProvider
        .when("/Promotion", {                                                                             //when the user clicked on the link
        templateUrl : "templates/template_promotions.html",                                                        //it will show the template in the shell page from this location
        controller : "farmCtrl"});                                                                          //The controller named farmCtrl is assigned to the template
    $routeProvider
        .when("/Catalogue", {                                                                             //when the user clicked on the link
        templateUrl : "templates/template_catalogue.html",                                                        //it will show the template in the shell page from this location
        controller : "farmCtrl"});                                                                          //The controller named farmCtrl is assigned to the template
    $routeProvider
        .when("/SignUp", {                                                                             //when the user clicked on the link
        templateUrl : "templates/template_signup.html",                                                        //it will show the template in the shell page from this location
        controller : "farmCtrl"});                                                                          //The controller named farmCtrl is assigned to the template
}]);

farmApp.controller("farmCtrl", function($scope, $routeParams){
    "use strict";
    
});