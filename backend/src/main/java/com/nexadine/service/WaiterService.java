package com.nexadine.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nexadine.entity.Order;
import com.nexadine.repository.OrderRepository;

@Service
public class WaiterService {

    private final OrderRepository orderRepository;

    public WaiterService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // Get all orders for waiter
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Get order by ID
    public Order getOrderById(Long id) {

        return orderRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Order not found with ID: " + id)
                );
    }

    // Update order status
    public Order updateOrderStatus(Long id, String status) {

        Order order = getOrderById(id);

        order.setOrderStatus(status);

        return orderRepository.save(order);
    }

    // Count total orders
    public long getTotalOrders() {
        return orderRepository.count();
    }

    // Count pending orders
    public long getPendingOrders() {

        return orderRepository
                .findAll()
                .stream()
                .filter(order ->
                        "Pending".equalsIgnoreCase(order.getOrderStatus()))
                .count();
    }

    // Count preparing orders
    public long getPreparingOrders() {

        return orderRepository
                .findAll()
                .stream()
                .filter(order ->
                        "Preparing".equalsIgnoreCase(order.getOrderStatus()))
                .count();
    }

    // Count completed orders
    public long getCompletedOrders() {

        return orderRepository
                .findAll()
                .stream()
                .filter(order ->
                        "Served".equalsIgnoreCase(order.getOrderStatus()))
                .count();
    }
}