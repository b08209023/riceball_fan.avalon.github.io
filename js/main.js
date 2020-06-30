function shuffle(arr) {
    // KN洗牌演算法
    var length = arr.length,
        temp,
        random;
    while (0 != length) {
        random = Math.floor(Math.random() * length)
        length--;
        // swap
        temp = arr[length];
        arr[length] = arr[random];
        arr[random] = temp;
    }
    return arr;
}
// /*
function fadein_voting() {
    $("#vote_1").fadeOut();
    $("#vote_2").fadeOut();
    $("#vote_3").fadeOut();
    $("#vote_4").fadeOut();
    $("#vote_5").fadeOut();
    $("#vote_1").fadeIn();
    $("#vote_2").fadeIn();
    $("#vote_3").fadeIn();
    $("#vote_4").fadeIn();
    $("#vote_5").fadeIn();
}

// */
$(document).ready(function() {
    var lady_lake = 0;
    var people_amount = 8;
    var array = [];
    var index_char_setting = 0;
    $("#lady_lake_bottom").click(function() {
        if (lady_lake == 0 && people_amount >= 7) {
            lady_lake = 1;
            // $("#lady_tf").fadeOut();
            $("#lady_lake_bottom").html('<div id = "lady_tf"> Enable </div>');
            $("#lake_lady").fadeIn();
            // $("#lady_tf").fadeIn();

        } else if (lady_lake == 1) {
            lady_lake = 0;
            $("#lady_lake_bottom").html('<div id = "lady_tf"> Disable </div>');
            $("#lake_lady").fadeOut();
            // $("#lady_tf").fadeIn();
        }
    });
    $("#5_p").click(function() {
        people_amount = 5;
        $("#num_of_people").html("目前" + people_amount + "人");
        if (lady_lake == 1) {
            lady_lake = 0;
            $("#lady_lake_bottom").html('<div id = "lady_tf"> Disable </div>');
            $("#lake_lady").fadeOut();
        }
    });
    $("#6_p").click(function() {
        people_amount = 6;
        $("#num_of_people").html("目前" + people_amount + "人");
        if (lady_lake == 1) {
            lady_lake = 0;
            $("#lady_lake_bottom").html('<div id = "lady_tf"> Disable </div>');
            $("#lake_lady").fadeOut();
        }
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
    $("#start").click(function() {
        $("#door").fadeOut(500);
        $("#char_setting2").fadeIn(500);
        bad_man = 0, bad_amount = 0;
        good_man = 0, good_amount = 0;
        if (people_amount == 5) {
            bad_man = 2;
            good_man = 3;
        }
        if (people_amount == 6) {
            bad_man = 2;
            good_man = 4;
        }
        if (people_amount == 7) {
            bad_man = 3;
            good_man = 4;
        }
        if (people_amount == 8) {
            bad_man = 3;
            good_man = 5;
        }
        if (people_amount == 9) {
            bad_man = 3;
            good_man = 6;
        }
        if (people_amount == 10) {
            bad_man = 4;
            good_man = 6;
        }
        $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
            // for (i = 0; i < people_amount; i++) {
            // array[i] = i;
            // };

        // $("#abs1").click(function() {
        // abs1 = 1;
        // index++;
        // });
    });
    b_1 = 0, b_2 = 0, b_3 = 0, b_4 = 0;
    g_1 = 0, g_2 = 0, g_3 = 0, g_4 = 0, g_5 = 0, g_6 = 0;
    $("#b_1").click(function() {
        if (bad_amount < bad_man && b_1 == 0) {
            array.push("b_mordred");
            bad_amount++;
            b_1 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#b_2").click(function() {
        if (bad_amount < bad_man && b_2 == 0) {
            array.push("b_assassin");
            bad_amount++;
            b_2 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#b_3").click(function() {
        if (bad_amount < bad_man && b_3 == 0) {
            array.push("b_mokina");
            bad_amount++;
            b_3 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#b_4").click(function() {
        if (bad_amount < bad_man && b_4 == 0) {
            array.push("b_bad");
            bad_amount++;
            b_4 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_1").click(function() {
        if (good_amount < good_man && g_1 == 0) {
            array.push("g_maylin");
            good_amount++;
            g_1 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_2").click(function() {
        if (good_amount < good_man && g_2 == 0) {
            array.push("g_par");
            good_amount++;
            g_2 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_3").click(function() {
        if (good_amount < good_man && g_3 == 0) {
            array.push("g_loyal1");
            good_amount++;
            g_3 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_4").click(function() {
        if (good_amount < good_man && g_4 == 0) {
            array.push("g_loyal2");
            good_amount++;
            g_4 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_5").click(function() {
        if (good_amount < good_man && g_5 == 0) {
            array.push("g_loyal3");
            good_amount++;
            g_5 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_6").click(function() {
        if (good_amount < good_man && g_6 == 0) {
            array.push("g_loyal4");
            good_amount++;
            g_6 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#choicing_down").click(function() {
        amo = good_amount + bad_amount;
        if ((amo == people_amount && b_2 == 1 && g_1 == 1)) {
            // alert("準備輪流看角色");
            array = shuffle(array);
            $("#char_setting2").fadeOut(500);
            $("#char_setting").fadeIn(500);
        } else {
            if (amo != people_amount)
                alert("沒選完人")
            else if (g_1 == 0)
                alert("沒選到梅林")
            else if (b_2 == 0)
                alert("沒選到刺客")
        }
    });
    var index = 0;
    var clicked = 0;
    mission_arr = [];
    $("#char_photo").click(function() {
        if (index == people_amount) {
            $("#char_setting").fadeOut(500);
            $("#gaming_mainpart").fadeIn(1000);
            if (people_amount < 7) {
                $("#mission_four_note").html("");
            };
            if (people_amount == 5) {
                $("#mission_1").html("2");
                $("#mission_2").html("3");
                $("#mission_3").html("2");
                $("#mission_4").html("3");
                $("#mission_5").html("3");
                mission_arr = [2, 3, 2, 3, 3];
            } else if (people_amount == 6) {
                $("#mission_1").html("2");
                $("#mission_2").html("3");
                $("#mission_3").html("4");
                $("#mission_4").html("3");
                $("#mission_5").html("4");
                mission_arr = [2, 3, 4, 3, 4];
            } else if (people_amount == 7) {
                $("#mission_1").html("2");
                $("#mission_2").html("3");
                $("#mission_3").html("3");
                $("#mission_4").html("4");
                $("#mission_5").html("4");
                mission_arr = [2, 3, 3, 4, 4];
            } else if (people_amount == 8) {
                $("#mission_1").html("3");
                $("#mission_2").html("4");
                $("#mission_3").html("4");
                $("#mission_4").html("5");
                $("#mission_5").html("5");
                mission_arr = [3, 4, 4, 5, 5];
            } else if (people_amount == 9) {
                $("#mission_1").html("3");
                $("#mission_2").html("4");
                $("#mission_3").html("4");
                $("#mission_4").html("5");
                $("#mission_5").html("5");
                mission_arr = [3, 4, 4, 5, 5];
            } else if (people_amount == 10) {
                $("#mission_1").html("3");
                $("#mission_2").html("4");
                $("#mission_3").html("4");
                $("#mission_4").html("5");
                $("#mission_5").html("5");
                mission_arr = [3, 4, 4, 5, 5];
            };
        } else if (clicked == 0) {
            clicked = 1;
            // alert("You clicked, is char");
            if (array[index] == "b_mordred") {
                $("#char_article").html("您是莫德雷德(壞人)<br>梅林不知道你是壞人<br>可以選擇使用聖杯或者髒杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "b_assassin") {
                $("#char_article").html("您是殺手<br>若好人成功達成3次任務，則您可指認梅林是誰<br>可以選擇使用聖杯或者髒杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "b_mokina") {
                $("#char_article").html("您是莫甘娜<br>您要假裝您是梅林，包括派西維爾(如果有此角色)認人時<br>可以選擇使用聖杯或者髒杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "b_bad") {
                $("#char_article").html("您是壞人<br>可以選擇使用聖杯或髒杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "g_maylin") {
                $("#char_article").html("您是梅林<br>您知道壞人是誰，但不知道莫德雷德的身分(不知道是誰)<br>您只能使用聖杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "g_par") {
                $("#char_article").html("您是派西維爾<br>您知道梅林與莫甘娜是誰(但不知分別身分)<br>您只能使用聖杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "g_loyal1") {
                $("#char_article").html("您是忠臣<br>您只能使用聖杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "g_loyal2") {
                $("#char_article").html("您是忠臣<br>您只能使用聖杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "g_loyal3") {
                $("#char_article").html("您是忠臣<br>您只能使用聖杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            } else if (array[index] == "g_loyal4") {
                $("#char_article").html("您是忠臣<br>您只能使用聖杯");
                $("#char_photo").html('<div id ="' + array[index] + '"></div>');
            };
        } else if (clicked == 1) {
            index++;
            clicked = 0;
            // alert("You clicked, is background");
            if (index != people_amount)
                $("#char_article").html("請點擊右圖以查看角色<br>現在是第" + (index + 1) + "人");
            else
                $("#char_article").html("請點擊右圖以繼續遊戲");

            $("#char_photo").html('<div id ="char_checking_background"></div>');
        };

    });
    // 任務設定
    success_total = 0, fail_total = 0;

    mission_pocessing = 0;
    voting_fail = 0;
    mission_index = 0;
    m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0;
    $("#mission1").click(function() {
        if (mission_pocessing == 0 && m1 == 0) {
            mission_pocessing = 1;
            m1 = 1;
            voting_fail = 0;
            mission_index = 0;
            $("#vote_1").html("");
            $("#vote_2").html("");
            $("#vote_3").html("");
            $("#vote_4").html("");
            $("#vote_5").html("");
            $("#topic").html("現在是在第" + (mission_index + 1) + "次任務，需要" + mission_arr[mission_index] + "人")
        } else if (m1 == 0) {
            alert("任務進行中\n不能隨意切換場次");
        } else {
            alert("已經進行過了!")
        };
    });
    $("#mission2").click(function() {
        if (mission_pocessing == 0 && m2 == 0) {
            mission_pocessing = 1;
            voting_fail = 0;
            m2 = 1;
            mission_index = 1;
            $("#vote_1").html("");
            $("#vote_2").html("");
            $("#vote_3").html("");
            $("#vote_4").html("");
            $("#vote_5").html("");
            $("#topic").html("現在是在第" + (mission_index + 1) + "次任務，需要" + mission_arr[mission_index] + "人")
        } else if (m2 == 0) {
            alert("任務進行中\n不能隨意切換場次");
        } else {
            alert("已經進行過了!")
        };
    });
    $("#mission3").click(function() {
        if (mission_pocessing == 0 && m3 == 0) {
            mission_pocessing = 1;
            voting_fail = 0;
            mission_index = 2;
            m3 = 1;
            $("#vote_1").html("");
            $("#vote_2").html("");
            $("#vote_3").html("");
            $("#vote_4").html("");
            $("#vote_5").html("");
            $("#topic").html("現在是在第" + (mission_index + 1) + "次任務，需要" + mission_arr[mission_index] + "人")
        } else if (m3 == 0) {
            alert("任務進行中\n不能隨意切換場次");
        } else {
            alert("已經進行過了!")
        };
    });
    $("#mission4").click(function() {
        if (mission_pocessing == 0 && m4 == 0) {
            mission_pocessing = 1;
            voting_fail = 0;
            m4 = 1;
            mission_index = 3;
            $("#vote_1").html("");
            $("#vote_2").html("");
            $("#vote_3").html("");
            $("#vote_4").html("");
            $("#vote_5").html("");
            $("#topic").html("現在是在第" + (mission_index + 1) + "次任務，需要" + mission_arr[mission_index] + "人")
        } else if (m4 == 0) {
            alert("任務進行中\n不能隨意切換場次");
        } else {
            alert("已經進行過了!")
        };
    });
    $("#mission5").click(function() {
        if (mission_pocessing == 0 && m5 == 0) {
            mission_pocessing = 1;
            m5 = 1;
            voting_fail = 0;
            mission_index = 4;
            $("#vote_1").html("");
            $("#vote_2").html("");
            $("#vote_3").html("");
            $("#vote_4").html("");
            $("#vote_5").html("");
            $("#topic").html("現在是在第" + (mission_index + 1) + "次任務，需要" + mission_arr[mission_index] + "人")
        } else if (m5 == 0) {
            alert("任務進行中\n不能隨意切換場次");
        } else {
            alert("已經進行過了!")
        };
    });

    lady_check = 0;
    s_f = [1, 0];
    $("#vote_result_success").click(function() {
        if (mission_pocessing == 1) {
            mission_pocessing = 0;
            voting_fail = 0;
            lady_check = 0;
            $("#gaming_mainpart").fadeOut();
            $("#mission_going_bg").fadeIn();
            $("#topic").html("請選擇現在場次")
        }
    });
    $("#vote_result_fail").click(function() {

        if (mission_pocessing == 1) {
            if (voting_fail == 4) {
                $("#gaming_mainpart").fadeOut();
                $("#end_game").html("任務失敗!<br>邪惡方獲勝!")
                $("#end_game").fadeIn();
            } else {
                voting_fail++;
                $("#vote_" + voting_fail).fadeOut();
            }
        }
    })
    voted_cup = 0;
    voted_cup_confirm = 0;
    fail_cup = 0;
    $("#title_cup").click(function() {
        s_f = shuffle(s_f);
        if (s_f[0] == 1) {
            $("#mission_going_1").html("<div id='success_m'></div>");
            $("#mission_going_2").html("<div id='fail_m'></div>");
        } else if (s_f[0] == 0) {

            $("#mission_going_2").html("<div id='success_m'></div>");
            $("#mission_going_1").html("<div id='fail_m'></div>");
        };
        voted_cup_confirm = 1;
    });
    // /*
    $("#mission_going_1").click(function() {
        if (voted_cup_confirm == 1) {
            voted_cup_confirm = 0;
            if (s_f[0] == 1) {
                // success_total++;
                voted_cup++;
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                // fadein_voting();
            } else {
                voted_cup++;
                fail_cup++;
                // fail_total++;
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                // fadein_voting();
            };
        };
        if (voted_cup == mission_arr[mission_index]) {
            if (people_amount > 6 && mission_index == 3 && fail_cup > 1) {
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                $("#mission_" + (mission_index + 1)).html("Fail!")
                fail_total++;
                voted_cup = 0;
                $("#gaming_mainpart").fadeIn();
                $("#mission_going_bg").fadeOut();
                fadein_voting();
                // alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                setTimeout(function() {
                    alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                    fail_cup = 0;
                }, 1000);
                if (fail_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
                    $("#end_game").fadeIn();
                };
                if (success_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務成功，刺客請指認!")
                    $("#end_game").fadeIn();
                };
            } else if ((people_amount < 7 || mission_index != 3) && fail_cup != 0) {

                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                $("#mission_" + (mission_index + 1)).html("Fail!")
                fail_total++;
                voted_cup = 0;
                $("#gaming_mainpart").fadeIn();
                $("#mission_going_bg").fadeOut();
                fadein_voting();
                // alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                setTimeout(function() {
                    alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                    fail_cup = 0;
                }, 1000);
                if (fail_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
                    $("#end_game").fadeIn();
                };
                if (success_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務成功，刺客請指認!")
                    $("#end_game").fadeIn();
                };
            } else {
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                $("#mission_" + (mission_index + 1)).html("<div style='font-size :5vmin;text-align: center;'>Success!</div>")
                success_total++;
                $("#gaming_mainpart").fadeIn();
                $("#mission_going_bg").fadeOut();
                fadein_voting();
                setTimeout(function() {
                    alert("任務成功!\n共有" + fail_cup + "個髒杯");
                    fail_cup = 0;
                }, 1000);
                voted_cup = 0;
                if (fail_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
                    $("#end_game").fadeIn();
                };
                if (success_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務成功，刺客請指認!")
                    $("#end_game").fadeIn();
                };
            };
        };
        if (fail_total == 3) {
            $("#mission_going_bg").fadeOut();
            $("#end_game").html("任務失敗!<br>邪惡方獲勝!")
                // break;
        };
        if (success_total == 3) {
            $("#mission_going_bg").fadeOut();
            $("#end_game").html("任務成功，刺客請指認!")
                // break;
        };
    });
    $("#mission_going_2").click(function() {
        if (voted_cup_confirm == 1) {
            voted_cup_confirm = 0;
            if (s_f[0] == 0) {
                // success_total++;
                voted_cup++;
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
            } else {
                voted_cup++;
                fail_cup++;
                // fail_total++;
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
            };
        };
        if (voted_cup == mission_arr[mission_index]) {
            if (people_amount > 6 && mission_index == 3 && fail_cup > 1) {
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                $("#mission_" + (mission_index + 1)).html("Fail!")
                fail_total++;
                voted_cup = 0;
                $("#gaming_mainpart").fadeIn();
                $("#mission_going_bg").fadeOut();
                fadein_voting();
                setTimeout(function() {
                    alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                    fail_cup = 0;
                }, 1000);
                if (fail_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
                    $("#end_game").fadeIn();
                };
                if (success_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務成功，刺客請指認!")
                    $("#end_game").fadeIn();
                };
            } else if ((people_amount < 7 || mission_index != 3) && fail_cup != 0) {

                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                $("#mission_" + (mission_index + 1)).html("Fail!")
                fail_total++;
                voted_cup = 0;
                $("#gaming_mainpart").fadeIn();
                $("#mission_going_bg").fadeOut();
                fadein_voting();
                // alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                setTimeout(function() {
                    alert("任務" + (mission_index + 1) + "失敗!\n共有" + fail_cup + "個髒杯");
                    fail_cup = 0;
                }, 1000);
                if (fail_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
                    $("#end_game").fadeIn();
                };
                if (success_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務成功，刺客請指認!")
                    $("#end_game").fadeIn();
                };
            } else {
                $("#mission_going_2").html("<div class='mission_bg'></div>");
                $("#mission_going_1").html("<div class='mission_bg'></div>");
                $("#mission_" + (mission_index + 1)).html("<div style='font-size :5vmin;text-align: center;'>Success!</div>")
                success_total++;
                $("#gaming_mainpart").fadeIn();
                $("#mission_going_bg").fadeOut();
                fadein_voting();
                voted_cup = 0;
                // alert("任務成功!\n共有" + fail_cup + "個髒杯")
                setTimeout(function() {
                    alert("任務成功!\n共有" + fail_cup + "個髒杯");
                    fail_cup = 0;
                }, 1000);
                if (fail_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
                    $("#end_game").fadeIn();
                };
                if (success_total == 3) {
                    $("#mission_going_bg").fadeOut();
                    $("#end_game").html("任務成功，刺客請指認!")
                    $("#end_game").fadeIn();
                };
            };
        };
        if (fail_total == 3) {
            $("#mission_going_bg").fadeOut();
            $("#end_game").html("任務失敗!<br>邪惡方獲勝!");
            $("#end_game").fadeIn();
        };
        if (success_total == 3) {
            $("#mission_going_bg").fadeOut();
            $("#end_game").html("任務成功，刺客請指認!")
            $("#end_game").fadeIn();
        };
    });

    $("#lake_lady").click(function() {
        if ((fail_total + success_total) >= 2 && lady_check == 0) {
            alert("請挑選您想驗身分的人，並交給他，請他按確認\n湖中女神將轉移至被驗者手上\n一局只可使用一次")
            lady_check = 1;
            $("#gaming_mainpart").fadeOut();
            $("#lake").fadeIn();

            setTimeout(function() {
                alert("請誠實選出你的身分，若你為好人方，請選擇聖杯(任務成功)\n若你為壞人方，請選擇髒杯(任務失敗)")
                s_f = shuffle(s_f);

                if (s_f[0] == 1) {
                    $("#lake_left").html("<div id='success_m'></div>");
                    $("#lake_right").html("<div id='fail_m'></div>");
                } else if (s_f[0] == 0) {

                    $("#lake_right").html("<div id='success_m'></div>");
                    $("#lake_left").html("<div id='fail_m'></div>");
                };
            }, 1000);
            // voted_cup_confirm = 1;
        }

    });
    $("#lake_left").click(function() {
        $("#lake_left").html('<div class="mission_bg"></div>')
        $("#lake_right").html('<div class="mission_bg"></div>')
        setTimeout(function() {
            if (s_f[0] == 0) {
                alert("請交給原持有湖中女神的人");
                alert("他是壞人");
                alert("湖中女神請交還回去");
                $("#lake").fadeOut();
                $("#gaming_mainpart").fadeIn();
            } else if (s_f[0] == 1) {
                alert("請交給原持有湖中女神的人");
                alert("他是好人");
                alert("湖中女神請交還回去");
                $("#lake").fadeOut();
                $("#gaming_mainpart").fadeIn();
            };
        }, 1000)
    });
    $("#lake_right").click(function() {
        $("#lake_left").html('<div class="mission_bg"></div>')
        $("#lake_right").html('<div class="mission_bg"></div>')
        setTimeout(function() {
            if (s_f[0] == 1) {
                alert("請交給原持有湖中女神的人");
                alert("他是壞人");
                alert("湖中女神請交還回去");
                $("#lake").fadeOut();
                $("#gaming_mainpart").fadeIn();
            } else if (s_f[0] == 0) {
                alert("請交給原持有湖中女神的人");
                alert("他是好人");
                alert("湖中女神請交還回去");
                $("#lake").fadeOut();
                $("#gaming_mainpart").fadeIn();
            };
        }, 1000)
    });
    // $("#title_cup").click(function() {
    // });
    // */

});