package com.example.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Label {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String text;
	
	@JsonIgnore
	@OneToMany(mappedBy = "label", fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
	private Set<PostLabels> postLabels = new HashSet<PostLabels>();
	
	public Label() {
		
	}
	
	public Label(String text) {
		super();
		this.text = text;
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

	public Set<PostLabels> getPostLabels() {
		return postLabels;
	}

	public void setPostLabels(Set<PostLabels> postLabels) {
		this.postLabels = postLabels;
	}
	
	
}
