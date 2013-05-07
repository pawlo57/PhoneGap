var deviceInfo = {
    getDeviceInfo: function() {
        document.getElementById("deviceName").innerHTML = device.name;
        document.getElementById("phoneGapVersion").innerHTML = device.phoneGapVersion;
        console.log(device.name);
    }
};