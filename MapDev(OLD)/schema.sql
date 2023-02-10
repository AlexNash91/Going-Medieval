DROP DATABASE IF EXISTS medieval_db;

CREATE DATABASE medieval_db;

USE medieval_db;

CREATE TABLE mapset (
id INT NOT NULL AUTO_INCREMENT,
x INT NOT NULL,
y INT NOT NULL,
spr VARCHAR(30) NOT NULL,
def VARCHAR(30) NOT NULL,
res VARCHAR(30) NOT NULL,
own VARCHAR(30),
PRIMARY KEY (id)
);