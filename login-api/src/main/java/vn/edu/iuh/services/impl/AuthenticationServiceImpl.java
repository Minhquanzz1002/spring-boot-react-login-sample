package vn.edu.iuh.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import vn.edu.iuh.security.UserPrincipal;
import vn.edu.iuh.dto.AuthenticationRequestDTO;
import vn.edu.iuh.dto.AuthenticationResponseDTO;
import vn.edu.iuh.exceptions.NotFoundException;
import vn.edu.iuh.models.User;
import vn.edu.iuh.repositories.UserRepository;
import vn.edu.iuh.services.AuthenticationService;
import vn.edu.iuh.utils.JwtProvider;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;
    @Override
    public AuthenticationResponseDTO login(AuthenticationRequestDTO request) {

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new NotFoundException("User not found"));
        UserPrincipal userPrincipal = UserPrincipal.builder()
                .id(user.getId())
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities(List.of(new SimpleGrantedAuthority(user.getRole().name())))
                .build();
        return AuthenticationResponseDTO.builder()
                .accessToken(jwtProvider.generateToken(userPrincipal))
                .refreshToken(jwtProvider.generateRefreshToken(userPrincipal))
                .build();
    }
}
