package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.CommentDTO;
import com.example.dto.PostDTO;
import com.example.dto.UserDTO;
import com.example.jwt.JwtTokenUtils;
import com.example.model.Attachment;
import com.example.model.Comment;
import com.example.model.Post;
import com.example.model.Type;
import com.example.model.User;
import com.example.service.AttachmentService;
import com.example.service.CommentService;
import com.example.service.PostService;
import com.example.service.UserService;

@RestController
public class CommentController {

	@Autowired
	private CommentService commentService;

	@Autowired
	private PostService postService;

	@Autowired
	private UserService userService;

	@Autowired
	private AttachmentService attachmentService;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private JwtTokenUtils jwtUtils;

	@GetMapping(value = "api/comments")
	public ResponseEntity<Page<CommentDTO>> getCommentsPage(Pageable page) {
		List<Comment> comments = commentService.findAll();
		List<CommentDTO> retVal = new ArrayList<>();
		CommentDTO dto = new CommentDTO();
		for (Comment c : comments) {
			if (c.getAttachment() != null) {
				dto = new CommentDTO(c);
			} else {
				dto.setId(c.getId());
				dto.setDate(c.getDate());
				dto.setTime(c.getTime());
				dto.setPost(null);
				dto.setText(c.getText());
				dto.setAtt(null);
				dto.setUser(new UserDTO(c.getUser()));
			}

			retVal.add(dto);
		}

		Page<CommentDTO> retVal2 = new PageImpl<>(retVal, page, retVal.size());

		return new ResponseEntity<>(retVal2, HttpStatus.OK);
	}

	@GetMapping(value = "api/comments/{id}")
	public ResponseEntity<CommentDTO> getComment(@PathVariable Long id) {
		Comment c = commentService.findOne(id);
		CommentDTO dto = new CommentDTO();
		if (c == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		if (c.getAttachment() != null) {
			dto = new CommentDTO(c);
		} else {
			dto.setId(c.getId());
			dto.setDate(c.getDate());
			dto.setTime(c.getTime());
			dto.setPost(new PostDTO(c.getPost()));
			dto.setText(c.getText());
			dto.setAtt(null);
			dto.setUser(new UserDTO(c.getUser()));
		}
		return new ResponseEntity<>(dto, HttpStatus.OK);
	}

	@PostMapping(value = "/api/posts/{id}/comments")
	public ResponseEntity<CommentDTO> create(@PathVariable Long id, @RequestBody CommentDTO commentDTO,
			HttpServletRequest request) {

		String token = jwtUtils.resolveToken(request);
		String username = jwtUtils.getUsername(token);
		System.out.println(username);

		User user = userService.findByUsername(username);

		Post post = postService.findOne(id).orElse(null);

		if (post == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Type type = new Type();
		Comment comment = new Comment();
		Attachment attachment = new Attachment();
		if (commentDTO.getAtt() != null) {
			type.setId(commentDTO.getAtt().getType().getId());
			type.setName(commentDTO.getAtt().getType().getName());

			attachment.setId(commentDTO.getAtt().getId());
			attachment.setContent(commentDTO.getAtt().getContent());
			attachment.setType(type);

			comment.setAttachment(attachment);
		} else {
			comment.setAttachment(null);
		}

		System.out.println(comment.getAttachment());

		comment.setId(commentDTO.getId());
		comment.setDate(commentDTO.getDate());
		comment.setTime(this.commentService.TimeToString());
		comment.setText(this.commentService.DateToString());
		comment.setPost(post);
		comment.setUser(user);

		Comment savedComment = commentService.save(comment);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping(value = "api/comments/{id}")
	public ResponseEntity<CommentDTO> update(@PathVariable Long id, @RequestBody CommentDTO commentDTO,
			HttpServletRequest request) {
		Comment comment1 = commentService.findOne(id);

		if (comment1 == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		// Post post =
		// postService.findOne(commentDTO.getPost().getId()).orElse(null);
		// User user = userService.getOne(commentDTO.getUser().getId())
		// !!!!!!!!!!!!!!!!!!!!!!1
		String token = jwtUtils.resolveToken(request);
		String username = jwtUtils.getUsername(token);
		System.out.println(username);

		User user = userService.findByUsername(username);

		Type type = new Type();
		Comment comment = new Comment();
		if (commentDTO.getAtt() != null) {
			type.setId(commentDTO.getAtt().getType().getId());
			type.setName(commentDTO.getAtt().getType().getName());
			Attachment attachment = attachmentService.findOne(commentDTO.getAtt().getId()).orElse(null);
			comment.setAttachment(attachment);
		} else {
			comment.setAttachment(null);
		}

		comment.setId(commentDTO.getId());
		comment.setDate(this.commentService.DateToString());
		comment.setTime(this.commentService.TimeToString());
		comment.setText(commentDTO.getText());
		comment.setPost(null);
		comment.setUser(user);

		Comment savedComment = commentService.save(comment);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping(value = "api/comments/{id}")
	public ResponseEntity<CommentDTO> delete(@PathVariable Long id) {
		Comment comment = commentService.findOne(id);
		if (comment == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		commentService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}