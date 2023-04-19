
$(document).ready(function (){
       $("#accordion").accordion();

});

/*
$(function (){

});
*/

$(function (){
$("#tabs").tabs();
});

// $(function (){
// $("rresizable").resizable();
// });

$(function (){
       $("#dialog").dialog({
              autoOpen:false
       });
$("#dialogButton").click(function () {
  $("#dialog").dialog('open');
});
});

$(function (){
var autoComplete=[
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
       source:autoComplete
});
});




 
