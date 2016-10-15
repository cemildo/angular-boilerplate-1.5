import 'angular-sanitize';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormComponent from './contact.form.component';


require('script!tv4/tv4.js');
require('script!objectpath/lib/ObjectPath');
require('script!angular-schema-form/dist/schema-form');
require('script!angular-schema-form/dist/bootstrap-decorator');
// XXX: regular import do not work!
// import schemaForm from 'angular-schema-form/dist/schema-form';
// import 'angular-schema-form/dist/bootstrap-decorator';

const contactFormModule = angular.module('contactForm', [
  uiRouter,
  'schemaForm',
])

.config(($stateProvider) => {
  $stateProvider
    .state('contact.form', {
      url: '/form',
      template: '<contactform></contactform>',
    });
})

.component('contactform', contactFormComponent);

export default contactFormModule;
