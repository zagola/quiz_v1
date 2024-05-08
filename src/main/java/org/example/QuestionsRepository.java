package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class QuestionsRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public Num count() {
        return jdbcTemplate.queryForObject("SELECT count(*) as \"num\" FROM Questions", BeanPropertyRowMapper.newInstance(Num.class));
    }

    public Question question(int id) {
        return jdbcTemplate.queryForObject("SELECT question, ansA, ansB, ansC, ansD FROM Questions where id = ?", BeanPropertyRowMapper.newInstance(Question.class), id);
    }

    public Check check(int id) {
        return jdbcTemplate.queryForObject("SELECT correct FROM Questions where id = ?", BeanPropertyRowMapper.newInstance(Check.class), id);
    }
}


