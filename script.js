
const send = document.querySelector(".send");
const geo = document.querySelector(".geo");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

const wsUrl = "wss://echo-ws-service.herokuapp.com";
let websocket;
websocket = new WebSocket(wsUrl);

websocket.onopen = function(event) {
    console.log('Соединение установлено');
};

websocket.onclose = function(event) {
    console.log('Соединение закрыто');
};

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
};

input.addEventListener("input", ButtonED);

function ButtonED(){
  if (input.value == ""){
    send.disabled = true;
  } else {
    send.disabled = false;
  }
}
ButtonED();

send.addEventListener('click', () => {
    const message = input.value;
    writeToScreen("Вы: " + message);
    input.value = "";
    websocket.send(message);
    ButtonED();
});

websocket.onmessage = function(evt) {
    const message = evt.data;
    writeToScreen("Чат: " + message);
}

geo.addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const mapLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            writeToScreen(`Гео-локация: ${mapLink}`);
        }, function(error) {
            console.error('Ошибка получения геолокации:', error);
        });
    } else {
        console.error('Геолокация не поддерживается в вашем браузере');
    }
});