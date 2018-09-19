
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password, first_name, last_name) values ('admin', '$2a$12$S8g1q3Q6TlWTXRQOdlIGXeLaWRqSn2xJxcVCPwjKnUyGqUbonRa2i', 'User', 'Prvi');
-- password is 'user' (bcrypt encoded)
insert into user (username, password, first_name, last_name) values ('user', '$2a$04$Amda.Gm4Q.ZbXz9wcohDHOhOBaNQAkSS1QO26Eh8Hovu3uzEpQvcq', 'User', 'Drugi');


insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- user has ROLE_USER

insert into type (name) values ('image');
insert into type (name) values ('video');
insert into type (name) values ('url');

insert into attachment(content, type_id) values ('urlattachment', 1);
insert into attachment(content, type_id) values ('urlattachment', 2);

insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post1', 1, 5, '2018-01-01', '15:30', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post2', 1, 5, '2018-01-01', '15:10', 3, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post3', 2, 5, '2018-01-01', '15:20', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post4', 1, 5, '2018-01-01', '15:40', 4, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post5', 1, 5, '2018-01-01', '15:50', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post6', 2, 5, '2018-01-01', '15:30', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post7', 1, 5, '2018-01-01', '15:10', 1, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post8', 2, 5, '2018-01-01', '19:20', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post9', 2, 5, '2018-01-01', '18:40', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post10', 1, 5, '2018-01-01', '16:40', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post11', 1, 5, '2018-01-01', '19:30', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post12', 1, 5, '2018-01-01', '18:10', 3, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post13', 2, 5, '2018-01-01', '13:20', 2, 1, 'novi sad', 2);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post14', 1, 5, '2018-01-01', '15:10', 4, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post15', 1, 5, '2018-01-01', '12:30', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post16', 2, 5, '2018-01-01', '14:30', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post17', 1, 5, '2018-01-01', '13:10', 1, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post18', 2, 5, '2018-01-01', '12:20', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post19', 2, 5, '2018-01-01', '11:40', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post20', 1, 5, '2018-01-01', '10:40', 5, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post21', 2, 5, '2018-01-01', '12:20', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post22', 2, 5, '2018-01-01', '11:40', 2, 1, 'novi sad', 1);
insert into post (text, user_id, rating, date, time, views, attachment_id, location, counter) values ('new post23', 1, 5, '2018-01-01', '10:40', 5, 1, 'novi sad',1);

insert into label(text) values ('#super');
insert into label(text) values ('#great');
insert into label(text) values ('#awesome');
insert into label(text) values ('#cool');

insert into post_labels(post_id, label_id) values (1,1);
insert into post_labels(post_id, label_id) values (1,2);
insert into post_labels(post_id, label_id) values (1,3);
insert into post_labels(post_id, label_id) values (2,1);
insert into post_labels(post_id, label_id) values (2,4);
insert into post_labels(post_id, label_id) values (3,3);
insert into post_labels(post_id, label_id) values (3,1);
insert into post_labels(post_id, label_id) values (4,1);
insert into post_labels(post_id, label_id) values (5,1);
insert into post_labels(post_id, label_id) values (5,4);
insert into post_labels(post_id, label_id) values (5,3);
insert into post_labels(post_id, label_id) values (6,1);
insert into post_labels(post_id, label_id) values (6,4);

insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 1', '2018-01-01', '10:30',1,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 2', '2018-01-01', '11:30',1,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 3', '2018-01-01', '12:30',1,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 4', '2018-01-01', '13:30',1,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 5', '2018-01-01', '14:30',2,2,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 6', '2018-01-01', '15:30',2,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 7', '2018-01-01', '16:30',13,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 8', '2018-01-01', '17:30',13,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 9', '2018-01-01', '18:30',13,2,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 10', '2018-01-01', '19:30',3,2,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 11', '2018-01-01', '15:10',3,2,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 12', '2018-01-01', '16:20',4,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 13', '2018-01-01', '17:30',4,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 14', '2018-01-01', '18:40',4,2,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 15', '2018-01-01', '19:50',4,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 16', '2018-01-01', '20:40',5,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 17', '2018-01-01', '21:40',6,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 18', '2018-01-01', '22:40',6,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 19', '2018-01-01', '23:40',6,1,2);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 20', '2018-01-01', '12:40',7,1,1);
insert into comment(text,date,time, post_id, user_id, attachment_id) values ('tekstualni tekst 21', '2018-01-01', '15:40',8,1,1);

