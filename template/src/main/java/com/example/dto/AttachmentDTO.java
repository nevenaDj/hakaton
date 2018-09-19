package com.example.dto;

import com.example.model.Attachment;

public class AttachmentDTO {
	private Long id;
	private String content;
	private TypeDTO type;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public TypeDTO getType() {
		return type;
	}
	public void setType(TypeDTO type) {
		this.type = type;
	}
	public AttachmentDTO(Long id, String content, TypeDTO type) {
		super();
		this.id = id;
		this.content = content;
		this.type = type;
	}
	public AttachmentDTO() {
		super();
	}
	
	public AttachmentDTO(Attachment att) {
		super();
		this.id = att.getId();
		this.content = att.getContent();
		this.type = new TypeDTO(att.getType());
	}
	
	
	
}
