package com.nexadine.dto;

public class WaiterLoginRequest {

    private String email;
    private String password;

    public WaiterLoginRequest() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}