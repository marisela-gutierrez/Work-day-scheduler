var events = {};

var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd MMMM YYYY"));


var loadEvents = function() {
  events = JSON.parse(localStorage.getItem("events"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!events) {
    events = ["", "", "", "", "", "", "", "", ""];
  }

  for (let i =0; i < events.length; i++) {
    $("#" + i + "H").val(events[i]);
  }

};
 

var saveEvent = function() {
  localStorage.setItem("events", JSON.stringify(events));
};

// save button was clicked
$(".saveBtn").click(function() {
  // get text values
  var id = this.id;
  var eventTask = $("#" + id + "H").val();

  if (eventTask) {
    events[parseInt(id)] = eventTask;
  }
  saveEvent();
});

var checkTime = function() {
  var presentHour = parseInt(currentDayEl.format("H"));

  for (i = 9; i <= 17; i++) {
    if (i == presentHour) {
      $("#" + i + "H").addClass("present");
    } else if (i < presentHour) {
      $("#" + i + "H").addClass("past");
    } else if (i > presentHour) {
      $("#" + i + "H").addClass("future");
    }

  }

};

loadEvents();
checkTime();
