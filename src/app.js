import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import Services from './services/module';
import './styles.scss';

angular.module('myApp', [
  uiRouter,
  Common.name,
  Components.name,
  Services.name,
])
.directive('app', AppComponent);

