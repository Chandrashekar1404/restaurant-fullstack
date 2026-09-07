package com.nexadine.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.nexadine.dto.PaymentResponse;
import com.nexadine.dto.PaymentVerificationRequest;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class PaymentService {

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

    // Create Razorpay Order
    public Order createOrder(Double amount) throws Exception {

        if (amount == null || amount <= 0) {
            throw new RuntimeException("Invalid payment amount.");
        }

        RazorpayClient razorpay = new RazorpayClient(keyId, keySecret);

        JSONObject orderRequest = new JSONObject();

        // Amount in paise
        orderRequest.put("amount", (int) Math.round(amount * 100));

        orderRequest.put("currency", "INR");

        orderRequest.put(
                "receipt",
                "ORDER_" + System.currentTimeMillis());

        orderRequest.put("payment_capture", 1);

        return razorpay.orders.create(orderRequest);
    }

    // Verify Payment
    public PaymentResponse verifyPayment(PaymentVerificationRequest request) {

        System.out.println("========== PAYMENT VERIFY ==========");
        System.out.println("Order ID    : " + request.getRazorpay_order_id());
        System.out.println("Payment ID  : " + request.getRazorpay_payment_id());
        System.out.println("Signature   : " + request.getRazorpay_signature());
        System.out.println("====================================");

        // Demo mode: skip signature verification
        return new PaymentResponse(
                true,
                "Payment Verified Successfully");
    }

}