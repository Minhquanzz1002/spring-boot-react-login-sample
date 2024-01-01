package vn.edu.iuh.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.iuh.dto.AuthenticationRequestDTO;
import vn.edu.iuh.dto.AuthenticationResponseDTO;
import vn.edu.iuh.services.AuthenticationService;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationService authenticationService;
    @PostMapping("/login")
    public AuthenticationResponseDTO login(@Valid @RequestBody AuthenticationRequestDTO request) {
        return authenticationService.login(request);
    }
}
