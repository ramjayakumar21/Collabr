"use strict";

let form = document.getElementById("signup_form")

let username = null
let stompClient = null

function connect(event) {
    username = document.getElementById("username_input").value

    if (username) {
        let socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);

        let headers = {}
        stompClient.connect({}, successConnect, onError)

    }
    console.log("event", event)
    event.preventDefault()
}

function successConnect(event) {
    console.log("connected user", username)
}

function onError(event) {
    connectingElement.
    console.error("failed to connect", username)
}

form.addEventListener('submit', connect, true)
