package vn.edu.iuh.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class UserInfoDTO {
    private String email;
    private String name;
    private boolean gender;
    private LocalDate birth;
}
