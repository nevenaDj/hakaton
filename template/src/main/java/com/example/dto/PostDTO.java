package com.example.dto;

import java.util.List;

import com.example.model.Post;

public class PostDTO {
	private Long id;
	private String text;
	private String date;
	private String time;
	private UserDTO user;
	private double rating;
	private Long views;
	private AttachmentDTO att;
	private String location;
	private List<CommentDTO> comments;

	public PostDTO() {

	}

	public PostDTO(Post post) {
		super();
		this.id = post.getId();
		this.text = post.getText();
		this.date = post.getDate();
		this.time = post.getTime();
		this.user = new UserDTO(post.getUser());
		this.rating = post.getRating();
		this.views = post.getViews();
		this.att = new AttachmentDTO(post.getAttachment());
		this.location = post.getLocation();
	}

	public Long getId() {
		return id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
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

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public Long getViews() {
		return views;
	}

	public void setViews(Long views) {
		this.views = views;
	}

	public AttachmentDTO getAtt() {
		return att;
	}

	public void setAtt(AttachmentDTO att) {
		this.att = att;
	}

	public List<CommentDTO> getComments() {
		return comments;
	}

	public void setComments(List<CommentDTO> comments) {
		this.comments = comments;
	}

}
