package com.nexadine.dto;

public class OrderRequest {

    // =====================================================
    // CUSTOMER DETAILS
    // =====================================================

    private Long customerId;
    private String customerName;
    private String phone;
    private String email;
    private String address;

    // =====================================================
    // ORDER DETAILS
    // =====================================================

    private String foodItems;
    private Integer quantity;
    private Double totalAmount;

    // =====================================================
    // PAYMENT DETAILS
    // =====================================================

    private String paymentMethod;
    private String paymentStatus;

    // =====================================================
    // CONSTRUCTOR
    // =====================================================

    public OrderRequest() {
    }

    // =====================================================
    // CUSTOMER ID
    // =====================================================

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    // =====================================================
    // CUSTOMER NAME
    // =====================================================

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    // =====================================================
    // PHONE
    // =====================================================

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    // =====================================================
    // EMAIL
    // =====================================================

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // =====================================================
    // ADDRESS
    // =====================================================

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // =====================================================
    // FOOD ITEMS
    // =====================================================

    public String getFoodItems() {
        return foodItems;
    }

    public void setFoodItems(String foodItems) {
        this.foodItems = foodItems;
    }

    // =====================================================
    // QUANTITY
    // =====================================================

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    // =====================================================
    // TOTAL AMOUNT
    // =====================================================

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    // =====================================================
    // PAYMENT METHOD
    // =====================================================

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    // =====================================================
    // PAYMENT STATUS
    // =====================================================

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}