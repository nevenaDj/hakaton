package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.example.model.Label;
import com.example.repository.LabelRepository;

@Component
public class LabelService {
	@Autowired
	private LabelRepository labelRepository;
	
	public Optional<Label> findOne(Long id) {
		return labelRepository.findById(id);
	}
	
	public Page<Label> findAllPaged(Pageable page) {
		return labelRepository.findAll(page);
	}

	public List<Label> findAll() {
		return labelRepository.findAll();
	}

	public Label save(Label category) {
		return labelRepository.save(category);
	}

	public void remove(Long id) {
		labelRepository.deleteById(id);
	}
}
