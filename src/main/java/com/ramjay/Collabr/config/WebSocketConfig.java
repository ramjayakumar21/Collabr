package com.ramjay.Collabr.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker // for enabling WebSocket server
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    // use interface for implementation for some of its methods to configure the websocket connection.
    //
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOriginPatterns("*")
                .withSockJS();
        // sockjs is used to enable fallback options for browsers that don’t support websocket.

        // STOMP stands for Simple Text Oriented Messaging Protocol. It is a messaging protocol that
        // defines the format and rules for data exchange.

        // We need STOMP because websocket is just communication protocol. It doesn’t define things like -
        // how to send a message only to users who are subscribed to a particular topic, which STOMP does
    }
    // method for registering websocket endpoint that the clients will use to connect to the server.
    // sock.js is used for browsers that don't support websocket
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app");
        // messages whose destination starts with “/app” should be sent to message-handling methods


        registry.enableSimpleBroker("/topic");
        // messages whose destination starts with “/topic” should be routed to the message broker.
        // Message broker broadcasts messages to all the connected clients who are subscribed to a particular topic

    }
    // method is used to configure our message broker which will be used to route messages from one client to another.
}