$("#month_toggle_button").click(function() {
  $( this ).toggleClass("toggle__option--selected");
  $('#week_toggle_button').toggleClass("toggle__option--selected")
  $('#week2').toggle()
  $('#week3').toggle()
  $('#week4').toggle()
  $('#week5').toggle()
});

$("#week_toggle_button").click(function() {
  $( this ).toggleClass("toggle__option--selected");
  $('#month_toggle_button').toggleClass("toggle__option--selected")
  $('#week2').toggle()
  $('#week3').toggle()
  $('#week4').toggle()
  $('#week5').toggle()
});


var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();
var dateStr = month +' '+ year;

document.getElementById("current_month").innerHTML = dateStr;

function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();

}
console.log(daysInMonth(2,2020));

var number_days = daysInMonth(2,2020)



$('#day1').click(function() {
    $("#image1").toggle();
    });



$('#day2').click(function() {
    $("#image2").toggle();
    });


$('#day3').click(function() {
    $("#image3").toggle();
    });


$('#day4').click(function() {
    $("#image4").toggle();
    });

$('#day5').click(function() {
    $("#image5").toggle();
    });


$('#day6').click(function() {
    $("#image6").toggle();
    });


$('#day7').click(function() {
    $("#image7").toggle();
    });


var list = $("#week5_day_29, #week5_day_30, #week5_day_31")
    $("#week5").hide();


$("#left_arrow_button").click(function() {
    alert("Your anchor is clicked.");
});

$("#right_arrow_button").click(function() {
    alert("Your anchor is clicked.");
});
