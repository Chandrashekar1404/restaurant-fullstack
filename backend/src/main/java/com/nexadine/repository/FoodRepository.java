package com.nexadine.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexadine.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

}