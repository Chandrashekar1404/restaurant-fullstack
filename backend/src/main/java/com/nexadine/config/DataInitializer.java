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

            // =========================
            // ADMIN - SHIVA
            // =========================

            if (!userRepository.existsByEmail(
                    "panugantyshivakumar043@gmail.com")) {

                User shiva = new User();

                shiva.setFullName("Shiva");
                shiva.setEmail(
                        "panugantyshivakumar043@gmail.com");
                shiva.setPhone("9391104651");

                shiva.setPassword(
                        passwordEncoder.encode("shiva1234"));

                shiva.setRole("ADMIN");

                userRepository.save(shiva);
            }


            // =========================
            // ADMIN - ANIKETH
            // =========================

            if (!userRepository.existsByEmail(
                    "shaktianiketh36@gmail.com")) {

                User aniketh = new User();

                aniketh.setFullName("Aniketh");
                aniketh.setEmail(
                        "shaktianiketh36@gmail.com");
                aniketh.setPhone("6304394545");

                aniketh.setPassword(
                        passwordEncoder.encode("aniketh1234"));

                aniketh.setRole("ADMIN");

                userRepository.save(aniketh);
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