import template from './beacon.html';
import controller from './beacon.controller';

const beaconComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'bc',
  bindToController: true,
};


export default beaconComponent;
