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
            alert("準備輪流看角色");
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
    var clicked = 0
    $("#char_photo").click(function() {
        if (index == people_amount) {
            $("#char_setting").fadeOut(500);
            $("#gaming_mainpart").fadeIn(1000);
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

    })




})