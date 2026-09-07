package com.nexadine.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nexadine.entity.Reservation;
import com.nexadine.repository.ReservationRepository;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationService(
            ReservationRepository reservationRepository) {

        this.reservationRepository = reservationRepository;
    }

    // =====================================================
    // SAVE RESERVATION
    // =====================================================

    public Reservation saveReservation(
            Reservation reservation) {

        reservation.setStatus("Pending");

        return reservationRepository.save(reservation);
    }

    // =====================================================
    // GET RESERVATIONS FOR ONE CUSTOMER
    // =====================================================

    public List<Reservation> getReservationsByCustomerId(
            Long customerId) {

        return reservationRepository
                .findByCustomerId(customerId);
    }

    // =====================================================
    // GET ALL RESERVATIONS
    // =====================================================

    public List<Reservation> getAllReservations() {

        return reservationRepository.findAll();
    }

    // =====================================================
    // GET RESERVATION BY ID
    // =====================================================

    public Reservation getReservationById(Long id) {

        return reservationRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Reservation Not Found"));
    }

    // =====================================================
    // UPDATE RESERVATION STATUS
    // =====================================================

    public Reservation updateStatus(
            Long id,
            String status) {

        Reservation reservation =
                getReservationById(id);

        reservation.setStatus(status);

        return reservationRepository.save(reservation);
    }

    // =====================================================
    // DELETE RESERVATION
    // =====================================================

    public void deleteReservation(Long id) {

        Reservation reservation =
                getReservationById(id);

        reservationRepository.delete(reservation);
    }
}