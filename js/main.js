$(document).ready(function() {
    var lady_lake = 0;
    var people_amount = 8;
    $("#lady_lake_bottom").click(function() {
        if (lady_lake == 0 && people_amount >= 7) {
            lady_lake = 1;
            // $("#lady_tf").fadeOut();
            $("#lady_lake_bottom").html('<div id = "lady_tf"> Enable </div>');
            // $("#lady_tf").fadeIn();

        } else if (lady_lake == 1) {
            lady_lake = 0;
            // $("#lady_tf").fadeOut();
            $("#lady_lake_bottom").html('<div id = "lady_tf"> Disable </div>');
            // $("#lady_tf").fadeIn();
        }
    });
    $("#5_p").click(function() {
        people_amount = 5;
        $("#num_of_people").html("目前" + people_amount + "人");
    });
    $("#6_p").click(function() {
        people_amount = 6;
        $("#num_of_people").html("目前" + people_amount + "人");
    });
    $("#7_p").click(function() {
        people_amount = 7;
        $("#num_of_people").html("目前" + people_amount + "人");
    });
    $("#8_p").click(function() {
        people_amount = 8;
        $("#num_of_people").html("目前" + people_amount + "人");
    });
    $("#9_p").click(function() {
        people_amount = 9;
        $("#num_of_people").html("目前" + people_amount + "人");
    });
    $("#10_p").click(function() {
        people_amount = 10;
        $("#num_of_people").html("目前" + people_amount + "人");
    });



})