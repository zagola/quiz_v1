package org.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class Hello {
    @Autowired private QuestionsRepository questionsRepository;

    /**
     * Access question count
     *
     * @return the numbers of questions in DB.
     */
    @GetMapping("/num")
    public Num num() {
        return questionsRepository.count();
    }

    /**
     * Access question content
     *
     * @param id number of question
     * @return question and possible answers
     */
    @GetMapping("/question/{id}")
    public Question question(@PathVariable("id") int id) {
        return questionsRepository.question(id);
    }

    /**
     * Access correct answer
     * @param id number of question
     * @return correct answer symbol
     */
    @GetMapping("/correct/{id}")
    public Check check (@PathVariable("id") int id) {
        return questionsRepository.check(id);
    }

}