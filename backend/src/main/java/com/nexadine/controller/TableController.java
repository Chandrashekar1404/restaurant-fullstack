package com.nexadine.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nexadine.entity.RestaurantTable;
import com.nexadine.service.TableService;

@RestController
@RequestMapping("/api/tables")
@CrossOrigin(origins = "http://localhost:5173")
public class TableController {

    private final TableService tableService;

    public TableController(TableService tableService) {
        this.tableService = tableService;
    }

    // Get all tables
    @GetMapping
    public ResponseEntity<List<RestaurantTable>> getAllTables() {

        return ResponseEntity.ok(
                tableService.getAllTables()
        );
    }

    // Get table by ID
    @GetMapping("/{id}")
    public ResponseEntity<RestaurantTable> getTableById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                tableService.getTableById(id)
        );
    }

    // Create table
    @PostMapping
    public ResponseEntity<RestaurantTable> createTable(
            @RequestBody RestaurantTable table) {

        RestaurantTable savedTable =
                tableService.createTable(table);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedTable);
    }

    // Update table status
    @PutMapping("/{id}/status")
    public ResponseEntity<RestaurantTable> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return ResponseEntity.ok(
                tableService.updateStatus(id, status)
        );
    }

    // Assign waiter
    @PutMapping("/{id}/waiter")
    public ResponseEntity<RestaurantTable> assignWaiter(
            @PathVariable Long id,
            @RequestParam String waiterName) {

        return ResponseEntity.ok(
                tableService.assignWaiter(
                        id,
                        waiterName
                )
        );
    }

    // Get tables by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<RestaurantTable>>
            getTablesByStatus(
                    @PathVariable String status) {

        return ResponseEntity.ok(
                tableService.getTablesByStatus(status)
        );
    }

    // Delete table
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTable(
            @PathVariable Long id) {

        tableService.deleteTable(id);

        return ResponseEntity.ok(
                "Table deleted successfully"
        );
    }
}