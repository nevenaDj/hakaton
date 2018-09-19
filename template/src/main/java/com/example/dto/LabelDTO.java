package com.example.dto;

import com.example.model.Label;

public class LabelDTO {
	private Long id;
	private String text;
	
	public LabelDTO () {
		
	}
	
	public LabelDTO(Label label) {
		super();
		this.id = label.getId();
		this.text = label.getText();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	
}
