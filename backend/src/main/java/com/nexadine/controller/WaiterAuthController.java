package com.nexadine.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nexadine.entity.Waiter;
import com.nexadine.service.WaiterAuthService;

@RestController
@RequestMapping("/api/waiter/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class WaiterAuthController {

    private final WaiterAuthService waiterAuthService;

    public WaiterAuthController(
            WaiterAuthService waiterAuthService) {

        this.waiterAuthService = waiterAuthService;
    }

    // =========================
    // REGISTER WAITER
    // =========================

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody Waiter waiter) {

        try {

            Waiter savedWaiter =
                    waiterAuthService.register(waiter);

            return ResponseEntity.ok(savedWaiter);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    // =========================
    // GET WAITER BY ID
    // =========================

    @GetMapping("/{id}")
    public ResponseEntity<?> getWaiter(
            @PathVariable Long id) {

        try {

            Waiter waiter =
                    waiterAuthService.getWaiterById(id);

            return ResponseEntity.ok(waiter);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .notFound()
                    .build();
        }
    }

    // =========================
    // UPDATE WAITER STATUS
    // =========================

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        try {

            Waiter waiter =
                    waiterAuthService.updateStatus(
                            id,
                            status
                    );

            return ResponseEntity.ok(waiter);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
}