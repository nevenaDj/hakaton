package com.example.dto;

import com.example.model.Comment;

public class CommentDTO {
	private Long id;
	private String text;
	private String date;
	private String time;
	private UserDTO user;
	private AttachmentDTO att;
	private PostDTO post;

	public CommentDTO() {

	}

	public CommentDTO(Comment c) {
		super();
		this.id = c.getId();
		this.text = c.getText();
		this.date = c.getDate();
		this.time = c.getTime();
		this.user = new UserDTO(c.getUser());
		this.att = new AttachmentDTO(c.getAttachment());
		this.post = new PostDTO(c.getPost());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public AttachmentDTO getAtt() {
		return att;
	}

	public void setAtt(AttachmentDTO att) {
		this.att = att;
	}

	public PostDTO getPost() {
		return post;
	}

	public void setPost(PostDTO post) {
		this.post = post;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

}
