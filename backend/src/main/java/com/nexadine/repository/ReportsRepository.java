package com.nexadine.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nexadine.entity.Order;

@Repository
public interface ReportsRepository extends JpaRepository<Order, Long> {

    // =====================================================
    // TODAY'S SALES
    // =====================================================

    @Query("""
        SELECT COALESCE(SUM(o.totalAmount), 0)
        FROM Order o
        WHERE o.orderDate >= :start
        AND o.orderDate < :end
        """)
    Double getTodaySales(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end
    );


    // =====================================================
    // MONTHLY REVENUE
    // =====================================================

    @Query("""
        SELECT COALESCE(SUM(o.totalAmount), 0)
        FROM Order o
        WHERE o.orderDate >= :start
        AND o.orderDate < :end
        """)
    Double getMonthlyRevenue(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end
    );


    // =====================================================
    // TODAY'S ORDER COUNT
    // =====================================================

    @Query("""
        SELECT COUNT(o)
        FROM Order o
        WHERE o.orderDate >= :start
        AND o.orderDate < :end
        """)
    Long getTodayOrderCount(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end
    );


    // =====================================================
    // SUCCESSFUL PAYMENTS
    // =====================================================

    @Query("""
        SELECT COALESCE(SUM(o.totalAmount), 0)
        FROM Order o
        WHERE LOWER(o.paymentStatus) = 'paid'
        AND o.orderDate >= :start
        AND o.orderDate < :end
        """)
    Double getSuccessfulPayments(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end
    );
}