package com.Biblioteca.spring_boot_library.requestmodel;

import lombok.Data;

import java.util.Optional;

@Data
public class ReviewRequest {

    private double rating;

    private Long bookId;

    private Optional<String> reviewDescription;
}