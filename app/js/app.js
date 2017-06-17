angular.module('newApp', ['ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'app/views/index.html',
            controller: 'newController'
        })
        .state('index.page2', {
            url: '/page2',
            templateUrl: 'app/views/page2.html'
        })
        .state('index.page3', {
            url: '/page3',
            templateUrl: 'app/views/page3.html'
        })
        .state('index.page4', {
            url: '/page4',
            templateUrl: 'app/views/page4.html'
        });
    $urlRouterProvider.otherwise('/index/page2');
})
.controller('newController', function($scope) {
    $scope.formData = {};
    $scope.processForm = function() {
        alert('done'); //add here 
    };
    
});

