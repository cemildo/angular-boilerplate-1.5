import angular from 'angular';
import uiRouter from 'angular-ui-router';
import beaconEditComponent from './beacon.edit.component';
import './beacon.scss';


const beaconEditModule = angular.module('beaconEdit', [
  uiRouter,
])

.config(($stateProvider) => {
  $stateProvider
    .state('beaconedit', {
      url: '/edit/:id',
      template: '<edit></edit>',
    });
})

.component('edit', beaconEditComponent);

export default beaconEditModule;
