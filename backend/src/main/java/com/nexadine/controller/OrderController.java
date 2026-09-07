package com.nexadine.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nexadine.dto.OrderRequest;
import com.nexadine.entity.Order;
import com.nexadine.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(
    origins = "http://localhost:5173"
)
public class OrderController {

    private final OrderService orderService;

    public OrderController(
            OrderService orderService) {

        this.orderService =
                orderService;
    }

    // =====================================================
    // CREATE ORDER
    // =====================================================

    @PostMapping
    public ResponseEntity<Order> saveOrder(
            @RequestBody OrderRequest request) {

        Order order =
                orderService.saveOrder(
                        request
                );

        return ResponseEntity
                .status(
                        HttpStatus.CREATED
                )
                .body(order);
    }

    // =====================================================
    // GET ALL ORDERS
    // =====================================================

    @GetMapping
    public ResponseEntity<List<Order>>
    getAllOrders() {

        return ResponseEntity.ok(
                orderService.getAllOrders()
        );
    }

    // =====================================================
    // GET CUSTOMER ORDERS
    // =====================================================

    @GetMapping(
            "/customer/{customerId}"
    )
    public ResponseEntity<List<Order>>
    getOrdersByCustomerId(
            @PathVariable Long customerId) {

        return ResponseEntity.ok(
                orderService
                        .getOrdersByCustomerId(
                                customerId
                        )
        );
    }

    // =====================================================
    // GET ORDER
    // =====================================================

    @GetMapping("/{id}")
    public ResponseEntity<Order>
    getOrderById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                orderService
                        .getOrderById(id)
        );
    }

    // =====================================================
    // UPDATE STATUS
    // =====================================================

    @PutMapping("/{id}/status")
    public ResponseEntity<Order>
    updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return ResponseEntity.ok(
                orderService.updateStatus(
                        id,
                        status
                )
        );
    }

    // =====================================================
    // DELETE
    // =====================================================

    @DeleteMapping("/{id}")
    public ResponseEntity<String>
    deleteOrder(
            @PathVariable Long id) {

        orderService.deleteOrder(id);

        return ResponseEntity.ok(
                "Order Deleted Successfully"
        );
    }
}