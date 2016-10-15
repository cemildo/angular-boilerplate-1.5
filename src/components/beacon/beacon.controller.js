import BeaconServices from '../../services/beacon.service';

class BeaconController {
  constructor($state, BeaconService, $http) {
    this.beacons = BeaconService.getBeacons();
    this.showDetails = (id) => $state.go('beaconedit', { id });
    this.$http = $http;

    $http.get('www.google.com', (result) => { console.log(result); });
  }
}

export default BeaconController;
