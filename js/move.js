var speed = 0;
var checkClick = 0;
var id = 0;
function onColor(){
    clearInterval(id);
    id = setInterval(frame, 1000);
    function frame() {

        message = new Paho.MQTT.Message('{"mode":"motor","action":"color","speed":255}');
        message.destinationName = "ROBOT";
        client.send(message);

    }
}
function onMoveup(){
    clearInterval(id);
    id = setInterval(frame, 1000);
    function frame() {
        if(speed <= 254){
            speed += 80;
            if(speed > 254){
                speed = 255;
            }
        }

        message = new Paho.MQTT.Message('{"mode":"motor","action":"straight","speed":'+speed+'}');
        message.destinationName = "ROBOT";
        client.send(message);

    }
  }

  function onMoveleft(){
    clearInterval(id);
    id = setInterval(frame, 1000);
    function frame() {
        if(speed <= 254){
            speed += 80;
            if(speed > 254)
                speed = 255;
        }

        message = new Paho.MQTT.Message('{"mode":"motor","action":"left","speed":'+speed+'}');
        message.destinationName = "ROBOT";
        client.send(message);

    }

  }
  function onMoveright(){
    clearInterval(id);
    id = setInterval(frame, 1000);
    function frame() {
        if(speed <= 254){
            speed += 80;
            if(speed > 254)
                speed = 255;
        }

        message = new Paho.MQTT.Message('{"mode":"motor","action":"right","speed":'+speed+'}');
        message.destinationName = "ROBOT";
        client.send(message);

    }

  }
  function onMoveback(){
    clearInterval(id);
    id = setInterval(frame, 1000);
    function frame() {
        if(speed <= 254){
            speed += 80;
            if(speed > 254)
                speed = 255;
        }

        message = new Paho.MQTT.Message('{"mode":"motor","action":"back","speed":'+speed+'}');
        message.destinationName = "ROBOT";
        client.send(message);

    }

  }
  function onStop(){
    clearInterval(id);
    speed = 0;
    message = new Paho.MQTT.Message('{"mode":"motor","action":"stop"}');
    message.destinationName = "ROBOT";
    client.send(message);
  }
