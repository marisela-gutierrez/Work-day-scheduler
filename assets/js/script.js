var events = {};

var createEvent = [];




var loadEvents = function() {
  events = JSON.parse(localStorage.getItem("events"));

  // if nothing in localStorage, create a new object to track all event status arrays
  if (!events) {
    events = {
      toDo: [],
      inProgress: [],
      inReview: [],
      done: []
    };
  }

// modal was triggered
$("#eventPlan").on("click", "textarea", function() {
  // get current text
  var eventAgenda = $(this)
    .text()
    .trim();

  // create new input element
  var eventInput = $("#eventDescription")
    .attr("type", "text")
    .addClass("form-control")
    .val(eventAgenda);
  $(this).replaceWith(eventInput);

  var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
  };

  // save button in modal was clicked
$("#eventPlan .saveBtn").click(function() {
  // get form values
  var eventText = $("#eventDescription").val();

  if (eventText) {
    createEvent();

    // save events in array
    events.toDo.push({
      text: eventText
    });
  }
});

// load events for the first time
loadEvents();
