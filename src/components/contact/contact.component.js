import template from './contact.html';
import controller from './contact.controller';
import './contact.scss';

const contactComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true,
};

export default contactComponent;
