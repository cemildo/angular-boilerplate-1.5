import template from './airport.html';
import controller from './airport.controller';

let AirportComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default AirportComponent;
