package com.nexadine.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexadine.service.ReportsService;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportsController {

    private final ReportsService reportsService;

    public ReportsController(
            ReportsService reportsService) {

        this.reportsService = reportsService;
    }

    // =====================================================
    // GET FULL REPORT
    // GET /api/reports
    // =====================================================

    @GetMapping
    public ResponseEntity<Map<String, Object>> getReport() {

        return ResponseEntity.ok(
                reportsService.getReport()
        );
    }

    // =====================================================
    // GET DAILY SALES REPORT
    // GET /api/reports/daily
    // =====================================================

    @GetMapping("/daily")
    public ResponseEntity<List<Map<String, Object>>> getDailyReport() {

        return ResponseEntity.ok(
                reportsService.getDailyReport()
        );
    }

    // =====================================================
    // GET TODAY'S SALES
    // GET /api/reports/today-sales
    // =====================================================

    @GetMapping("/today-sales")
    public ResponseEntity<Double> getTodaySales() {

        return ResponseEntity.ok(
                reportsService.getTodaySales()
        );
    }

    // =====================================================
    // GET MONTHLY REVENUE
    // GET /api/reports/monthly-revenue
    // =====================================================

    @GetMapping("/monthly-revenue")
    public ResponseEntity<Double> getMonthlyRevenue() {

        return ResponseEntity.ok(
                reportsService.getMonthlyRevenue()
        );
    }

    // =====================================================
    // GET TOTAL ORDERS
    // GET /api/reports/total-orders
    // =====================================================

    @GetMapping("/total-orders")
    public ResponseEntity<Long> getTotalOrders() {

        return ResponseEntity.ok(
                reportsService.getTotalOrders()
        );
    }

    // =====================================================
    // GET SUCCESSFUL PAYMENTS
    // GET /api/reports/payments
    // =====================================================

    @GetMapping("/payments")
    public ResponseEntity<Double> getSuccessfulPayments() {

        return ResponseEntity.ok(
                reportsService.getSuccessfulPayments()
        );
    }

    // =====================================================
    // GET TODAY'S ORDER COUNT
    // GET /api/reports/today-orders
    // =====================================================

    @GetMapping("/today-orders")
    public ResponseEntity<Long> getTodayOrderCount() {

        return ResponseEntity.ok(
                reportsService.getTodayOrderCount()
        );
    }

    // =====================================================
    // GET MONTHLY ORDER COUNT
    // GET /api/reports/monthly-orders
    // =====================================================

    @GetMapping("/monthly-orders")
    public ResponseEntity<Long> getMonthlyOrderCount() {

        return ResponseEntity.ok(
                reportsService.getMonthlyOrderCount()
        );
    }
}