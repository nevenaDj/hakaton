package com.example.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Component;

import com.example.dto.CommentDTO;
import com.example.model.Comment;
import com.example.repository.CommentRepository;

@Component
public class CommentService {

	@Autowired
	CommentRepository commentRepository;

	public List<Comment> findAll() {
		return commentRepository.findAll();
	}

	public Comment findOne(Long id) {
		return commentRepository.getOne(id);
	}

	public Comment save(Comment comment) {
		return commentRepository.save(comment);
	}

	public void remove(Long id) {
		// TODO Auto-generated method stub

	}

	public Page<Comment> findAll(Pageable page) {
		return commentRepository.findAll(page);
	}
	
	public String TimeToString() {
		String s = LocalTime.now().getHour() + ":" + LocalTime.now().getMinute();
			
		return s;
	}
	
	public String DateToString() {
		String s = LocalDate.now().getYear() + "-" + LocalDate.now().getMonth() + "-" + LocalDate.now().getDayOfMonth();
		
		return s;
	}

}
