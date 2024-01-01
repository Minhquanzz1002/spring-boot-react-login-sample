package vn.edu.iuh.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.iuh.dto.UserInfoDTO;
import vn.edu.iuh.exceptions.NotFoundException;
import vn.edu.iuh.models.User;
import vn.edu.iuh.services.UserService;

@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
    @GetMapping
    public UserInfoDTO getUserInfoWithToken(Authentication authentication) {
        String email = authentication.getName();
        User user = userService.findByEmail(email).orElseThrow(() -> new NotFoundException("User not found"));
        return UserInfoDTO.builder()
                .email(user.getEmail())
                .gender(user.isGender())
                .birth(user.getBirth())
                .name(user.getName())
                .build();
    }
}
