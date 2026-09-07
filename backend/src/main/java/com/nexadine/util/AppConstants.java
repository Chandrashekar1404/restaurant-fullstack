package com.nexadine.util;

public class AppConstants {

    // JWT
    public static final String SECRET_KEY =
            "mySecretKeyForNexaDineApplication123456789";

    public static final long JWT_EXPIRATION = 1000 * 60 * 60 * 24; // 24 Hours

    // Roles
    public static final String ROLE_ADMIN = "ADMIN";
    public static final String ROLE_CUSTOMER = "CUSTOMER";

    // API Paths
    public static final String AUTH_API = "/api/auth";
    public static final String USER_API = "/api/users";
    public static final String FOOD_API = "/api/foods";
    public static final String ORDER_API = "/api/orders";

    private AppConstants() {
        // Prevent object creation
    }
}