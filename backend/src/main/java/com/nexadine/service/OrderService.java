package com.nexadine.service;

import java.util.List;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.nexadine.dto.OrderRequest;
import com.nexadine.entity.Order;
import com.nexadine.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    private final SimpMessagingTemplate messagingTemplate;

    public OrderService(
            OrderRepository orderRepository,
            SimpMessagingTemplate messagingTemplate) {

        this.orderRepository =
                orderRepository;

        this.messagingTemplate =
                messagingTemplate;
    }

    // =====================================================
    // SAVE ORDER
    // =====================================================

    public Order saveOrder(
            OrderRequest request) {

        System.out.println(
                "================================="
        );

        System.out.println(
                "NEW CUSTOMER ORDER"
        );

        System.out.println(
                "Customer ID: "
                        + request.getCustomerId()
        );

        System.out.println(
                "Customer Name: "
                        + request.getCustomerName()
        );

        System.out.println(
                "Phone: "
                        + request.getPhone()
        );

        System.out.println(
                "Email: "
                        + request.getEmail()
        );

        System.out.println(
                "Food Items: "
                        + request.getFoodItems()
        );

        System.out.println(
                "Total: "
                        + request.getTotalAmount()
        );

        System.out.println(
                "================================="
        );

        Order order =
                new Order();

        // =====================================================
        // CUSTOMER
        // =====================================================

        order.setCustomerId(
                request.getCustomerId()
        );

        order.setCustomerName(
                request.getCustomerName()
        );

        order.setPhone(
                request.getPhone()
        );

        order.setEmail(
                request.getEmail()
        );

        order.setAddress(
                request.getAddress()
        );

        // =====================================================
        // ORDER
        // =====================================================

        order.setFoodItems(
                request.getFoodItems()
        );

        order.setQuantity(
                request.getQuantity()
        );

        order.setTotalAmount(
                request.getTotalAmount()
        );

        // =====================================================
        // PAYMENT
        // =====================================================

        order.setPaymentMethod(
                request.getPaymentMethod()
        );

        order.setPaymentStatus(
                request.getPaymentStatus()
        );

        // =====================================================
        // ORDER STATUS
        // =====================================================

        order.setOrderStatus(
                "Pending"
        );

        // =====================================================
        // SAVE DATABASE
        // =====================================================

        Order savedOrder =
                orderRepository.save(
                        order
                );

        // =====================================================
        // LIVE ADMIN DASHBOARD
        // =====================================================

        messagingTemplate.convertAndSend(
                "/topic/orders",
                savedOrder
        );

        // =====================================================
        // LIVE CUSTOMER ORDER
        // =====================================================

        messagingTemplate.convertAndSend(
                "/topic/orders/"
                        + savedOrder.getId(),
                savedOrder
        );

        System.out.println(
                "LIVE ORDER CREATED: #"
                        + savedOrder.getId()
        );

        return savedOrder;
    }

    // =====================================================
    // GET ALL ORDERS
    // =====================================================

    public List<Order> getAllOrders() {

        return orderRepository
                .findAllByOrderByOrderDateDesc();
    }

    // =====================================================
    // GET CUSTOMER ORDERS
    // =====================================================

    public List<Order> getOrdersByCustomerId(
            Long customerId) {

        return orderRepository
                .findByCustomerId(
                        customerId
                );
    }

    // =====================================================
    // GET ORDER
    // =====================================================

    public Order getOrderById(
            Long id) {

        return orderRepository
                .findById(id)
                .orElseThrow(
                        () ->
                                new RuntimeException(
                                        "Order Not Found: "
                                                + id
                                )
                );
    }

    // =====================================================
    // UPDATE STATUS
    // =====================================================

    public Order updateStatus(
            Long id,
            String status) {

        Order order =
                getOrderById(id);

        order.setOrderStatus(
                status
        );

        Order updatedOrder =
                orderRepository.save(
                        order
                );

        // LIVE ADMIN
        messagingTemplate.convertAndSend(
                "/topic/orders",
                updatedOrder
        );

        // LIVE CUSTOMER
        messagingTemplate.convertAndSend(
                "/topic/orders/"
                        + updatedOrder.getId(),
                updatedOrder
        );

        return updatedOrder;
    }

    // =====================================================
    // DELETE
    // =====================================================

    public void deleteOrder(
            Long id) {

        Order order =
                getOrderById(id);

        orderRepository.deleteById(
                id
        );

        messagingTemplate.convertAndSend(
                "/topic/orders",
                order
        );

        messagingTemplate.convertAndSend(
                "/topic/orders/" + id,
                order
        );
    }
}