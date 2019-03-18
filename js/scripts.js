$(document).ready(function() {
  $("#activity-button").click(function() {
    $("#activity-list").append("<li class='list-item'>" + $("#new-activity").val() + "</li>");
    $("#new-activity").val("");
  })
})
