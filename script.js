  // First thing is listing the main varilables that will be used in the following functions

var todayDate = $("#currentDay");
var thisHour = $("#currentTime");
var nowTime = moment().hours();


// setting the date of today using the [Moment.js](https://momentjs.com/) library to work with date and time.
// first is showing date on the left side of the top of the page using setInterval
setInterval(() => {
    // the two varilables used for showing the date
    var grabDate = moment();
    var thisDate = grabDate.format("dddd, MMMM DD, YYYY");
    
    todayDate.text(thisDate);
}, 100);

// second is showing time on the right side of the top of the page using setInterval
setInterval(() => {
    // the two varlianles used for showing current time
    var grabDate = moment();
    var thisDate = grabDate.format("hh:mm:ss A");
    
    thisHour.text(thisDate);
}, 100);

// Changing the colors of the inputs of the scheduler according to the time. Past has its own color, present has its own color, and future has its own color.
// Using the function document and link it to the html document to start functioning using the ids.
$(document).ready(function () {
  $("input").each((element) => {
    var id = $("input")[element].id;
    var timing = parseInt($("#" + id).attr("data-hour"));

    // Using the codition method to see of the current time is past, present ir future, based on which colors are changable. 
    if (timing < nowTime) {
      $("#" + id).addClass("past");
    } else if (timing === nowTime) {
      $("#" + id).addClass("present");
    } else {
      $("#" + id).addClass("future");
    }
  });
});

// Storing inserted data using localStorage method.
$(".save").click(function () { 
    $('input[type="text"]').each(function () { 
        var id = $(this).attr('id'); 
        var value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});

$('input[type="text"]').each(function () { 
    var getId = $(this).attr('id'); 
    var store = localStorage.getItem(getId); 
    document.getElementById(getId).value = store; 
});