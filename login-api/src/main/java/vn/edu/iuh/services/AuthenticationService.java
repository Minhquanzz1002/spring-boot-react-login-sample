package vn.edu.iuh.services;

import vn.edu.iuh.dto.AuthenticationRequestDTO;
import vn.edu.iuh.dto.AuthenticationResponseDTO;

public interface AuthenticationService {
    AuthenticationResponseDTO login(AuthenticationRequestDTO request);
}
