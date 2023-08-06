package com.ramjay.Collabr.controller;

import com.ramjay.Collabr.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    // all messages with /app starting destination will be routed to message handling methods
    // annotated with @MessageMapping


    // ie  message with destination /app/chat.register will be routed to the register() function
    @MessageMapping("/chat.register")
    @SendTo("/topic/public")
    public ChatMessage register(@Payload ChatMessage message, SimpMessageHeaderAccessor header) {
        System.out.println(header);
        System.out.println(message);
        // broadcasts new user has joined
        header.getSessionAttributes().put("username", message.getAuthor());
        return message;
    }

    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage message) {
        return message;
    }

}
