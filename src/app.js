import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMoment from 'angular-moment';

import './app/ng-just-calendar';


angular
  .module('ngJustCalendarApp', [
    uiRouter,
    angularMoment,

    'ngJustCalendar'
  ])
  .config(function router($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/app/main/main.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/app/errors/404.html'
      });
  });
