$(document).ready(function () {
    var num = 0;
    var op = null;
    var display = "";

    $(".numpad").click(function () {
        display += $(this).text()
        $("#display").prop("value", display);
    });

    $("#clear").click(function () {
        var num = 0;
        var op = null;
        var display = "";
        $("#display").prop("value", display);

    });

    $("#add").click(function () {
        num = parseInt(display, 10);
        op = function (v) {
            return num + v
        };
        display = ""
        $("#display").prop("value", display);

    });

    $("#equal").click(function () {
        num = op(parseInt(display, 10));
        display = num;
        $("#display").prop("value", display);
        display = "";
    });

});