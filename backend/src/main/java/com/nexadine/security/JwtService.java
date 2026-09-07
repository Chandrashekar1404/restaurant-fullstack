package com.nexadine.security;


import java.security.Key;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;


@Service
public class JwtService {


    private static final String SECRET_KEY =
            "VGhpc0lzQVN1cGVyU2VjcmV0S2V5Rm9ySldUMTIzNDU2Nzg5MDEyMzQ1Ng==";



    private Key getSigningKey() {

        byte[] keyBytes =
                Decoders.BASE64.decode(SECRET_KEY);

        return Keys.hmacShaKeyFor(keyBytes);

    }




    // Generate JWT Token

    public String generateToken(String email) {


        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                    new Date(
                    System.currentTimeMillis()
                    + 1000 * 60 * 60 * 24
                    )
                )

                .signWith(getSigningKey())

                .compact();

    }





    // Extract Email

    public String extractUsername(String token) {


        return extractClaim(
                token,
                Claims::getSubject
        );

    }





    // Validate Token

    public boolean isTokenValid(
            String token,
            String email) {


        return extractUsername(token)
                .equals(email)
                &&
                !isTokenExpired(token);

    }





    private boolean isTokenExpired(String token) {


        return extractClaim(
                token,
                Claims::getExpiration
        )
        .before(new Date());

    }





    // Extract Single Claim

    private <T> T extractClaim(
            String token,
            Function<Claims,T> resolver) {


        final Claims claims =
                extractAllClaims(token);


        return resolver.apply(claims);

    }





    // Extract All Claims

    private Claims extractAllClaims(String token) {


        return Jwts.parserBuilder()

                .setSigningKey(getSigningKey())

                .build()

                .parseClaimsJws(token)

                .getBody();

    }

}