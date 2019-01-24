jQuery(function($) {

  $(".food .food-thumb").click(function() {

    $(this).next(".ingredients").removeClass("slideOutDown");
    $(this).next(".ingredients").css("display", "block");
    $(this).next(".ingredients").addClass("slideInUp");

  });

  $(".food-container .food .ingredients .header a").click(function() {

    $(this).parent().parent().removeClass("slideInUp");
    $(this).parent().parent().addClass("slideOutDown");

    setTimeout(function() {

      $(this).next(".ingredients").css("display", "none");

    }, 500);

  });

});
