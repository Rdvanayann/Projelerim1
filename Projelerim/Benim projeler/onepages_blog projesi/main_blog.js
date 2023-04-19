$(function () {
       var autoComplete = [
              "ActionScript",
              "AppleScript",
              "Asp",
              "Ajax",
              "BASIC",
              "Bootstrap",
              "C",
              "C++",
              "Clojure",
              "COBOL",
              "ColdFusion",
              "Css3",
              "Erlang",
              "Fortran",
              "Groovy",
              "Haskell",
              "Html5",
              "Java",
              "Javascript",
              "Jquery",
              "Lisp",
              "Perl",
              "PHP",
              "Python",
              "Ruby",
              "Scala",
              "Scheme",
       ];
       $("#tags").autocomplete({
              source: autoComplete
       });
});


$(function () {
       $("#btn_giris").click(function () {
              $("#myUye").modal();

       });
})
/* user_email user_phone user password */
/* Form Validation Jquery */

$(function () {
       $("#btnSubmit").click(function () {
              var email, phone, password;
              email = $("#user_email").val();
              email=jQuery.trim(email);

              phone = $("#user_phone").val();
              email=$.trim(phone);

              password = $("#user_password").val();
              password=password.trim(password);

              /* validation_email,validation_phone,
              Validation_password */

              if (email == "") {
                     $("#validation_email").html("Email boş geçilemez")
              }else if(validateEmail(email)==false){
                     $("#validation_email").html("Email'i uygun formatta giriniz ");
              }
              if (phone == "") {
                     $("#validation_phone").html("Telefon boş geçilemez")
              }else if($.isNumeric(phone)==false){
                     $("#validation_phone").html("Sayı girmelisiniz")
              }else if(validatePhone(phone)==false){
                     $("#validation_phone").html("Telefon numarasını uygun formatta girmelisiniz")

              }

              if (password == "") {
                     $("#validation_password").html("Şifre boş geçilemez")
              }

              /* Validation Email regex*/
              
            function validateEmail(email) {
              var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

              return regex.test(email);
            }

               /* Validation Phone number regex */
               function validatePhone(telephoneNumber) {
                     var phone=/^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/;

                     return phone.test(telephoneNumber);
              }
       });
});

/* ***************************************************** */

$(function () {
       $("#picture_1").tooltip();
       $("#btn_tooltip").tooltip();


})




