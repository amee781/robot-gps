// Create a client instance
client = new Paho.MQTT.Client("m11.cloudmqtt.com", 36978, "web-" + new Date().getTime());
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
// connect the client
client.connect({
    useSSL: true,
    userName: "pgzqwjqm",
    password: "EyLit3zid3he",
    cleanSession: true,
    onSuccess:onConnect
    });
// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("ROBOT");
  // $("#pgsshow").html("ค้นหา GPS ไม่เจอ");

}
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}
// called when a message arrives
function onMessageArrived(message) {
  console.log(message.payloadString);
  var DATAstr = message.payloadString;
    DATAstr = DATAstr.replace('\0', '');
    DATAstr = DATAstr.replace(/\0/g, '');
    var msg = JSON.parse(DATAstr);
    switch(msg.mode){
        case 'gps':
         markerUpdateGPS(msg.lat,msg.lon);
         Car_latitude = msg.lat;
         Car_longitude = msg.lon;
        break;
        case 'status':
          $("#pgsshow").html("เชื่อมอุปกรณ์เรียบร้อย กำลังเชื่อมต่อกับ GPS ");
    }



  }
