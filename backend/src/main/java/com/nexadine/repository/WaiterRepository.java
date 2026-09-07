package com.nexadine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexadine.entity.Waiter;

@Repository
public interface WaiterRepository extends JpaRepository<Waiter, Long> {

    Optional<Waiter> findByEmail(String email);

}