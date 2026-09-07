package com.nexadine.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nexadine.entity.RestaurantTable;
import com.nexadine.repository.TableRepository;

@Service
public class TableService {

    private final TableRepository tableRepository;

    public TableService(TableRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    // Get all tables
    public List<RestaurantTable> getAllTables() {
        return tableRepository.findAll();
    }

    // Get table by ID
    public RestaurantTable getTableById(Long id) {

        return tableRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Table not found with ID: " + id
                        )
                );
    }

    // Create table
    public RestaurantTable createTable(
            RestaurantTable table) {

        if (table.getStatus() == null ||
                table.getStatus().isBlank()) {

            table.setStatus("AVAILABLE");
        }

        return tableRepository.save(table);
    }

    // Update table status
    public RestaurantTable updateStatus(
            Long id,
            String status) {

        RestaurantTable table = getTableById(id);

        table.setStatus(status.toUpperCase());

        return tableRepository.save(table);
    }

    // Assign waiter
    public RestaurantTable assignWaiter(
            Long id,
            String waiterName) {

        RestaurantTable table = getTableById(id);

        table.setWaiterName(waiterName);

        return tableRepository.save(table);
    }

    // Delete table
    public void deleteTable(Long id) {

        if (!tableRepository.existsById(id)) {
            throw new RuntimeException(
                    "Table not found with ID: " + id
            );
        }

        tableRepository.deleteById(id);
    }

    // Get tables by status
    public List<RestaurantTable> getTablesByStatus(
            String status) {

        return tableRepository.findByStatus(
                status.toUpperCase()
        );
    }
}