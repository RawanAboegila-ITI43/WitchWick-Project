


$(document).ready(function () {
    $('.message a').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });



    $('#createAccount').click(function () {


        var name = $('#newName').val();
        var email = $('#newEmail').val();
        var user_phone_number = $('#newPhone').val();
        var pass = $('#newPass').val();
        var pass2 = $('#newPass2').val();

        var phone_nuber_filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        var is_user_phone_valid = phone_nuber_filter.test(user_phone_number);

        var email_filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var is_email_valid = email_filter.test(email);

        var is_password_valid = false;

        if ((pass === pass2) && (pass.length) >= 8 && (pass2.length >= 8)) {
            is_password_valid = true;
        }
        console.log("passowrd status", is_password_valid);
        console.log("email status", is_email_valid);
        console.log("phone status", is_user_phone_valid);

        if (is_email_valid === true && name.length > 5 && is_user_phone_valid === true && is_password_valid === true) {
            // $('#createAccount').prop('disabled', false);
            alert(email + " Account created successfully!")
        }
        else if (is_password_valid === false) {
            if (pass !== pass2) {
                alert("Passwords do not match")
            } else {
                alert("Password must be at least 8 characters long")
            }

        }
        else if (is_email_valid === false) {
            alert("Invalid Email Address!")
        }
        else if (is_user_phone_valid === false) {
            alert("Invalid Phone Number!")
        }
        else {
            alert("Invalid Data Entered!")
        }

    });


    $('#loginAccount').click(function () {
        var email = $('#email').val();
        var pass = $('#password').val();

        var email_filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var is_email_valid = email_filter.test(email);

        var is_password_valid = false;

        if ((pass.length) >= 8) {
            is_password_valid = true;
        }
        if (is_email_valid === true && email.length > 10 && is_password_valid === true) {

            alert(email + " Account Logged In successfully!")
        }
        else if (is_password_valid === false) {
            if (pass.length === 0) {
                alert("Please enter a password")
            } else {
                alert("Incorect Password!")
            }

        }
        else if (is_email_valid === false) {
            alert("Invalid Email Address!")
        }
        else {
            alert("Invalid Data Entered!")
        }

    });
});
