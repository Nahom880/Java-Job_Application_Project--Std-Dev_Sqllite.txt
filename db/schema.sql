-- REDO SCHEMA


CREATE DATABASE willinterview;
use willinterview;

CREATE TABLE calender
(
  calenderId int NOT NULL AUTO_INCREMENT,
  date varchar(255) NOT NULL,
  time varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  primary key (calenderId)
);
