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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.AttachmentDTO;
import com.example.dto.CommentDTO;
import com.example.dto.PostDTO;
import com.example.dto.UserDTO;
import com.example.jwt.JwtTokenUtils;
import com.example.model.Attachment;
import com.example.model.Comment;
import com.example.model.Post;
import com.example.model.Type;
import com.example.model.User;
import com.example.service.PostService;
import com.example.service.UserService;

@RestController
public class PostController {

	@Autowired
	private PostService postService;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private JwtTokenUtils jwtUtils;

	@Autowired
	private UserService userService;

	@GetMapping(value = "/api/posts")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Page<PostDTO>> getPostsPage(Pageable page) {
		Page<Post> posts = postService.findAllPaged(page);
		List<PostDTO> postDTOs = new ArrayList<>();
		for (Post post : posts) {
			PostDTO postDTO = new PostDTO();
			if (post.getAttachment() != null) {
				postDTO = modelMapper.map(post, PostDTO.class);
				postDTO.setAtt(modelMapper.map(post.getAttachment(), AttachmentDTO.class));
			} else {
				postDTO.setId(post.getId());
				postDTO.setDate(post.getDate());
				postDTO.setTime(post.getTime());
				postDTO.setText(post.getText());
				postDTO.setAtt(null);
				postDTO.setUser(new UserDTO(post.getUser()));

			}

			List<CommentDTO> commentDTOs = new ArrayList<>();
			for (Comment comment : post.getComments()) {
				CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
				commentDTO.setPost(null);
				commentDTOs.add(commentDTO);

			}

			postDTO.setComments(commentDTOs);
			postDTOs.add(postDTO);
		}
		
		System.out.println(postDTOs.size());

		Page<PostDTO> retVal = new PageImpl<>(postDTOs, page, postDTOs.size());
		
		System.out.println(retVal.getSize());
		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

	@GetMapping(value = "/api/posts/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<PostDTO> getPost(@PathVariable Long id) {
		Post post = postService.findOne(id).orElse(null);
		PostDTO postDTO = new PostDTO();

		if (post == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		if (post.getAttachment() != null) {
			postDTO = new PostDTO(post);
		} else {
			postDTO.setId(post.getId());
			postDTO.setDate(post.getDate());
			postDTO.setTime(post.getTime());
			postDTO.setText(post.getText());
			postDTO.setAtt(null);
			postDTO.setUser(new UserDTO(post.getUser()));
			postDTO.setViews(post.getViews());
			postDTO.setRating(post.getRating());
			postDTO.setLocation(post.getLocation());
		}

		List<CommentDTO> commentDTOs = new ArrayList<>();
		for (Comment comment : post.getComments()) {
			CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
			commentDTO.setPost(null);
			commentDTOs.add(commentDTO);

		}

		postDTO.setComments(commentDTOs);

		return new ResponseEntity<>(postDTO, HttpStatus.OK);
	}

	@PostMapping(value = "/api/posts")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<PostDTO> create(@RequestBody PostDTO postDTO, HttpServletRequest request) {

		String token = jwtUtils.resolveToken(request);
		String username = jwtUtils.getUsername(token);
		System.out.println(username);

		User user = userService.findByUsername(username);

		Type type = new Type();
		Post post = new Post();
		Attachment attachment = new Attachment();
		if (postDTO.getAtt() != null) {
			type.setId(postDTO.getAtt().getType().getId());
			type.setName(postDTO.getAtt().getType().getName());

			attachment.setId(postDTO.getAtt().getId());
			attachment.setContent(postDTO.getAtt().getContent());
			attachment.setType(type);

			post.setAttachment(attachment);
		} else {
			post.setAttachment(null);
		}

		post.setId(postDTO.getId());
		post.setDate(this.postService.DateToString());
		post.setTime(this.postService.TimeToString());

		post.setUser(user);
		//post.setRating(postDTO.getRating());
		post.setViews(postDTO.getViews());
		post.setLocation(postDTO.getLocation());
		post.setText(postDTO.getText());
		post.setCounter(0);
		post.setRating(0);

		Post savedPost = postService.save(post);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping(value = "api/posts/{id}")
	public ResponseEntity<PostDTO> update(@PathVariable Long id, @RequestBody PostDTO postDTO,
			HttpServletRequest request) {
		Post post1 = postService.findOne(id).orElse(null);

		if (post1 == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		String token = jwtUtils.resolveToken(request);
		String username = jwtUtils.getUsername(token);
		System.out.println(username);

		User user = userService.findByUsername(username);

		Post post = postService.findOne(postDTO.getId()).orElse(null);
		if (post == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		post.setText(postDTO.getText());
		post.setDate(this.postService.DateToString());
		post.setTime(this.postService.TimeToString());


		Post savedPost = postService.save(post);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping(value = "api/posts/{id}")
	public ResponseEntity<PostDTO> delete(@PathVariable Long id) {
		Post post = postService.findOne(id).orElse(null);
		if (post == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		postService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/*@GetMapping(value = "/api/posts/me")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Page<PostDTO>> getPostsPageByUser(Pageable pageable, HttpServletRequest request) {

		List<PostDTO> postDTOs = new ArrayList<>();

		String token = jwtUtils.resolveToken(request);
		String username = jwtUtils.getUsername(token);

		Page<Post> posts = postService.findAllPostsOfUser(username, pageable);

		for (Post post : posts) {
			if (post.getUser().getUsername().equals(username)) {
				PostDTO postDTO = modelMapper.map(post, PostDTO.class);
				postDTO.setUser(null);
				List<CommentDTO> commentDTOs = new ArrayList<>();

				for (Comment comment : post.getComments()) {
					CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
					commentDTO.setPost(null);
					commentDTOs.add(commentDTO);

				}

				postDTO.setComments(commentDTOs);
				postDTOs.add(postDTO);
			}
		}

		Page<PostDTO> retVal = new PageImpl<>(postDTOs, pageable, postDTOs.size());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
		
		
	}*/
	
	@GetMapping(value = "/api/posts/me")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Page<PostDTO>> getPostsPageByUser(Pageable page, HttpServletRequest request) {
		
		Page<Post> posts = postService.findAllPagedDesc(page);
//		Page<Post> posts = postService.findAllPaged(page);
		List<PostDTO> postDTOs = new ArrayList<>(); 
		
		String token = jwtUtils.resolveToken(request);
		String username = jwtUtils.getUsername(token);
		

		for (Post post : posts) {
			if(post.getUser().getUsername().equals(username)) {
				PostDTO postDTO = modelMapper.map(post, PostDTO.class);
				List<CommentDTO> commentDTOs = new ArrayList<>();

				for (Comment comment : post.getComments()) {
					CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
					commentDTO.setPost(null);
					commentDTOs.add(commentDTO);

				}
			
			postDTO.setComments(commentDTOs);
			postDTOs.add(postDTO);
			}
		}

		Page<PostDTO> retVal = new PageImpl<>(postDTOs, page, postDTOs.size());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/posts/{id}/rating", method = RequestMethod.PUT)
	public ResponseEntity<Post> ratingPost(@PathVariable Long id, @RequestBody PostDTO postDTO) {
		System.out.println(postDTO.getRating());
		Post post = postService.findOne(id).orElse(null);
		if (post == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		post.setCounter(post.getCounter() + 1);
		post.setRating((post.getRating() + postDTO.getRating()) / post.getCounter());

		postService.save(post);

		return new ResponseEntity<Post>(post, HttpStatus.OK);

	}
	
	@GetMapping(value = "/api/posts/desc")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Page<PostDTO>> getPostsPageDesc(Pageable page) {
		Page<Post> posts = postService.findAllPagedDesc(page);
		List<PostDTO> postDTOs = new ArrayList<>();

		for (Post post : posts) {
			PostDTO postDTO = modelMapper.map(post, PostDTO.class);
			List<CommentDTO> commentDTOs = new ArrayList<>();

			for (Comment comment : post.getComments()) {
				CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
				commentDTO.setPost(null);
				commentDTOs.add(commentDTO);

			}

			postDTO.setComments(commentDTOs);
			postDTOs.add(postDTO);
		}

		Page<PostDTO> retVal = new PageImpl<>(postDTOs, page, postDTOs.size());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}
	
	@GetMapping(value = "/api/posts/latest")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<PostDTO> getLatestPost() {
	
		List<Post> posts = postService.findAllDesc();
		Post post = posts.get(0);
		
		PostDTO postDTO = modelMapper.map(post, PostDTO.class);
		List<CommentDTO> commentDTOs = new ArrayList<>();

		for (Comment comment : post.getComments()) {
			CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
			commentDTO.setPost(null);
			commentDTOs.add(commentDTO);
		}

		
//		if (post == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		
//		PostDTO postDTO = new PostDTO(post);
		return new ResponseEntity<>(postDTO, HttpStatus.OK);
	}
	
	@GetMapping(value = "/api/posts/size")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public Integer getPostSize() {
		List<Post> posts = postService.findAllDesc();
		Integer postSize = posts.size();
		return postSize;
		
	}

}
