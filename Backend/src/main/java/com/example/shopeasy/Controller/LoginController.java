package com.example.shopeasy.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.example.shopeasy.Model.User;
import com.example.shopeasy.Repository.UserRepository;

@RestController

@RequestMapping("/api")

@CrossOrigin(origins = "http://localhost:5173")

public class LoginController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")

    public String register(
            @RequestBody User user) {

        User existingUser =
                userRepository.findByEmail(
                        user.getEmail());

        if(existingUser != null) {

            return "Email already exists";

        }

        userRepository.save(user);

        return "Registration Successful";
    }

    @PostMapping("/login")

    public String login(
            @RequestBody User user) {

        User existingUser =
                userRepository.findByEmail(
                        user.getEmail());

        if(existingUser == null) {

            return "User not found";
        }

        if(existingUser.getPassword()
                .equals(user.getPassword())) {

            return "Login Successful";
        }

        return "Invalid Password";
    }
}