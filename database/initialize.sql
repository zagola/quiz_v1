create database quiz_v1;
use quiz_v1;
create table Questions (question varchar(256), id int, ansA varchar(256), ansB varchar(256), ansC varchar(256), ansD varchar(256), correct varchar(1));
create user 'quizuser'@'%' identified by 'kotki123';
grant select on quiz_v1.Questions to 'quizuser'@'%';

insert into Questions (question, id, ansA, ansB, ansC, ansD, correct) values ("Which Disney character famously leaves a glass slipper behind at a royal ball?
", 1, "Pocahontas", "Sleeping Beauty", "Cinderella", "Elsa", "ansC");
insert into Questions (question, id, ansA, ansB, ansC, ansD, correct) values ("Look at this series: 22, 21, 23, 22, 24, 23, … What number should come next?", 2, "25", "20", "22", "21", "ansA");
insert into Questions (question, id, ansA, ansB, ansC, ansD, correct) values ("There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",  3, "284", "184", "441", "141", "ansD");
insert into Questions (question, id, ansA, ansB, ansC, ansD, correct) values ("What is the only mammal that can fly?", 4, "Squirrel", "Ostrich", "Bat", "Cat", "ansC");