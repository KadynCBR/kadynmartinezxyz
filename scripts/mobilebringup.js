$(function() {
  $("#body-container").on("swiperight",function() {
    $("#cbp-spmenu-s1").addClass("cbp-spmenu-open");
  });
  $("#body-container").on("swipeleft", function() {
    $("#cbp-spmenu-s1").removeClass("cbp-spmenu-open");
  });
  $("#swipe-indicator").mousedown(function() {
    $("#cbp-spmenu-s1").toggleClass("cbp-spmenu-open");
  });
});
