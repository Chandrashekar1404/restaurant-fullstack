package com.nexadine.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nexadine.entity.Menu;
import com.nexadine.repository.MenuRepository;

@Service
public class MenuService {

    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    // =====================================================
    // ADD NEW FOOD
    // =====================================================

    public Menu saveMenuItem(Menu menu) {

        if (menu.getName() == null ||
            menu.getName().trim().isEmpty()) {

            throw new RuntimeException(
                    "Food name is required"
            );
        }

        if (menu.getPrice() == null ||
            menu.getPrice() < 0) {

            throw new RuntimeException(
                    "Valid food price is required"
            );
        }

        if (menu.getCategory() == null ||
            menu.getCategory().trim().isEmpty()) {

            throw new RuntimeException(
                    "Food category is required"
            );
        }

        if (menu.getStatus() == null ||
            menu.getStatus().trim().isEmpty()) {

            menu.setStatus("Available");
        }

        return menuRepository.save(menu);
    }

    // =====================================================
    // GET ALL FOOD ITEMS
    // =====================================================

    public List<Menu> getAllMenuItems() {

        return menuRepository.findAll();
    }

    // =====================================================
    // GET FOOD ITEM BY ID
    // =====================================================

    public Menu getMenuItemById(Long id) {

        return menuRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Menu item not found with ID: " + id
                        )
                );
    }

    // =====================================================
    // UPDATE FOOD ITEM
    // =====================================================

    public Menu updateMenuItem(
            Long id,
            Menu updatedMenu) {

        Menu existingMenu =
                getMenuItemById(id);

        if (updatedMenu.getName() != null &&
            !updatedMenu.getName().trim().isEmpty()) {

            existingMenu.setName(
                    updatedMenu.getName().trim()
            );
        }

        if (updatedMenu.getPrice() != null &&
            updatedMenu.getPrice() >= 0) {

            existingMenu.setPrice(
                    updatedMenu.getPrice()
            );
        }

        if (updatedMenu.getCategory() != null &&
            !updatedMenu.getCategory().trim().isEmpty()) {

            existingMenu.setCategory(
                    updatedMenu.getCategory().trim()
            );
        }

        if (updatedMenu.getStatus() != null &&
            !updatedMenu.getStatus().trim().isEmpty()) {

            existingMenu.setStatus(
                    updatedMenu.getStatus()
            );
        }

        return menuRepository.save(existingMenu);
    }

    // =====================================================
    // DELETE FOOD ITEM
    // =====================================================

    public void deleteMenuItem(Long id) {

        Menu menu =
                getMenuItemById(id);

        menuRepository.delete(menu);
    }
}