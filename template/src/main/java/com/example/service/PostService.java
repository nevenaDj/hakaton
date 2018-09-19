package com.example.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.example.model.Post;
import com.example.repository.PostRepository;

@Component
public class PostService {
	@Autowired
	private PostRepository postRepository;

	public Optional<Post> findOne(Long id) {
		return postRepository.findById(id);
	}

	public Page<Post> findAllPaged(Pageable page) {
		return postRepository.findAll(page);
	}

	public List<Post> findAll() {
		return postRepository.findAll();
	}

	public Post save(Post category) {
		return postRepository.save(category);
	}

	public void remove(Long id) {
		postRepository.deleteById(id);
	}

	public Page<Post> findAllPostsOfUser(String username, Pageable pageable) {
		return postRepository.findAllPostsOfUser(username, pageable);
	}
	
	public String TimeToString() {
		String s = LocalTime.now().getHour() + ":" + LocalTime.now().getMinute();
			
		return s;
	}
	
	public String DateToString() {
		String s = LocalDate.now().getYear() + "-" + LocalDate.now().getMonth() + "-" + LocalDate.now().getDayOfMonth();
		
		return s;
	}

	public Page<Post> findAllPagedDesc(Pageable page) {
		return postRepository.findAllOrderByIdDesc(page);
	}

	public List<Post> findAllDesc() {
		// TODO Auto-generated method stub
		return postRepository.findAllOrderByIdDesc();
	}
}
