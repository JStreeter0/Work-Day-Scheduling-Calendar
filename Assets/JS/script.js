// add current date to top of calendar
var todayDate = moment().format("MMM Do YY");
$("#currentDay").append(todayDate);

// save entered content and set past/present/future
$(document).ready(function () {
     
    $(".saveBtn").on("click", function () {
       
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        localStorage.setItem(time, text);
    })

    function timeTracker() {

    }
})

// pull items from local storage