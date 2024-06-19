var current_answer = "hehe";
var questionCounter = 1;
var lastQuestion = 4;

/* Validation of the selected answer and feedback to user.
   Controlling the visibility of the button next.
*/
var check_answer = function(data) {

    if(current_answer==data["correct"]) {
        $('#infobox').html("Poprawna odpowiedź!");
        $("#next").attr('disabled', false);
        if(questionCounter >= lastQuestion) {
             $('#infobox').html("Gratulacje!");
        }
    } else {
        $('#infobox').html("Zła odpowiedź!!");
        $("#next").attr('disabled', true);
    }

    console.log(data);
    console.log(current_answer);
};

/* Checking the correct answer for the current question. */
var on_check_click = function() {
    $.getJSON("correct/" + questionCounter, check_answer);
};

/* Update UI with quiz elements. */
var fetch_question = function(data) {
    console.log(data);
    $("#question").html(data["question"]);
    $("#ansA").html(data["ansA"]);
    $("#ansB").html(data["ansB"]);
    $("#ansC").html(data["ansC"]);
    $("#ansD").html(data["ansD"]);
};

/* Fetch first question at the beginning. */
$.getJSON("question/1", fetch_question);

/* Connect check button click with handler. */
$(document).on('click', '#check', on_check_click);

/* Restore original color of answers. */
var reset_color= function() {
    $("#ansA").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansB").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansC").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansD").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
}

/* Change the color of selected answer. */
var on_answer_click = function() {
    reset_color();
    $(this).css("background-color", "lightgreen");
    console.log($(this).attr("id"));
    current_answer = $(this).attr("id");
};

$(document).on('click', '#ansA', on_answer_click);
$(document).on('click', '#ansB', on_answer_click);
$(document).on('click', '#ansC', on_answer_click);
$(document).on('click', '#ansD', on_answer_click);

/*  Move to the next question (if the correct answer was selected). */
var next_question = function() {
    $('#infobox').html("Zaznacz poprawna odpowiedź.");
    $("#next").attr('disabled', true);
    questionCounter = questionCounter + 1;
    $('#progress').attr('value', questionCounter);
    $.getJSON("question/" + questionCounter, fetch_question);
    reset_color();

/* Hide the next button at the last question. */
    if (questionCounter >= lastQuestion) {
        $("#next").css('display', 'none');
    }
}

$(document).on('click', '#next', next_question);

/* Progress bar management. */
var fetch_number_of_questions = function(data) {
   console.log(data);
    $('#progress').attr('max', data["num"]);
    $('#progress').attr('value', questionCounter);
}
$.getJSON("num", fetch_number_of_questions);
