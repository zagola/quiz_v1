package org.example;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Question {
    String  question;
    String ansA;
    String ansB;
    String ansC;
    String ansD;
}
