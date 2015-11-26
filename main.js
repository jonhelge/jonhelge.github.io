document.addEventListener('WebComponentsReady', function() {

  var batteryDevice = document.querySelector('platinum-bluetooth-device');
  var button = document.querySelector('paper-button');

  button.addEventListener('click', function() {
    console.log('Requesting a bluetooth device advertising a battery service...');
    
    batteryDevice.request().then(function(device) {
      console.log('A bluetooth device has been found!');
      console.log('Device Name: ' + device.name);
    })
    .catch(function(error) {
      console.error('Argh! ', error);
    });
  });
});