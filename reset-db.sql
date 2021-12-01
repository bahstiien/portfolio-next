DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
 `id` int NOT NULL AUTO_INCREMENT,
 `mainPictureUrl` VARCHAR(255) NOT NULL,
 `title` VARCHAR(255) NOT NULL,
 `description` TEXT NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `project` (mainPictureUrl, title, description) VALUES ('https://images.unsplash.com/photo-1602087594298-706ccc894bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
', 'Le lyon des saisons', 'Gaout zo ezhomm diogelroez live-bevañ aezamant diogelroez aezamant da tu deus hag kozh da kozh en klañv dilabour'), ('https://images.unsplash.com/photo-1508285407988-8e4121afe8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 'space-park', "e c'hoarvez e gwir diegezh hini zo koll deus dezhañ ul en e dilabour mac'hagnet e da bezañ tu gwi"); 
DROP TABLE IF EXISTS `project`;


