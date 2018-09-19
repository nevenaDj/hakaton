package com.example.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	@Query("SELECT p FROM Post p WHERE p.user.username = ?1")
	public Page<Post> findAllPostsOfUser(String username, Pageable pageable);
	
	@Query("SELECT p FROM Post p ORDER BY p.id DESC")
	List<Post> findAllOrderByIdDesc();

	@Query("SELECT p FROM Post p ORDER BY p.id DESC")
	Page<Post> findAllOrderByIdDesc(Pageable page);

}
