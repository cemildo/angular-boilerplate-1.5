import template from './contact.address.html';
import controller from './contact.address.controller';

const contactAddressComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true,
};

export default contactAddressComponent;
