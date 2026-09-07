package com.nexadine.dto;

import java.time.LocalDateTime;

public class OrderResponse {

    private Long id;

    private Long customerId;

    private String customerName;

    private Double totalAmount;

    private String paymentStatus;

    private String orderStatus;

    private LocalDateTime orderDate;


    // =========================
    // CONSTRUCTOR
    // =========================

    public OrderResponse() {
    }


    // =========================
    // ID
    // =========================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    // =========================
    // CUSTOMER ID
    // =========================

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }


    // =========================
    // CUSTOMER NAME
    // =========================

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }


    // =========================
    // TOTAL AMOUNT
    // =========================

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }


    // =========================
    // PAYMENT STATUS
    // =========================

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }


    // =========================
    // ORDER STATUS
    // =========================

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }


    // =========================
    // ORDER DATE
    // =========================

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }
}