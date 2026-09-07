package com.nexadine.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nexadine.entity.Reservation;
import com.nexadine.service.ReservationService;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    // =====================================================
    // CREATE RESERVATION
    // POST /api/reservations
    // =====================================================

    @PostMapping
    public ResponseEntity<Reservation> createReservation(
            @RequestBody Reservation reservation) {

        Reservation savedReservation =
                reservationService.saveReservation(reservation);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedReservation);
    }

    // =====================================================
    // GET ALL RESERVATIONS
    // Used by ADMIN
    // GET /api/reservations
    // =====================================================

    @GetMapping
    public ResponseEntity<List<Reservation>> getAllReservations() {

        return ResponseEntity.ok(
                reservationService.getAllReservations()
        );
    }

    // =====================================================
    // GET RESERVATIONS FOR CUSTOMER
    // GET /api/reservations/customer/{customerId}
    // =====================================================

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<Reservation>> getCustomerReservations(
            @PathVariable Long customerId) {

        return ResponseEntity.ok(
                reservationService
                        .getReservationsByCustomerId(customerId)
        );
    }

    // =====================================================
    // GET RESERVATION BY ID
    // GET /api/reservations/{id}
    // =====================================================

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                reservationService.getReservationById(id)
        );
    }

    // =====================================================
    // UPDATE RESERVATION STATUS
    // PUT /api/reservations/{id}/status?status=Confirmed
    // =====================================================

    @PutMapping("/{id}/status")
    public ResponseEntity<Reservation> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return ResponseEntity.ok(
                reservationService.updateStatus(id, status)
        );
    }

    // =====================================================
    // DELETE RESERVATION
    // DELETE /api/reservations/{id}
    // =====================================================

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReservation(
            @PathVariable Long id) {

        reservationService.deleteReservation(id);

        return ResponseEntity.ok(
                "Reservation deleted successfully"
        );
    }
}