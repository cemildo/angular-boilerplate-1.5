import template from './contact.form.html';
import controller from './contact.form.controller';

const contactFormComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true,
};

export default contactFormComponent;
