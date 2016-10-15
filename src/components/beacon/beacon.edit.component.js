import template from './beacon.edit.html';
import controller from './beacon.edit.controller';

const beaconEditComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'be',
  bindToController: true,
};

export default beaconEditComponent;
