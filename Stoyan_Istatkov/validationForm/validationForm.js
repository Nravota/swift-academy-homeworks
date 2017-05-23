/**
 * Created by STEVIS on 5/18/2017.
 */


$(document).ready(function () {
    "use strict";

    var valName = /^[a-zA-Z ]{2,30}$/;
    var name  = $("#user_name").val();

    var valFamily = /^[a-zA-Z ]{2,30}$/;
    var family = $("#family_name").val();

    var valEmail = /^[A-Za-z][\w\.\-\_\d]+@[a-z]+[\.][a-z]+$/;
    var email = $("#user_email").val();

    var valPhone = /^(\+|00)359 ?\d{3} ?\d{3} ?\d{3}$/;
    var phone = $("#user_phone").val();

    var valPassword = /^[0-9a-zA-Z_]{3,}$/;
    var password = $("#user_password").val();


    $("button").on("click", function (event) {

        event.preventDefault();

        if (( name === "" ) || ( family === "" ) || ( email === "" ) || ( phone === "" ) || ( password === "" ) ) {

            $("#button-error-field").html("Empty inputs !!!");
            $("button").addClass("disabled");
        }
        else {
            $("#button-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_name").on("blur", function () {

        if (!valName.test(name)) {

            $("#username-error-field").html("Only letters ; 2 symbols minimum");
            $("button").addClass("disabled");
        }
        else {
            $("#username-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#family_name").on("blur", function () {

        if (!valFamily.test(family)) {

            $("#familyName-error-field").html("Only letters ; 2 symbols minimum");
            $("button").addClass("disabled");
        }
        else {
            $("#familyName-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_email").on("blur", function () {

        if (!valEmail.test(email)) {

            $("#email-error-field").html("*****@*****.domain");
            $("button").addClass("disabled");
        }
        else {
            $("#email-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_phone").on("blur", function () {

        var valPhone = /^(\+|00)359 ?\d{3} ?\d{3} ?\d{3}$/;
        var phone = $("this").val();

        if (!valPhone.test(phone)) {

            $("#phone-error-field").html("359 **** *** ***");
            $("button").addClass("disabled");
        }
        else {
            $("#phone-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_password").on("blur", function () {

        var valPassword = /^[A-Za-z0-9]{3,}$/;
        var password = $("#user_password").val();

        if (!valPassword.test(password)) {

            $("#password-error-field").html("Only letters (either case), numbers, underscore; 3 symbols minimum");
            $("button").addClass("disabled");
        }
        else {
            $("#password-error-field").html("");
            $("button").removeClass("disabled");
        }
    });


})();
