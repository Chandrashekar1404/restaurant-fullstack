package com.nexadine.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexadine.entity.Menu;
import com.nexadine.service.MenuService;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:5173")
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    // =====================================================
    // ADD NEW FOOD
    // POST /api/menu
    // =====================================================

    @PostMapping
    public ResponseEntity<Menu> addMenuItem(
            @RequestBody Menu menu) {

        Menu savedMenu =
                menuService.saveMenuItem(menu);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedMenu);
    }

    // =====================================================
    // GET ALL FOOD ITEMS
    // GET /api/menu
    // =====================================================

    @GetMapping
    public ResponseEntity<List<Menu>> getAllMenuItems() {

        return ResponseEntity.ok(
                menuService.getAllMenuItems()
        );
    }

    // =====================================================
    // GET FOOD ITEM BY ID
    // GET /api/menu/{id}
    // =====================================================

    @GetMapping("/{id}")
    public ResponseEntity<Menu> getMenuItemById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                menuService.getMenuItemById(id)
        );
    }

    // =====================================================
    // UPDATE FOOD ITEM
    // PUT /api/menu/{id}
    // =====================================================

    @PutMapping("/{id}")
    public ResponseEntity<Menu> updateMenuItem(
            @PathVariable Long id,
            @RequestBody Menu menu) {

        Menu updatedMenu =
                menuService.updateMenuItem(id, menu);

        return ResponseEntity.ok(updatedMenu);
    }

    // =====================================================
    // DELETE FOOD ITEM
    // DELETE /api/menu/{id}
    // =====================================================

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMenuItem(
            @PathVariable Long id) {

        menuService.deleteMenuItem(id);

        return ResponseEntity.ok(
                "Menu item deleted successfully"
        );
    }
}