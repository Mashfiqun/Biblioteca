package com.Biblioteca.spring_boot_library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Biblioteca.spring_boot_library.entity.Book;
import com.Biblioteca.spring_boot_library.service.BookService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;



@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("secure/currentloans/count")
    public int currentLoansCount() {
        String userEmail = "testuser@gmail.com";
        return bookService.currentLoansCount(userEmail);
    }
    

    @GetMapping("secure/ischeckedout/byuser")
    public Boolean checkoutBookByUser(@RequestParam Long bookId) {
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestParam Long bookId) throws Exception {
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBook(userEmail, bookId);
    }
}
