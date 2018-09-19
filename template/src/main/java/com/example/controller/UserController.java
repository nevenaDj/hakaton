package com.example.controller;

import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.UserCredentialsDTO;
import com.example.dto.UserDTO;
import com.example.dto.UserDataDTO;
import com.example.dto.UserRegisterDTO;
import com.example.model.User;
import com.example.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private ModelMapper modelMapper;

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<String> login(@RequestBody UserCredentialsDTO credentials) {
		try {
			String jwt = userService.signin(credentials.getUsername(), credentials.getPassword());
			return new ResponseEntity<>(jwt, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Neispravno korisnicko ime ili lozinka.");
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

		}
	}

	@PostMapping("/signup")
	public ResponseEntity<Void> signup(@RequestBody UserRegisterDTO user) {
		System.out.println(user.getPassword());
		userService.signup(modelMapper.map(user, User.class));
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@GetMapping(value = "/me")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<UserDTO> whoami(HttpServletRequest req) {
		UserDTO userResponseDTO = modelMapper.map(userService.whoami(req), UserDTO.class);

		if (userResponseDTO != null) {
			return new ResponseEntity<>(userResponseDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/password")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Void> changePassword(HttpServletRequest req, @RequestBody UserDataDTO user) {
		try {
			userService.changePassword(user.getCurrentPassword(), user.getNewPassword(), user.getCheckPassword(), req);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

		}
	}

}
