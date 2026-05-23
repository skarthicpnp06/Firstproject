package com.example.shopeasy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shopeasy.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}