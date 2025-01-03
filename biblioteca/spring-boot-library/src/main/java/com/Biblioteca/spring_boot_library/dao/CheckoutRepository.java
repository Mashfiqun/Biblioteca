package com.Biblioteca.spring_boot_library.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Biblioteca.spring_boot_library.entity.Checkout;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    List<Checkout> findBooksByUserEmail(String userEmail);

    @Modifying
    @Query("delete from Checkout where bookId in :bookId")
    void deleteAllByBookId(@Param("bookId") Long bookId);
}