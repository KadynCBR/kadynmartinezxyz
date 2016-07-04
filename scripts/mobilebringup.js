// $(document).on("pageinit", "#body-container", function(){
    // $("#body-container").on("swiperight",function() {
    //   $("#cbp-spmenu-s1").addClass("cbp-spmenu-open");
    // });
    // $("#body-container").on("swipeleft", function() {
    //   $("#cbp-spmenu-s1").removeClass("cbp-spmenu-open");
    // });
// });
// $(document).on('swipeleft', '#body-container', function(e) {
  // console.log("Swipeleft");
  // });
$(function() {
  $("#swipe-indicator").mousedown(function(e) {
    $("#cbp-spmenu-s1").toggleClass("cbp-spmenu-open");
    e.stopPropagation();
  });
  $("#body-container").mousedown(function() {
      if( $("#cbp-spmenu-s1").hasClass("cbp-spmenu-open") ) {
        $("#cbp-spmenu-s1").toggleClass("cbp-spmenu-open");
      }
  });


});
