var current_answer = "hehe";

var check_answer = function(data) {
    if(current_answer==data["correct"]) {
        $('#infobox').html("Poprawna odpowiedź!");
    } else {
        $('#infobox').html("Zła odpowiedź!!");
    }

    console.log(data);
    console.log(current_answer);
};

var on_check_click = function() {
    $.getJSON("correct/1", check_answer);

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

var on_answer_click = function() {
    $("#ansA").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansB").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansC").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");
    $("#ansD").css("background-color", "hsl(var(--bulma-notification-h),var(--bulma-notification-s),var(--bulma-notification-background-l))");

    $(this).css("background-color", "lightgreen");

    console.log($(this).attr("id"));
    current_answer = $(this).attr("id");
};

$(document).on('click', '#ansA', on_answer_click);
$(document).on('click', '#ansB', on_answer_click);
$(document).on('click', '#ansC', on_answer_click);
$(document).on('click', '#ansD', on_answer_click);