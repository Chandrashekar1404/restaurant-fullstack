package com.nexadine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexadine.entity.RestaurantTable;

@Repository
public interface TableRepository
        extends JpaRepository<RestaurantTable, Long> {

    List<RestaurantTable> findByStatus(String status);

}