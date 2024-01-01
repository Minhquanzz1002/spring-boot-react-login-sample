package vn.edu.iuh.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import vn.edu.iuh.dto.ErrorDTO;
import vn.edu.iuh.exceptions.NotFoundException;
import vn.edu.iuh.exceptions.OAuth2AuthenticationProcessingException;

import java.time.LocalDateTime;

@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {NotFoundException.class})
    public ResponseEntity<ErrorDTO> handleNotFoundException(NotFoundException exception) {
        return ResponseEntity.badRequest().body(ErrorDTO.builder()
                .message(exception.getMessage())
                .time(LocalDateTime.now())
                .build()
        );
    }
    @ExceptionHandler(value = {OAuth2AuthenticationProcessingException.class})
    public ResponseEntity<ErrorDTO> handOAuth2AuthenticationProcessingException(OAuth2AuthenticationProcessingException exception) {
        return new ResponseEntity<>(ErrorDTO.builder().message(exception.getMessage()).time(LocalDateTime.now()).build(), HttpStatus.UNAUTHORIZED);
    }
}
