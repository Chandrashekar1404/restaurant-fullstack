package com.nexadine.mapper;

import com.nexadine.dto.RegisterRequest;
import com.nexadine.entity.User;
import com.nexadine.enums.Role;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserMapper {

    public static User toEntity(RegisterRequest request, PasswordEncoder passwordEncoder) {

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.CUSTOMER.name());

        return user;
    }
}