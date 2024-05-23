var current_answer = "hehe";
var questionCounter = 1;
var lastQuestion = 4;

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

var on_check_click = function() {
    $.getJSON("correct/" + questionCounter, check_answer);
};

var fetch_question = function(data) {
    console.log(data);
    $("#question").html(data["question"]);
    $("#ansA").html(data["ansA"]);
    $("#ansB").html(data["ansB"]);
    $("#ansC").html(data["ansC"]);
    $("#ansD").html(data["ansD"]);
};

$.getJSON("question/1", fetch_question);
$(document).on('click', '#check', on_check_click);

var reset_color= function() {
    $("#ansA").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansB").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansC").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansD").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
}

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

var next_question = function() {
    $('#infobox').html("Zaznacz poprawna odpowiedź.");
    $("#next").attr('disabled', true);
    questionCounter = questionCounter + 1;
    $.getJSON("question/" + questionCounter, fetch_question);
    reset_color();

    if (questionCounter >= lastQuestion) {
        $("#next").css('display', 'none');
    }
}

$(document).on('click', '#next', next_question);