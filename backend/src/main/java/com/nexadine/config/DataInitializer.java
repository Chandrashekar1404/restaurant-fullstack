package com.nexadine.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.nexadine.entity.User;
import com.nexadine.repository.UserRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initializeUsers(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

           if (!userRepository.existsByEmail("admin@email.com")) {

                User admin = new User();

                admin.setFullName("Admin");
                admin.setEmail("admin@email.com");
                admin.setPhone("9999999999");

                admin.setPassword(
                        passwordEncoder.encode("admin123")
                );

                admin.setRole("ADMIN");

                userRepository.save(admin);
                }


            // =========================
            // WAITER - RAGHAVA
            // =========================

            if (!userRepository.existsByEmail(
                    "raghava@gmail.com")) {

                User raghava = new User();

                raghava.setFullName("Raghava");
                raghava.setEmail(
                        "raghava@gmail.com");
                raghava.setPhone("9014894020");

                raghava.setPassword(
                        passwordEncoder.encode("raghava1234"));

                raghava.setRole("WAITER");

                userRepository.save(raghava);
            }


            // =========================
            // WAITER - SUBBU
            // =========================

            if (!userRepository.existsByEmail(
                    "subbu@gmai.com")) {

                User subbu = new User();

                subbu.setFullName("Subbu");
                subbu.setEmail(
                        "subbu@gmai.com");
                subbu.setPhone("9392659867");

                subbu.setPassword(
                        passwordEncoder.encode("subbu1234"));

                subbu.setRole("WAITER");

                userRepository.save(subbu);
            }


            // =========================
            // WAITER - ANIL
            // =========================

            if (!userRepository.existsByEmail(
                    "anilrock@gmail.com")) {

                User anil = new User();

                anil.setFullName("Anil");
                anil.setEmail(
                        "anilrock@gmail.com");
                anil.setPhone("9392864813");

                anil.setPassword(
                        passwordEncoder.encode(
                                "anilrock12341234"));

                anil.setRole("WAITER");

                userRepository.save(anil);
            }


            System.out.println(
                    "====================================");

            System.out.println(
                    "NexaDine default users initialized");

            System.out.println(
                    "====================================");
        };
    }
}