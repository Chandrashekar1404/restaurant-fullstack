package com.nexadine.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nexadine.dto.PaymentRequest;
import com.nexadine.dto.PaymentResponse;
import com.nexadine.dto.PaymentVerificationRequest;
import com.nexadine.service.PaymentService;
import com.razorpay.Order;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(
            @RequestBody PaymentRequest request) {

        try {

            Order order = paymentService.createOrder(request.getAmount());

            Map<String, Object> response = new HashMap<>();

            response.put("id", order.get("id"));
            response.put("amount", order.get("amount"));
            response.put("currency", order.get("currency"));

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.internalServerError().body(e.getMessage());

        }
    }
    @PostMapping("/verify")
    public ResponseEntity<PaymentResponse> verifyPayment(
            @RequestBody PaymentVerificationRequest request) {

        return ResponseEntity.ok(
                paymentService.verifyPayment(request));

    }

}