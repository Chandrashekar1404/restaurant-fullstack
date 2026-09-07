package com.nexadine.service;

import org.springframework.stereotype.Service;

import com.nexadine.entity.Waiter;
import com.nexadine.repository.WaiterRepository;

@Service
public class WaiterAuthService {

    private final WaiterRepository waiterRepository;

    public WaiterAuthService(
            WaiterRepository waiterRepository) {

        this.waiterRepository = waiterRepository;
    }

    // Register Waiter
    public Waiter register(Waiter waiter) {

        if (waiterRepository
                .findByEmail(waiter.getEmail())
                .isPresent()) {

            throw new RuntimeException(
                    "Waiter email already exists"
            );
        }

        if (waiter.getStatus() == null
                || waiter.getStatus().isBlank()) {

            waiter.setStatus("ACTIVE");
        }

        return waiterRepository.save(waiter);
    }

    // Get Waiter
    public Waiter getWaiterById(Long id) {

        return waiterRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Waiter not found"
                        )
                );
    }

    // Update Waiter Status
    public Waiter updateStatus(
            Long id,
            String status) {

        if (status == null || status.isBlank()) {

            throw new RuntimeException(
                    "Status cannot be empty"
            );
        }

        Waiter waiter =
                getWaiterById(id);

        waiter.setStatus(
                status.toUpperCase()
        );

        return waiterRepository.save(waiter);
    }
}