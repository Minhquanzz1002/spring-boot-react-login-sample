package vn.edu.iuh.services;

import vn.edu.iuh.models.User;

import java.util.Optional;

public interface UserService {
    void save(User user);

    Optional<User> findByEmail(String email);
}
