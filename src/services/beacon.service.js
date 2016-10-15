import services from './module';

services.factory('BeaconService', BeaconService);


function BeaconService() {
  const service = {
    getById,
    getBeacons,
    beacons,
  };

  function getById(id) {
    return this.beacons().filter((elm) => elm.id.toString() === id.toString());
  }
  function getBeacons() {
    return this.beacons();
  }

  function beacons() {
    return [
      { id: 0, isim: 'Cemil', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 1, isim: 'Dogan', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 2, isim: 'Esma', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 3, isim: 'Salih', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 4, isim: 'Mehmet', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 5, isim: 'Cemil', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 6, isim: 'Husnu', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 7, isim: 'TV', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 8, isim: 'Hoop', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
      { id: 9, isim: 'Ayse', ev: 'wetzikon', adres: 'dorfstr', cep: '07863543323' },
    ];
  }

  return service;
}
