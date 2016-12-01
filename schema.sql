CREATE DATABASE Robots;

USE Robots;

CREATE TABLE bots (
    id  INT NOT NULL AUTO_INCREMENT,
    walker VARCHAR(40) NOT NULL,
    UNIQUE (walker),
    PRIMARY key (id),

);
-- mysql -u root < schema.sql