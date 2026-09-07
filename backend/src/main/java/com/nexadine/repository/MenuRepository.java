package com.nexadine.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexadine.entity.Menu;

@Repository
public interface MenuRepository
        extends JpaRepository<Menu, Long> {
}