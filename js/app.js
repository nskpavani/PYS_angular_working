'use strict';
angular.module('yogaStudioApp', ['ngRoute'])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        // $locationProvider.html5Mode(false);
        $routeProvider
            // route for home page
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'NewsController'
            })
            .when('/contactus', {
                templateUrl: 'contactus.html',
                controller: ''
            })
            // route for About Us page
            .when('/aboutus', {
                templateUrl: 'aboutus.html',
                controller: ''
            })
            // route for news page
            .when('/news', {
                templateUrl: 'news.html',
                controller: 'NewsController'
            })
            // route for passes page
            .when('/passes', {
                templateUrl: 'passes.html',
                controller: 'PassesController'
            })
            // route for team page
            .when('/team', {
                templateUrl: 'ourteam.html',
                controller: 'TeamController'
            })
            // route for gallery page
            .when('/gallery', {
                templateUrl: 'gallery.html',
                controller: 'GalleryController'
            })
            // route for testimonial page
            .when('/testimonial', {
                templateUrl: 'testimonial.html',
                controller: 'TestimonyController'
            })
            .when('/description', {
                templateUrl: 'description.html'
            })
            .when('/schedule', {
                templateUrl: 'schedule.html'
            })
            .when('/classes', {
                templateUrl: 'classes.html'
            })
            .when('/workshop', {
                templateUrl: 'workshop.html'
            })
            .when('/corpclasses', {
                templateUrl: 'corpclasses.html'
            })
            .when('/privateclasses', {
                templateUrl: 'privateclasses.html'
            })


            // route for default to home page
            .otherwise('/home')
    });
