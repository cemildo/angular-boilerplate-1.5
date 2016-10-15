
class BeaconEditController {
  constructor($stateParams, BeaconService) {
    this.beacon = BeaconService.getById($stateParams.id);
  }
}

export default BeaconEditController;
