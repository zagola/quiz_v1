package org.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class Hello {

    @GetMapping("/num")
    public Num num() {
        return questionsRepository.count();
    }

    @Autowired
    private QuestionsRepository questionsRepository;

    @GetMapping("/question/{id}")
    public Question question(@PathVariable("id") int id) {
        return questionsRepository.question(id);
    }
    @GetMapping("/correct/{id}")
    public Check check (@PathVariable("id") int id) {
        return questionsRepository.check(id);
    }

}