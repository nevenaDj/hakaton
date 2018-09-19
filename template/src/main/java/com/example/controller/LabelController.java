package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.LabelDTO;
import com.example.model.Label;
import com.example.service.LabelService;

@RestController
public class LabelController {
	
	@Autowired
	LabelService labelService;
	
	@GetMapping(value = "api/labels")
	public ResponseEntity<Page<LabelDTO>> getLabelsPage(Pageable page) {
		List<Label> labels = labelService.findAll();
		List<LabelDTO> retVal = new ArrayList<>();

		for (Label c : labels) {
			LabelDTO dto = new LabelDTO(c);
			retVal.add(dto);
		}

		Page<LabelDTO> retVal2 = new PageImpl<>(retVal, page, retVal.size());

		return new ResponseEntity<>(retVal2, HttpStatus.OK);
	}
}
