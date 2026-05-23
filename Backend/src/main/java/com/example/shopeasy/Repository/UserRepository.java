package com.example.shopeasy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shopeasy.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}