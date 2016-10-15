import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactComponent from './contact.component';
import Address from './contact.address';
import ContactForm from './contact.form';

const contactModule = angular.module('contact', [
  uiRouter,
  ContactForm.name,
  Address.name,
])

.config(($stateProvider) => {
  $stateProvider
  .state('contact', {
    url: '/contact',
    template: '<contact></contact>',
  });
})

.component('contact', contactComponent);

export default contactModule;
