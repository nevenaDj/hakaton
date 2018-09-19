package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.example.model.Attachment;
import com.example.repository.AttachmentRepository;

@Component
public class AttachmentService {
	@Autowired
	private AttachmentRepository attachmentRepository;
	
	public Optional<Attachment> findOne(Long id) {
		return attachmentRepository.findById(id);
	}
	
	public Page<Attachment> findAllPaged(Pageable page) {
		return attachmentRepository.findAll(page);
	}

	public List<Attachment> findAll() {
		return attachmentRepository.findAll();
	}

	public Attachment save(Attachment category) {
		return attachmentRepository.save(category);
	}

	public void remove(Long id) {
		attachmentRepository.deleteById(id);
	}
}
