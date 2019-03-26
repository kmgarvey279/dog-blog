$(document).ready(function() {
  $("#activity-button").click(function() {
    $("#activity-list").append("<li class='list-item'>" + $("#new-activity").val() + "</li>");
    $("#new-activity").val("");
  })
})

$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#revert").click(function() {
    $("body").removeClass();
  });
});
