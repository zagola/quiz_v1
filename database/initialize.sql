create database quiz_v1;
use quiz_v1;
create table Questions (question varchar(256), id int, ansA varchar(256), ansB varchar(256), ansC varchar(256), ansD varchar(256), correct varchar(1));
create user 'quizuser'@'%' identified by 'kotki123';
grant select on quiz_v1.Questions to 'quizuser'@'%';