package com.nexadine.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nexadine.entity.Order;
import com.nexadine.service.OrderService;

@RestController
@RequestMapping("/api/waiter")
@CrossOrigin(origins = "http://localhost:5173")
public class WaiterController {

    private final OrderService orderService;

    public WaiterController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Get all orders for waiter
    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    // Get single order
    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getOrder(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                orderService.getOrderById(id)
        );
    }

    // Update order status
    @PutMapping("/orders/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return ResponseEntity.ok(
                orderService.updateStatus(id, status)
        );
    }
}