import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AirportComponent from './airport.component';

let airportModule = angular.module('airport', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('airport', {
      url: '/airport',
      template: '<airport></airport>'
    });
})

.component('airport', AirportComponent);

export default airportModule;
