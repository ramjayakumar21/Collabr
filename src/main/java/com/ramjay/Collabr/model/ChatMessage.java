package com.ramjay.Collabr.model;



public class ChatMessage {
    private String author;
    private String content;

    public enum MessageType {
        CHAT, LEAVE, JOIN
    }

    private MessageType type;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }
}
