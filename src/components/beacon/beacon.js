import angular from 'angular';
import uiRouter from 'angular-ui-router';
import beaconComponent from './beacon.component';
import BeaconEdit from './beacon.edit';
import Search from '../../common/search/search';
import './beacon.scss';


const beaconModule = angular.module('beacon', [
  uiRouter,
  Search.name,
  BeaconEdit.name,
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('beacon', {
      url: '/',
      template: '<beacon></beacon>',
    });
})

.component('beacon', beaconComponent);

export default beaconModule;
