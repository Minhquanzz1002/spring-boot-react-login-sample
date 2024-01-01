package vn.edu.iuh.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Builder
public class AuthenticationRequestDTO {
    @Email
    private String email;
    @NotBlank
    @Length(min = 5, max = 16)
    private String password;
}
