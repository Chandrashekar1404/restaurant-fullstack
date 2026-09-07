package com.nexadine.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexadine.entity.Order;
import com.nexadine.repository.OrderRepository;

@Service
public class ReportsService {

    private final OrderRepository orderRepository;

    public ReportsService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // =====================================================
    // TODAY'S SALES
    // =====================================================

    public double getTodaySales() {

        LocalDate today = LocalDate.now();

        List<Order> orders = orderRepository.findAll();

        return orders.stream()
                .filter(order -> order.getOrderDate() != null)
                .filter(order ->
                        order.getOrderDate()
                                .toLocalDate()
                                .equals(today))
                .filter(this::isSuccessfulOrder)
                .mapToDouble(order ->
                        order.getTotalAmount() != null
                                ? order.getTotalAmount()
                                : 0.0)
                .sum();
    }

    // =====================================================
    // MONTHLY REVENUE
    // =====================================================

    public double getMonthlyRevenue() {

        YearMonth currentMonth =
                YearMonth.now();

        List<Order> orders =
                orderRepository.findAll();

        return orders.stream()
                .filter(order ->
                        order.getOrderDate() != null)
                .filter(order -> {

                    YearMonth orderMonth =
                            YearMonth.from(
                                    order.getOrderDate());

                    return orderMonth.equals(
                            currentMonth);
                })
                .filter(this::isSuccessfulOrder)
                .mapToDouble(order ->
                        order.getTotalAmount() != null
                                ? order.getTotalAmount()
                                : 0.0)
                .sum();
    }

    // =====================================================
    // TOTAL ORDERS
    // =====================================================

    public long getTotalOrders() {

        return orderRepository.count();
    }

    // =====================================================
    // TODAY'S ORDER COUNT
    // =====================================================

    public long getTodayOrderCount() {

        LocalDate today = LocalDate.now();

        return orderRepository.findAll()
                .stream()
                .filter(order ->
                        order.getOrderDate() != null)
                .filter(order ->
                        order.getOrderDate()
                                .toLocalDate()
                                .equals(today))
                .count();
    }

    // =====================================================
    // SUCCESSFUL PAYMENTS
    // =====================================================

    public double getSuccessfulPayments() {

        return orderRepository.findAll()
                .stream()
                .filter(this::isSuccessfulOrder)
                .mapToDouble(order ->
                        order.getTotalAmount() != null
                                ? order.getTotalAmount()
                                : 0.0)
                .sum();
    }

    // =====================================================
    // MONTHLY ORDER COUNT
    // =====================================================

    public long getMonthlyOrderCount() {

        YearMonth currentMonth =
                YearMonth.now();

        return orderRepository.findAll()
                .stream()
                .filter(order ->
                        order.getOrderDate() != null)
                .filter(order -> {

                    YearMonth orderMonth =
                            YearMonth.from(
                                    order.getOrderDate());

                    return orderMonth.equals(
                            currentMonth);
                })
                .count();
    }

    // =====================================================
    // FULL REPORT
    // =====================================================

    public Map<String, Object> getReport() {

        Map<String, Object> report =
                new LinkedHashMap<>();

        report.put(
                "todaySales",
                getTodaySales()
        );

        report.put(
                "monthlyRevenue",
                getMonthlyRevenue()
        );

        report.put(
                "totalOrders",
                getTotalOrders()
        );

        report.put(
                "todayOrderCount",
                getTodayOrderCount()
        );

        report.put(
                "successfulPayments",
                getSuccessfulPayments()
        );

        report.put(
                "monthlyOrderCount",
                getMonthlyOrderCount()
        );

        return report;
    }

    // =====================================================
    // DAILY SALES REPORT
    // =====================================================

    public List<Map<String, Object>> getDailyReport() {

        List<Order> orders =
                orderRepository.findAll();

        Map<LocalDate, List<Order>> groupedOrders =
                new LinkedHashMap<>();

        for (Order order : orders) {

            if (order.getOrderDate() == null) {
                continue;
            }

            LocalDate date =
                    order.getOrderDate().toLocalDate();

            groupedOrders
                    .computeIfAbsent(
                            date,
                            key -> new java.util.ArrayList<>())
                    .add(order);
        }

        return groupedOrders.entrySet()
                .stream()
                .sorted(Map.Entry.comparingByKey())
                .map(entry -> {

                    LocalDate date =
                            entry.getKey();

                    List<Order> dateOrders =
                            entry.getValue();

                    double sales =
                            dateOrders.stream()
                                    .filter(this::isSuccessfulOrder)
                                    .mapToDouble(order ->
                                            order.getTotalAmount() != null
                                                    ? order.getTotalAmount()
                                                    : 0.0)
                                    .sum();

                    long orderCount =
                            dateOrders.size();

                    Map<String, Object> row =
                            new LinkedHashMap<>();

                    row.put(
                            "date",
                            date.toString()
                    );

                    row.put(
                            "orders",
                            orderCount
                    );

                    row.put(
                            "sales",
                            sales
                    );

                    row.put(
                            "payments",
                            sales
                    );

                    return row;
                })
                .toList();
    }

    // =====================================================
    // PAYMENT CHECK
    // =====================================================

    private boolean isSuccessfulOrder(Order order) {

        if (order == null) {
            return false;
        }

        String paymentStatus =
                order.getPaymentStatus();

        if (paymentStatus == null) {
            return false;
        }

        String status =
                paymentStatus.trim()
                        .toLowerCase();

        return status.equals("paid")
                || status.equals("success")
                || status.equals("successful")
                || status.equals("completed");
    }
}