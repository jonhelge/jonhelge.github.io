document.addEventListener('WebComponentsReady', function() {

  var batteryDevice = document.querySelector('platinum-bluetooth-device');
  var button = document.querySelector("#GetDevice");
  var batteryLevel = document.querySelector('platinum-bluetooth-characteristic');

  var btnGetHRM  = document.querySelector("#GetHRM");
 
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
  
 

 btnGetHRM.addEventListener('click', function() {
  bluetoothDevice.request().then(function() {
    return batteryLevel.read().then(function(value) {
      var data = new DataView(value);
      console.log('Battery Level is ' + data.getUint8(0) + '%');
    });
  })
  .catch(function(error) { });
});
});

var bluetoothDevice = document.querySelector('platinum-bluetooth-device');
