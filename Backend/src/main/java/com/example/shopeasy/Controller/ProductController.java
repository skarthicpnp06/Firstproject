package com.example.shopeasy.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.shopeasy.Model.Product;
import com.example.shopeasy.Repository.ProductRepository;

@RestController

@RequestMapping("/products")

@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {

        return productRepository.findAll();

    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {

        return productRepository.save(product);

    }
}