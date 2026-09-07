package com.nexadine.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nexadine.entity.Food;
import com.nexadine.repository.FoodRepository;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    // Add Food
    public Food addFood(Food food) {
        return foodRepository.save(food);
    }

    // Get All Foods
    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    // Get Food By Id
    public Food getFoodById(Long id) {
        return foodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Food not found"));
    }

    // Update Food
    public Food updateFood(Long id, Food updatedFood) {

        Food food = foodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Food not found"));

        food.setName(updatedFood.getName());
        food.setDescription(updatedFood.getDescription());
        food.setPrice(updatedFood.getPrice());
        food.setCategory(updatedFood.getCategory());
        food.setImageUrl(updatedFood.getImageUrl());

        return foodRepository.save(food);
    }

    // Delete Food
    public void deleteFood(Long id) {
        foodRepository.deleteById(id);
    }
}