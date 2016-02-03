//var express = require('express');
//var app = express();
//var port = 8000;

//app.listen(port, function(err, res){
//    if(err) {
//        console.log("Server error");
//    }else
//    {
//        console.log("Server started");
//    }
//});

var app = angular.module("sampleApp", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({ redirectTo: '/main' });
}]);


//var app = angular.module("computerApp", ['ngRoute'])

//.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.
//        when('/main', {
//            templateUrl: 'main.html',
//            controller: 'mainCtrl'
//        }).
//        when('/about', {
//            templateUrl: 'about.html',
//            controller: 'aboutCtrl'
//        }).
//        //when('/services', {
//        //    templateUrl: 'services.html',
//        //    controller: 'servicesCtrl'
//        //}).
//        when('/contact', {
//            templateUrl: 'contact.html',
//            controller: 'contactCtrl'
//        }).
//        otherwise({ redirectTo: '/main' });
//}]);