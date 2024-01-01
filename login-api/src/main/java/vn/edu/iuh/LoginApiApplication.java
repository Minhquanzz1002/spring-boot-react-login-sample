package vn.edu.iuh;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import vn.edu.iuh.models.AuthProvider;
import vn.edu.iuh.models.Role;
import vn.edu.iuh.models.User;
import vn.edu.iuh.services.UserService;

import java.time.LocalDate;

@SpringBootApplication
public class LoginApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner data(UserService userService) {
		return args -> {
			userService.save(User.builder()
							.name("John")
							.email("john@gmail.com")
							.password("john1234")
							.birth(LocalDate.of(2002, 10, 10))
							.gender(true)
							.provider(AuthProvider.NORMAL)
							.role(Role.ROLE_USER)
					.build());
		};
	}
}
