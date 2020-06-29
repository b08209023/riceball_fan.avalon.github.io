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
        $("#door").fadeOut();
        $("#char_setting2").fadeIn();
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
            array.push("#b_mordred");
            bad_amount++;
            b_1 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#b_2").click(function() {
        if (bad_amount < bad_man && b_2 == 0) {
            array.push("#b_assassin");
            bad_amount++;
            b_2 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#b_3").click(function() {
        if (bad_amount < bad_man && b_3 == 0) {
            array.push("#b_mokina");
            bad_amount++;
            b_3 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#b_4").click(function() {
        if (bad_amount < bad_man && b_4 == 0) {
            array.push("#b_bad");
            bad_amount++;
            b_4 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_1").click(function() {
        if (good_amount < good_man && g_1 == 0) {
            array.push("#g_maylin");
            good_amount++;
            g_1 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_2").click(function() {
        if (good_amount < good_man && g_2 == 0) {
            array.push("#g_par");
            good_amount++;
            g_2 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_3").click(function() {
        if (good_amount < good_man && g_3 == 0) {
            array.push("#g_loyal1");
            good_amount++;
            g_3 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_4").click(function() {
        if (good_amount < good_man && g_4 == 0) {
            array.push("#g_loyal2");
            good_amount++;
            g_4 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_5").click(function() {
        if (good_amount < good_man && g_5 == 0) {
            array.push("#g_loyal3");
            good_amount++;
            g_5 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#g_6").click(function() {
        if (good_amount < good_man && g_6 == 0) {
            array.push("#g_loyal4");
            good_amount++;
            g_6 = 1;
            $("#choicing_txt").html("請記得必帶[梅林]與[刺客]<br>壞人選" + bad_man + "個<br>好人選" + good_man + "個<br>目前壞人已選" + bad_amount + "<br>目前好人已選" + good_amount)
        }
    })
    $("#choicing_down").click(function() {
        amo = good_amount + bad_amount;
        if ((amo == people_amount && b_2 == 1 && g_1 == 1)) {
            $("#char_setting2").fadeOut();
            $("#char_setting").fadeIn();
            array = shuffle(array);
        } else {
            if (amo != people_amount)
                alert("沒選完人")
            else if (g_1 == 0)
                alert("沒選到梅林")
            else if (b_2 == 0)
                alert("沒選到刺客")
        }
    });
    index = 0;




})