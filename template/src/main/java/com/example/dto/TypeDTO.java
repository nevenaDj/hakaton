package com.example.dto;

import com.example.model.Type;

public class TypeDTO {
	private Long id;
	private String name;
	
	public TypeDTO() {
		
	}
	
	public TypeDTO(String name) {
		super();
		this.name = name;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public TypeDTO(Type type) {
		this.id = type.getId();
		this.name = type.getName();
	}
	
	
}
