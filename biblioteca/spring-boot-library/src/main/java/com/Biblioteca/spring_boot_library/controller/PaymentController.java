package com.Biblioteca.spring_boot_library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Biblioteca.spring_boot_library.requestmodels.PaymentInfoRequest;
import com.Biblioteca.spring_boot_library.service.PaymentService;
import com.Biblioteca.spring_boot_library.utils.ExtractJWT;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/payment/secure")
public class PaymentController {

    private PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;

    }

    @PostMapping("/payment-intent")
    public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentInfoRequest paymentInfoRequest) throws StripeException {
        PaymentIntent paymentIntent = paymentService.createPaymentIntent(paymentInfoRequest);
        String paymentStr = paymentIntent.toJson();

        return new ResponseEntity<>(paymentStr, HttpStatus.OK);
    }

    @PutMapping("/payment-complete")
    public ResponseEntity<String> stripePaymentComplete(@RequestHeader(value="Authorization") String token)
            throws Exception {
                String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
                if (userEmail == null) {
                    throw new Exception("User not found");
                }
                return paymentService.stripePayment(userEmail);

    }       
        



}
