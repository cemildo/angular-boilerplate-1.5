import angular from 'angular';
import Beacon from './beacon/beacon';
import Airport from './airport/airport';
import Contact from './contact/contact';

export default angular.module('components', [
  Contact.name,
  Beacon.name,
  Airport.name,
]);
